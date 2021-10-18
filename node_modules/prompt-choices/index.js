'use strict';

const swap = require('arr-swap');
const Paginator = require('terminal-paginator');
const define = require('define-property');
const visit = require('collection-visit');
const Choice = require('./lib/choice');
const utils = require('./lib/utils');

/**
 * Create a new `Choices` collection.
 *
 * ```js
 * const choices = new Choices(['foo', 'bar', 'baz']);
 * const choices = new Choices([{name: 'foo'}, {name: 'bar'}, {name: 'baz'}]);
 * ```
 * @param {Array} `choices` One or more `choice` strings or objects.
 * @api public
 */

function Choices(choices, options) {
  if (utils.isObject(choices) && choices.isChoices) {
    return choices;
  }

  define(this, 'isChoices', true);
  this.options = options || {};
  this.answers = this.options.answers || {};
  this.paginator = new Paginator(this.options);
  this.choices = [];
  this.items = [];
  this.keymap = {};
  this.keys = [];
  this.original = [];
  this.position = 0;

  if (choices) {
    this.original = utils.clone(choices);
    this.addChoices(choices);
  }
}

/**
 * Render choices.
 *
 * @param {Number} `position` Cursor position
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

Choices.prototype.render = function(position, options) {
  const opts = Object.assign({limit: 7}, this.options, options);
  let buf = '';

  if (opts.radio === true) {
    opts.limit += 2;
  }

  this.position = position || 0;
  for (let i = 0; i < this.choices.length; i++) {
    let choice = this.choices[i];
    if (opts && typeof opts.renderChoice === 'function') {
      buf += opts.renderChoice.call(this, this.position, choice, opts);
    } else {
      buf += this.renderChoice(choice, this.position, opts);
    }
  }

  const str = '\n' + buf.replace(/\s+$/, '');
  return this.paginator.paginate(str, this.position, opts);
};

/**
 * Render a specific choice. This can be overridden in prompts.
 *
 * ```js
 * choices.render = function(choice, position, options) {
 *   // do custom logic
 *   return '';
 * };
 * ```
 * @param {Object} `choice`
 * @param {Number} `position`
 * @param {Object} `options`
 * @return {String} Returns the line to render.
 * @api public
 */

Choices.prototype.renderChoice = function(choice, position, options) {
  return choice.render.call(choice, position, options);
};

/**
 * Create a new `Choice` object.
 *
 * ```js
 * choices.choice('blue');
 * ```
 * @param {String|Object} `val`
 * @return {Object} Returns a choice object.
 * @api public
 */

Choices.prototype.choice = function(val) {
  const choice = new Choice(val, this.options);
  define(choice, 'parent', this);
  return choice;
};

/**
 * Returns a normalized `choice` object.
 *
 * ```js
 * choices.toChoice('foo');
 * choices.toChoice({name: 'foo'});
 * ```
 * @param {Object|String} `choice`
 * @return {Object}
 * @api public
 */

Choices.prototype.toChoice = function(choice) {
  if (choice.type === 'separator') {
    if (!choice.isSeparator) {
      choice = this.separator(choice.line, this.options);
    }
    return choice;
  }
  return this.choice(choice);
};

/**
 * Add a normalized `choice` object to the `choices` array.
 *
 * ```js
 * choices.addChoice(['foo', 'bar', 'baz']);
 * ```
 * @param {string|Object} `choice` One or more choices to add.
 * @api public
 */

Choices.prototype.addChoice = function(choice) {
  choice = this.toChoice(choice);
  if (!choice.disabled && choice.type !== 'separator') {
    choice.index = this.items.length;
    this.keymap[choice.key] = choice;
    this.keys.push(choice.key);
    this.items.push(choice);
  }

  if (this.default == null && choice.default === true) {
    this.default = choice.name;
    choice.default = false;
  }

  this.choices.push(choice);
  return this;
};

/**
 * Add an array of normalized `choice` objects to the `choices` array. This
 * method is called in the constructor, but it can also be used to add
 * choices after instantiation.
 *
 * ```js
 * choices.addChoices(['foo', 'bar', 'baz']);
 * ```
 * @param {Array|Object} `choices` One or more choices to add.
 * @api public
 */

Choices.prototype.addChoices = function(choices) {
  if (this.options.radio === true && Array.isArray(choices) && choices.length > 1) {
    choices = { all: choices };
  }

  if (utils.isObject(choices)) {
    choices = this.toGroups(choices);
  }

  if (!Array.isArray(choices)) {
    return;
  }

  for (const choice of choices) {
    this.addChoice(choice);
  }
};

/**
 * Create choice "groups" from the given choices object.
 * ![choice groups](docs/prompt-groups.gif).
 *
 * ```js
 * choices.toGroups({
 *   foo: ['a', 'b', 'c'],
 *   bar: ['d', 'e', 'f']
 * });
 * ```
 * @param {Object} `choices` (required) The value of each object must be an array of choices (strings or objects).
 * @return {Array} Returns an array of normalized choice objects.
 * @api public
 */

Choices.prototype.toGroups = function(choices) {
  if (!utils.isObject(choices)) {
    throw new TypeError('expected choices to be an object');
  }

  let line = this.separator(this.options);
  let keys = Object.keys(choices);
  let head = [];
  let tail = this.options.radio ? [line] : [];
  let items = [];

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let val = choices[key];
    let arr = (utils.isObject(val) && val.choices) ? val.choices : val;

    if (!Array.isArray(arr)) {
      throw new TypeError('expected group choices to be an array');
    }

    let select = this.choice({
      name: key,
      type: 'group',
      choices: [],
      keys: []
    });

    if (key !== 'all') {
      tail.push(select);
    }

    for (let j = 0; j < arr.length; j++) {
      let choice = this.choice(arr[j]);
      choice.type = 'option';
      choice.group = select;
      choice.groupName = key;
      select.choices.push(choice);
      select.keys.push(choice.name);
      tail.push(choice);
      items.push(choice);
    }
  }

  let none = {name: 'none', type: 'radio', choices: items};
  let all = {name: 'all', type: 'radio', choices: items};
  if (keys.length === 1 && items.length <= 2) {
    return tail.filter(function(choice) {
      let isOption = choice.type === 'option';
      delete choice.type;
      return isOption;
    });
  }

  if (this.options.radio === true) {
    head.unshift(none);
    head.unshift(all);

  } else if (keys.length === 1 && keys[0] === 'all') {
    head.push(none);
  }

  return head.concat(tail);
};

/**
 * Create a new `Separator` object. See [choices-separator][]
 * for more details.
 *
 * ```js
 * choices.separator();
 * ```
 * @param {String} `separator` Optionally pass a string to use as the separator.
 * @return {Object} Returns a separator object.
 * @api public
 */

Choices.prototype.separator = function(separator, options) {
  return new utils.Separator(separator, options);
};

/**
 * Returns true if a choice exists.
 *
 * ```js
 * choices.hasChoice(1);
 * choices.hasChoice('foo');
 * ```
 * @param {Number} `val` The index or key of the choice to check for.
 * @return {Boolean}
 * @api public
 */

Choices.prototype.hasChoice = function(val) {
  return typeof this.get(val) !== 'undefined';
};

/**
 * Get a non-separator choice from the collection.
 *
 * ```js
 * choices.getChoice(1);
 * choices.getChoice('foo');
 * ```
 * @param {Number} `idx` The selected choice index
 * @return {Object|undefined} Return the matched choice object or undefined
 * @api public
 */

Choices.prototype.getChoice = function(idx) {
  if (typeof idx === 'string') {
    idx = this.getIndex(idx);
  }

  const choice = this.items[idx];
  if (choice) {
    choice.index = idx;
    return choice;
  }
};

/**
 * Get the index of a non-separator choice from the collection.
 *
 * ```js
 * const choices = new Choices(['foo', 'bar', 'baz']);
 * console.log(choices.getIndex('foo')); //=> 0
 * console.log(choices.getIndex('baz')); //=> 2
 * console.log(choices.getIndex('bar')); //=> 1
 * console.log(choices.getIndex('qux')); //=> -1
 * ```
 * @param {String} `key` The key of the choice to get
 * @return {Number} Index of the choice or `-1`;
 * @api public
 */

Choices.prototype.getIndex = function(key) {
  if (Choices.isChoice(key)) {
    return this.items.indexOf(key);
  }
  if (typeof key === 'string') {
    return this.items.indexOf(this.keymap[key]);
  }
  return this.isValidIndex(key) ? key : -1;
};

/**
 * Get the choice at the specified index.
 *
 * ```js
 * const choice = choices.get(1);
 * //=> {name: 'foo'}
 * const choice = choices.get(1, 'name');
 * //=> 'foo'
 * ```
 * @param {Number|String} `key` The name or index of the object to get
 * @return {Object} Returns the specified choice
 * @api public
 */

Choices.prototype.get = function(key, prop) {
  if (typeof key === 'string') {
    key = this.getIndex(key);
  }
  if (!utils.isNumber(key)) {
    return null;
  }
  const choice = this.getChoice(key);
  if (choice && typeof prop === 'string') {
    return choice[prop];
  }
  return choice;
};

/**
 * Clear all choices from the instance. This is useful when you
 * need to update the indices of choices without re-instantiating.
 *
 * ```js
 * choices.clear();
 * ```
 * @api public
 */

Choices.prototype.clear = function() {
  this.choices = [];
  this.items = [];
  this.keymap = {};
  this.keys = [];
};

/**
 * Return the `.key` property from the choice at the given index.
 * @param {String} `key` Property name to use for plucking objects.
 * @return {Array} Plucked objects
 * @api public
 */

Choices.prototype.key = function(val) {
  return this.get(val, 'key');
};

/**
 * Check the choice at the given `idx`.
 *
 * ```js
 * choices.check(1);
 * ```
 * @param {Number|Array} `val` The key(s) or index(s) of the choice(s) to check.
 * @api public
 */

Choices.prototype.check = function(val) {
  if (typeof val === 'undefined') {
    val = this.keys;
  }
  if (Array.isArray(val)) {
    visit(this, 'check', val);
    return this;
  }
  const choice = this.get(val);
  if (choice != null) {
    choice.checked = true;
  }
  return this;
};

/**
 * Disable the choice at the given `idx`.
 *
 * ```js
 * choices.uncheck(1);
 * ```
 * @param {Number} `idx` The index of the choice to enable.
 * @api public
 */

Choices.prototype.uncheck = function(val) {
  if (typeof val === 'undefined') {
    val = this.keys;
  }
  if (Array.isArray(val)) {
    visit(this, 'uncheck', val);
    return this;
  }
  const choice = this.get(val);
  if (choice) {
    choice.checked = false;
  }
  return this;
};

/**
 * Returns true if a choice is checked.
 *
 * ```js
 * const choices = new Choices(['foo', 'bar', 'baz']);
 * console.log(choices.isChecked('foo'));
 * //=> false
 * choices.check('foo');
 * console.log(choices.isChecked('foo'));
 * //=> true
 * ```
 * @param {String|Number} `name` Name or index of the choice.
 * @return {Boolean}
 * @api public
 */

Choices.prototype.isChecked = function(name) {
  if (Array.isArray(name)) {
    for (const ele of name) {
      if (!this.isChecked(ele)) {
        return false;
      }
    }
    return true;
  }

  const choice = this.get(name);
  if (choice) {
    return choice.checked === true;
  }
};

/**
 * Toggle the choice at the given `idx`.
 *
 * ```js
 * choices.toggle(1);
 * // radio mode
 * choices.toggle(1, true);
 * ```
 * @param {Number} `idx` The index of the choice to toggle.
 * @api public
 */

Choices.prototype.toggle = function(val, radio) {
  if (typeof val === 'undefined') {
    val = this.keys;
  }

  if (Array.isArray(val)) {
    visit(this, 'toggle', val, radio);
    return this;
  }

  const choice = this.get(val);
  if (!choice) {
    return this;
  }

  if (radio) {
    utils.toggle(this.items, 'checked', this.getIndex(choice));
  } else {
    choice.toggle();
  }

  if (choice.type === 'group') {
    choice.checked = this.isChecked(choice.keys);
  }
  if (choice.type === 'option') {
    choice.group.checked = this.isChecked(choice.group.keys);
  }

  this.update();
  return this;
};

/**
 * When user press `enter` key
 */

Choices.prototype.radio = function() {
  const choice = this.get(this.position);
  if (!choice) return;

  if (choice.type === 'group') {
    if (choice.checked === true) {
      this.uncheck(choice.keys);
    } else {
      this.check(choice.keys);
    }
    choice.toggle();
    this.update();
    return;
  }

  if (choice.type === 'option') {
    choice.toggle();
    choice.group.checked = this.isChecked(choice.group.keys);
    this.update();
    return;
  }

  if (this.length > 1) {
    if (choice.name === 'all') {
      this[choice.checked ? 'uncheck' : 'check']();
      this.toggle('none');
      this.update();
      return;
    }

    if (choice.name === 'none') {
      this.uncheck();
      this.check(this.position);
      this.update();
      return;
    }
  }

  choice.toggle();
  this.update();
};

/**
 * Update "radio" choices to ensure that `all` and `none` are
 * correct based on other choices.
 */

Choices.prototype.update = function() {
  if (this.all) {
    this.check('all');
    this.uncheck('none');
    return;
  }
  if (this.none) {
    this.uncheck('all');
    this.check('none');
    return;
  }
  if (this.checked.length) {
    this.uncheck(['all', 'none']);
  }
};

/**
 * Swap two choices in the choices array.
 *
 * @param {String|Number} `a`
 * @param {String|Number} `b`
 * @return {Object} Returns the `Choices` instance
 * @api public
 */

Choices.prototype.swap = function(a, b) {
  const choices = swap(this.choices.slice(), a, b);
  this.clear();
  this.addChoices(choices);
  return this;
};

/**
 * Return choice values for choices that return truthy based
 * on the given `val`.
 *
 * @param {Array|Object|Function|String|RegExp} `val`
 * @return {Array} Matching choices or empty array
 * @api public
 */

Choices.prototype.where = function(val) {
  if (typeof val === 'function') {
    return this.filter(val);
  }

  if (typeof val === 'string') {
    return this.filter(function(choice) {
      return choice.name === val || choice.key === val;
    });
  }

  if (utils.typeOf(val) === 'regexp') {
    return this.filter(function(choice) {
      return val.test(choice.name) || val.test(choice.key);
    });
  }

  if (utils.isObject(val)) {
    return this.filter(function(choice) {
      for (const key in val) {
        if (!choice.hasOwnProperty(key)) {
          return false;
        }
        return val[key] === choice[key];
      }
    });
  }

  if (Array.isArray(val)) {
    let acc = [];
    for (const ele of val) {
      acc = acc.concat(this.where.call(this, ele));
    }
    return acc;
  }

  return [];
};

/**
 * Returns true if the given `choice` is a valid choice item, and
 * not a "group" or "radio" choice.
 *
 * @param {String} `key` Property name to use for plucking objects.
 * @return {Array} Plucked objects
 * @api public
 */

Choices.prototype.isItem = function(choice) {
  return choice.type !== 'separator'
    && choice.type !== 'group'
    && choice.type !== 'radio'
    && choice.name !== 'none'
    && choice.name !== 'all';
};

/**
 * Returns true if the given `index` is a valid choice index.
 * @param {String} `key` Property name to use for plucking objects.
 * @return {Array} Plucked objects
 * @api public
 */

Choices.prototype.isValidIndex = function(idx) {
  return utils.isNumber(idx) && idx !== -1 && idx < this.items.length;
};

/**
 * Pluck an object with the specified key from the choices collection.
 * @param {String} `key` Property name to use for plucking objects.
 * @return {Array} Plucked objects
 * @api public
 */

Choices.prototype.pluck = function(key) {
  return this.items.map(function(choice) {
    return choice[key];
  });
};

/**
 * Convenience array methods
 */

Choices.prototype.indexOf = function() {
  return this.getChoice(this.keys.indexOf.apply(this.keys, arguments));
};

Choices.prototype.forEach = function() {
  return this.items.forEach.apply(this.items, arguments);
};

Choices.prototype.filter = function() {
  return this.items.filter.apply(this.items, arguments);
};

Choices.prototype.some = function() {
  return this.items.some.apply(this.items, arguments);
};

Choices.prototype.every = function() {
  return this.items.every.apply(this.items, arguments);
};

/**
 * Getter for getting the default choice.
 * @name .default
 * @api public
 */

Object.defineProperty(Choices.prototype, 'default', {
  configurable: true,
  set: function(val) {
    this._default = this.getIndex(val);
  },
  get: function() {
    if (this._default == null) {
      for (const choice of this.items) {
        if (choice.default === true) {
          define(this, '_default', choice.index);
          break;
        }
      }
    }
    if (this._default != null) {
      this.check(this.getIndex(this._default));
    }
    return this._default;
  }
});

/**
 * Getter for getting the checked choices from the collection.
 * @name .checked
 * @api public
 */

Object.defineProperty(Choices.prototype, 'checked', {
  set: function() {
    throw new Error('.checked is a getter and cannot be defined');
  },
  get: function() {
    return this.items.reduce(function(acc, choice) {
      if (this.options.radio === true && !this.isItem(choice)) {
        return acc;
      }
      if (choice.checked === true) {
        acc.push(choice.value);
      }
      return acc;
    }.bind(this), []);
  }
});

Object.defineProperty(Choices.prototype, 'all', {
  set: function() {
    throw new Error('.all is a getter and cannot be defined');
  },
  get: function() {
    const items = this.filter(this.isItem);
    return items.length === this.checked.length;
  }
});

Object.defineProperty(Choices.prototype, 'none', {
  set: function() {
    throw new Error('.none is a getter and may not be defined');
  },
  get: function() {
    return this.checked.length === 0;
  }
});

/**
 * Getter for getting the length of the collection.
 * @name .length
 * @api public
 */

Object.defineProperty(Choices.prototype, 'length', {
  set: function() {
    throw new Error('.length is a getter and cannot be defined');
  },
  get: function() {
    return this.items.length;
  }
});

/**
 * Create a new `Separator` object. See [choices-separator][] for more details.
 *
 * ```js
 * new Choices.Separator();
 * ```
 * @param {String} `separator` Optionally pass a string to use as the separator.
 * @return {Object} Returns a separator object.
 * @api public
 */

Choices.Separator = utils.Separator;

/**
 * Create a new `Separator` object. See [choices-separator][] for more details.
 *
 * ```js
 * const Choices = require('prompt-choices');
 * const choices = new Choices(['foo']);
 * console.log(Choices.isChoices(choices)); //=> true
 * console.log(Choices.isChoices({})); //=> false
 * ```
 * @param {String} `choices` The value to test.
 * @return {Boolean} Returns true if the given value is an instance of `Choices`.
 * @api public
 */

Choices.isChoices = function(choices) {
  return utils.isObject(choices) && choices.isChoices;
};

/**
 * Create a new `Separator` object. See [choices-separator][] for more details.
 *
 * ```js
 * const Choices = require('prompt-choices');
 * const choices = new Choices(['foo']);
 * const foo = choices.getChoice('foo');
 * console.log(Choices.isChoice(foo)); //=> true
 * console.log(Choices.isChoice({})); //=> false
 * ```
 * @param {String} `choice` The value to test.
 * @return {Boolean} Returns true if the given value is an instance of `Choice`.
 * @api public
 */

Choices.isChoice = function(choice) {
  return utils.isObject(choice) && choice.isChoice;
};

/**
 * Expose `Choices`
 */

module.exports = Choices;
