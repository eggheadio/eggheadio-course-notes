'use strict';

const log = require('log-utils');
const koalas = require('koalas');
const define = require('define-property');
const pointer = require('pointer-symbol');
const radio = require('radio-symbol');
const strip = require('strip-color');
const utils = require('./utils');

/**
 * Create a new `Choice` to create a normalized choice object from the given input.
 * @param {String|Object} `val` Choice value. If an object is passed, it should contains at least one of `value` or `name` property.
 * @api public
 */

function Choice(choice, options) {
  if (typeof choice === 'string') {
    choice = { name: choice };
  }
  if (!utils.isObject(choice)) {
    throw new TypeError('expected choice to be a string or object');
  }
  if (choice.type === 'separator' || choice.isSeparator) {
    choice.isSeparator = true;
  }
  if (choice.isChoice || choice instanceof Choice) {
    return choice;
  }
  define(this, 'cache', {});
  this.initChoice(choice, options);
}

/**
 * Initialize choice.
 * @param {Object} `choice`
 * @param {Object} `options`
 */

Choice.prototype.initChoice = function(choice, options) {
  define(this, 'isChoice', true);

  this.name = null;
  this.short = null;
  this.value = null;
  this.disabled = false;
  this.checked = false;
  this.index = 0;

  define(this, 'position', 0);
  define(this, 'options', options || {});
  Object.assign(this, choice);

  this.name = choice.name || choice.value;
  if (typeof choice.hint === 'string') {
    this.hint = choice.hint;
  }

  this.value = choice.hasOwnProperty('value') ? choice.value : choice.name;
  this.short = choice.short || choice.name;
  define(this, 'key', this.key || this.short);

  this.pointer = pointer(this.options);
  if (!this.options.pointer) {
    this.pointer = log.cyan(this.pointer);
  }

  define(this, 'prefix', this.padding(this.pointer));
};

Choice.prototype.render = function(idx, options) {
  options = options || {};
  if (typeof options.pointer === 'string') {
    this.pointer = options.pointer;
  }
  if (typeof options.checkbox === 'string') {
    this.symbol = options.checkbox;
  }
  if (this.type === 'separator') {
    return this.value;
  }
  this.position = idx;
  return this.line;
};

Choice.prototype.toggle = function() {
  this.checked = !this.checked;
  return this;
};

Choice.prototype.format = function(str) {
  if (typeof this.options.format === 'function') {
    str = this.options.format.call(this, str);
  }
  return this.disabled ? log.dim(str) : str;
};

Choice.prototype.padding = function(val) {
  return Array(strip(val).length + 1).join(' ');
};

/**
 * Getter for getting the pointer to use before each line in the prompt
 * @name .pointer
 * @api public
 */

Object.defineProperty(Choice.prototype, 'siblings', {
  get: function() {
    return this.parent ? this.parent.items : null;
  }
});

/**
 * Getter for getting the choice.index
 * @name .index
 * @api public
 */

Object.defineProperty(Choice.prototype, 'index', {
  set: function(index) {
    define(this, 'idx', index);
  },
  get: function() {
    if (!Array.isArray(this.siblings)) {
      return this.idx;
    }
    var choice = this.siblings[this.idx];
    if (choice !== this) {
      this.idx = this.siblings.indexOf(this);
    }
    return this.idx;
  }
});

/**
 * Getter for getting the pointer to use before each line in the prompt
 * @name .pointer
 * @api public
 */

Object.defineProperty(Choice.prototype, 'pointer', {
  set: function(val) {
    define(this.cache, 'pointer', val);
  },
  get: function() {
    var pointer = this.cache.pointer || this.options.pointer;
    if (this.position !== this.index) {
      return (this.prefix = this.padding(pointer));
    }
    return pointer;
  }
});

/**
 * Getter for getting the current state of the choice. States
 * are `on`, `off` and `disabled`.
 * @name .state
 * @api public
 */

Object.defineProperty(Choice.prototype, 'state', {
  set: function() {
    throw new Error('.state is a getter and cannot be defined');
  },
  get: function() {
    if (this.disabled) {
      return 'disabled';
    }
    return this.checked ? 'on' : 'off';
  }
});

/**
 * Getter for getting the checkbox or radio symbol to use.
 * @name .symbol
 * @api public
 */

Object.defineProperty(Choice.prototype, 'symbol', {
  set: function(val) {
    if (typeof val === 'string') {
      throw new TypeError('expected checkbox symbol to be an object');
    }
    this.options.symbol = val;
  },
  get: function() {
    var opts = this.options;
    var symbol = koalas(opts.checkbox, opts.symbol, radio);
    if (symbol === false) {
      return '';
    }
    return symbol[this.state];
  }
});

/**
 * Getter for getting the line to render for a choice
 * @name .line
 * @api public
 */

Object.defineProperty(Choice.prototype, 'line', {
  configurable: true,
  set: function(line) {
    if (typeof line === 'string') this.value = line;
  },
  get: function() {
    var line = this.value;
    if (line.trim() === 'all' || line.trim() === 'none') {
      line = log.bold(line);
    }

    if (typeof this.disabled === 'string') {
      this.pointer = this.prefix;
      line += ' (' + this.disabled + ')';
    } else if (this.disabled === true) {
      this.pointer = this.prefix;
      line += ' (Disabled)';
    } else if (typeof this.hint === 'string') {
      line += this.hint;
    }

    var symbol = this.symbol;
    if (this.type === 'option') {
      symbol = '  ' + radio.check[this.state];
    }

    return this.pointer + symbol + ' '
      + this.format(line).replace(/\s+$/, '')
      + '\n';
  }
});

/**
 * Getter for getting the line to render for a choice
 * @name .line
 * @api public
 */

Object.defineProperty(Choice.prototype, 'disabled', {
  enumerable: true,
  set: function(disabled) {
    define(this.cache, 'disabled', disabled);
  },
  get: function() {
    if (typeof this.cache.disabled === 'function') {
      return this.cache.disabled.call(this, this.options.answers);
    }
    return this.cache.disabled;
  }
});

/**
 * Expose Choice
 */

module.exports = Choice;
