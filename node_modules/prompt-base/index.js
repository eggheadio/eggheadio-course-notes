'use strict';

var util = require('util');
var log = require('log-utils');
var koalas = require('koalas');
var debug = require('debug')('prompt-base');
var Emitter = require('component-emitter');
var Question = require('prompt-question');
var Actions = require('prompt-actions');
var extend = require('static-extend');
var utils = require('readline-utils');
var UI = require('readline-ui');

/**
 * Create a new Prompt with the given `question` object, `answers` and optional instance
 * of [readline-ui][].
 *
 * ```js
 * var prompt = new Prompt({
 *   name: 'color',
 *   message: 'What is your favorite color?'
 * });
 *
 * prompt.ask(function(answer) {
 *   console.log(answer);
 *   //=> 'blue'
 * });
 * ```
 * @param {Object} `question` Plain object or instance of [prompt-question][].
 * @param {Object} `answers` Optionally pass an answers object from a prompt manager (like [enquirer][]).
 * @param {Object} `ui` Optionally pass an instance of [readline-ui][]. If not passed, an instance is created for you.
 * @api public
 */

function Prompt(question, answers, ui) {
  debug('initializing from <%s>', __filename);

  if (!question) {
    throw new TypeError('expected question to be a string or object');
  }

  if (!(this instanceof Prompt)) {
    var proto = Object.create(Prompt.prototype);
    Prompt.apply(proto, arguments);
    return proto;
  }

  Emitter.call(this);
  if (!(question instanceof Question)) {
    question = new Question(question);
  }

  this.question = this.options = question;
  this.answers = answers || {};
  this.context = {};
  this.contextHistory = [];
  this.actions = new Actions(this);

  if (typeof this.options.limit !== 'number') {
    this.options.limit = this.options.radio ? 9 : 7;
  }

  this.ui = ui || UI.create(this.options);
  this.rl = this.ui.rl;
  this.errorMessage = log.red('>> invalid input');
  this.onError = this.onError.bind(this);
  this.status = 'pending';
  this.session = false;
  this.position = 0;
  this.called = 0;
  this.state = true;
  this.ui.rl.pause();
  this.initListeners();
}

/**
 * Inherit `Base`
 */

util.inherits(Prompt, Emitter);

/**
 * Modify the answer value before it's returned. Must
 * return a string or promise.
 *
 * ```js
 * var answers = {};
 * var Prompt = require('prompt-base');
 * var prompt = new Prompt({
 *   name: 'name',
 *   message: 'What is your name?',
 *   transform: function(input) {
 *     return input.toUpperCase();
 *   }
 * });
 * ```
 * @return {String}
 * @api public
 */

Prompt.prototype.transform = function(input) {
  if (typeof this.options.transform === 'function') {
    return this.options.transform.call(this, input);
  }
  if (typeof this.options.filter === 'function') {
    return this.options.filter.call(this, input);
  }
  return input;
};

/**
 * Validate user input on `keypress` events and the answer
 * value when it's submitted by the `line` event (when the user
 * hits <kbd>enter</kbd>. This may be overridden in custom prompts.
 * If the function returns `false`, either `question.errorMessage`
 * or the default validation error message (`invalid input`) is used.
 * Must return a boolean, string or promise.
 *
 * ```js
 * var Prompt = require('prompt-base');
 * var prompt = new Prompt({
 *   name: 'first',
 *   message: 'What is your name?',
 *   errorMessage: 'alphabetical characters only',
 *   validate: function(input) {
 *     var str = input ? input.trim() : '';
 *     var isValid = /^[a-z]+$/i.test(str);
 *     if (this.state === 'submitted') {
 *       return str.length > 10 && isValid;
 *     }
 *     return isValid;
 *   }
 * });
 * ```
 * @return {Boolean}
 * @api public
 */

Prompt.prototype.validate = function(input, key) {
  if (typeof this.options.validate === 'function') {
    this.state = this.options.validate.apply(this, arguments);
  } else {
    this.state = true;
  }
  return this.state;
};

/**
 * A custom `.when` function may be defined to determine
 * whether or not a question should be asked at all. Must
 * return a boolean, undefined, or a promise.
 * ```js
 * var answers = {};
 * var Prompt = require('prompt-base');
 * var prompt = new Prompt({
 *   name: 'name',
 *   message: 'What is your name?',
 *   when: function(answers) {
 *     return !answers.name;
 *   }
 * });
 * ```
 * @return {Boolean}
 * @api public
 */

Prompt.prototype.when = function(answers) {
  if (typeof this.options.when === 'function') {
    return this.options.when.apply(this, arguments);
  }
  return true;
};

/**
 * Run the prompt with the given `callback` function.
 *
 * ```js
 * var Prompt = require('prompt-base');
 * var prompt = new Prompt({
 *   name: 'name',
 *   message: 'What is your name?'
 * });
 *
 * prompt.ask(function(answer) {
 *   console.log(answer);
 * });
 * ```
 * @param {Function} `callback`
 * @return {undefined}
 * @api public
 */

Prompt.prototype.ask = function(callback) {
  if (this.question.on) {
    this.addListeners(this.question.on);
  }

  this.callback = callback;
  this.resume();
  this.only('error', this.onError);
  this.only('keypress', this.dispatch.bind(this));
  this.only('line', this.dispatch.bind(this));
  this.emit('ask', this);

  if (this.choices && this.choices.length) {
    this.choices.options.limit = this.options.limit;
    utils.cursorHide(this.rl);
  }
  this.render();
};

/**
 * Run the prompt and resolve answers. If [when](#when) is defined
 * and returns false, the prompt will be skipped.
 *
 * ```js
 * var answers = {};
 * var Prompt = require('prompt-base');
 * var prompt = new Prompt({
 *   name: 'name',
 *   message: 'What is your name?'
 * });
 *
 * prompt.run(answers)
 *   .then(function(answer) {
 *     console.log(answer);
 *     console.log(answers);
 *   });
 * ```
 * @param {Object} `answers` (optional) When supplied, the answer value will be added to a property where the key is the question name.
 * @return {Promise}
 * @api public
 */

Prompt.prototype.run = function(answers) {
  answers = answers || {};
  var self = this;

  return Promise.resolve(this.when(answers))
    .then(function(when) {
      if (when === false) {
        self.end(false);
        self.emit('answer', self.getAnswer());
        return Promise.resolve(self.getAnswer());
      }
      return new Promise(function(resolve) {
        self.ask(function(input) {
          Promise.resolve(self.transform(input))
            .then(function(answer) {
              if (typeof answer !== 'undefined') {
                answers[self.question.name] = answer;
                self.question.answer = answer;
              }
              resolve(answer);
            })
            .catch(self.onError);
        });
      });
    })
    .catch(self.onError);
};

/**
 * Get the answer to use. This can be overridden in custom prompts.
 *
 * ```js
 * console.log(prompt.getDefault());
 * ```
 * @return {String}
 * @api public
 */

Prompt.prototype.getDefault = function() {
  var val = this.question.default;
  if (typeof val === 'function') {
    val = val.call(this);
  }

  if (this.choices && this.choices.length) {
    if (val != null) {
      this.question.default = null;
      this.choices.check(val);
      this.choices.default = val;
      if (Array.isArray(val)) val = val[0];
      var choice = this.choices.get(val);
      if (choice) {
        val = choice.name;
        this.position = choice.index;
      }
    }
  }
  this.initialDefault = val;
  return val;
};

/**
 * Get the error message to use. This can be overridden in custom prompts.
 *
 * ```js
 * console.log(prompt.getError());
 * ```
 * @return {String}
 * @api public
 */

Prompt.prototype.getError = function(input, key) {
  return koalas(this.options.errorMessage, this.errorMessage, '');
};

/**
 * Get the help message to use. This can be overridden in custom prompts.
 *
 * ```js
 * console.log(prompt.getHelp());
 * ```
 * @return {String}
 * @api public
 */

Prompt.prototype.getHelp = function(input, key) {
  return koalas(this.options.helpMessage, this.helpMessage, '');
};

/**
 * Get the answer to use. This can be overridden in custom prompts.
 *
 * ```js
 * console.log(prompt.getAnswer());
 * ```
 * @return {String}
 * @api public
 */

Prompt.prototype.getAnswer = function(input, key) {
  this.answer = this.question.getAnswer(input || this.getDefault(), key);
  return this.answer;
};

/**
 * (Re-)render the prompt message, along with any help or error
 * messages, user input, choices, list items, and so on. This is
 * called to render the initial prompt, then it's called again
 * each time the prompt changes, such as on keypress events (when
 * the user enters input, or a multiple-choice option is selected).
 * This method may be overridden in custom prompts, but it's
 * recommended that you override the more specific render "status"
 * methods instead.
 *
 * ```js
 * prompt.ui.on('keypress', prompt.render.bind(prompt));
 * ```
 * @return {undefined}
 * @api public
 */

Prompt.prototype.render = function(state) {
  if (typeof state === 'undefined') {
    state = this.state;
  }

  this.state = state;
  var context = this.context = {
    options: this.options,
    status: this.status,
    state: this.state,
    line: this.rl.line,
    keypress: this.keypress,
    answer: this.answer,
    default: this.getDefault(),
    original: this.renderMessage(this),
    banner: '',
    header: '',
    prefix: this.prefix,
    message: this.message,
    input: '',
    footer: '',
    append: '',
    output: '',
    error: '',
    hint: '',
    help: ''
  };

  context.append = this.renderError(context);
  context.message = this.renderMessage(context);

  // override message in custom prompts
  this.emit('render', context);

  // render message with default settings
  switch (context.status) {
    case 'help':
    case 'pending':
    case 'expanded':
    case 'initialized':
      context.message += this.renderHelp(context);
      context.message += this.renderOutput(context);
      break;
    case 'answered':
      context.message += this.renderAnswer(context);
      context.answer = this.answer;
      break;
    case 'interacted':
    case 'submitted':
    default: {
      context.message += this.renderOutput(context);
      break;
    }
  }

  // push context onto history array, for debugging
  this.contextHistory.push(context);
  this.ui.render(context.message, context.append);
};

/**
 * Format the prompt message.
 *
 * ```js
 * var answers = {};
 * var Prompt = require('prompt-base');
 * var prompt = new Prompt({
 *   name: 'name',
 *   message: 'What is your name?',
 *   transform: function(input) {
 *     return input.toUpperCase();
 *   }
 * });
 * ```
 * @return {String}
 * @api public
 */

Prompt.prototype.renderMessage = function(context) {
  return context.prefix + log.bold(context.message) + ' ';
};

/**
 * Called by [render](#render) to render a help message when the
 * `prompt.status` is `initialized` or `help` (usually when the
 * prompt is first rendered). Calling this method changes the
 * `prompt.status` to `"interacted"`, and as such, by default, the
 * message is only displayed until the user interacts. By default
 * the help message is positioned to the right of the prompt "question".
 * A custom help message may be defined on `options.helpMessage`.
 *
 * @param {boolean|string|undefined} `valid`
 * @return {String}
 * @api public
 */

Prompt.prototype.renderHelp = function(context) {
  var help = this.getHelp();
  var val = this.getDefault();
  if (!help && val != null) {
    help = log.dim('(' + val + ') ');
  }
  return help;
};

/**
 * Render an error message in the prompt, when `valid` is
 * false or a string. This is used when a validation method
 * either returns `false`, indicating that the input
 * was invalid, or the method returns a string, indicating
 * that a custom error message should be rendered. A custom
 * error message may also be defined on `options.errorMessage`.
 *
 * @default `>> invalid input`
 * @param {boolean|string|undefined} `valid`
 * @return {String}
 * @api public
 */

Prompt.prototype.renderError = function(context) {
  if (context.state === false) {
    return this.getError();
  }
  if (typeof context.state === 'string') {
    return log.red('>> ') + context.state;
  }
  return '';
};

/**
 * Called by [render](#render) to render the readline `line`
 * when `prompt.status` is anything besides `answered`, which
 * includes everything except for error and help messages.
 *
 * @return {String}
 * @api public
 */

Prompt.prototype.renderOutput = function(context) {
  return this.renderMask(this.rl.line);
};

/**
 * Mask user input. Called by [renderOutput](#renderOutput),
 * this is an identity function that does nothing by default,
 * as it's intended to be overwritten in custom prompts, such
 * as [prompt-password][].
 *
 * @return {String}
 * @api public
 */

Prompt.prototype.renderMask = function(input) {
  return input;
};

/**
 * Render the user's "answer". Called by [render](#render) when
 * the `prompt.status` is changed to `answered`.
 *
 * @return {String}
 * @api public
 */

Prompt.prototype.renderAnswer = function() {
  var answer = this.renderMask(this.answer);
  if (answer != null) {
    return log.cyan(answer);
  }
  return '';
};

/**
 * Get action `name`, or set action `name` with the given `fn`.
 * This is useful for overridding actions in custom prompts.
 * Actions are used to move the pointer position, toggle checkboxes
 * and so on
 *
 * @param {String} `name`
 * @param {Function} `fn`
 * @return {Object|Function} Returns the prompt instance if setting, or the action function if getting.
 * @api public
 */

Prompt.prototype.action = function(name, fn) {
  if (typeof fn === 'function') {
    this.actions[name] = fn;
    return this;
  }
  return this.actions[name];
};

/**
 * Move the cursor in the given `direction` when a `keypress`
 * event is emitted.
 *
 * @param {String} `direction`
 * @param {Object} `event`
 * @api public
 */

Prompt.prototype.dispatch = function(input, key) {
  this.keypress = key;
  this.choices.position = this.position;
  var self = this;

  // don't handle "enter" and "return" (handle by "line")
  if (key.name === 'enter' || key.name === 'return') {
    return;
  }

  if (key.name === 'line') {
    this.status = 'submitted';
    input = this.answer = this.getAnswer(input, key);
  }

  // dispatch actions, if one matches a keypress
  var action = self.action(key.name);

  if (typeof action === 'function') {
    this.position = action.call(this.actions, this.position, key);
  }

  return Promise.resolve(this.validate(input, key))
    .then(function(state) {
      self.state = state;

      // re-render the prompt in the terminal
      self.render(state);

      // handle the "enter" keypress event
      if (key.name === 'line' && state === true) {
        return self.submitAnswer(input);
      }
    })
    .catch(this.onError);
};

/**
 * Default error event handler. If an `error` listener exist, an `error`
 * event will be emitted, otherwise the error is logged onto `stderr` and
 * the process is exited. This can be overridden in custom prompts.
 * @param {Object} `err`
 * @api public
 */

Prompt.prototype.onError = function(err) {
  if (this.hasListeners('error')) {
    this.emit('error', err);
  } else {
    this.end();
    console.error(err);
    this.callback();
  }
};

/**
 * Re-render and pass the final answer to the callback.
 * This can be replaced by custom prompts.
 * @api public
 */

Prompt.prototype.submitAnswer = function(answer) {
  setImmediate(function() {
    this.status = 'answered';
    this.answer = answer;
    this.end();
    this.emit('answer', this.answer);
    this.rl.line = '';
    this.callback(this.answer);
  }.bind(this));
};

/**
 * Ensures that events for event `name` are only **registered**
 * once and are disabled correctly when specified. This is
 * different from `.once`, which only **emits** once.
 *
 * ```js
 * prompt.only('keypress', function() {
 *   // do keypress stuff
 * });
 * ```
 * @api public
 */

Prompt.prototype.only = function(name, fn) {
  this._only = this._only || {};
  if (arguments.length === 0) {
    for (var key in this._only) {
      this.ui.off(key, this._only[key]);
    }
    return;
  }
  this._only[name] = fn;
  this.ui.on(name, fn);
  return fn;
};

/**
 * Mutes the output stream that was used to create the
 * readline interface, and returns a function for unmuting the
 * stream. This is useful in unit tests.
 *
 * ```js
 * // mute the stream
 * var unmute = prompt.mute();
 *
 * // unmute the stream
 * unmute();
 * ```
 * @return {Function}
 * @api public
 */

Prompt.prototype.mute = function() {
  var rl = this.rl;
  var unmute = rl.output.unmute;
  rl.output.unmute = function() {};
  rl.output.mute();

  return function() {
    rl.output.unmute = unmute;
    unmute();
  };
};

/**
 * Pause the readline and unmute the output stream that was
 * used to create the readline interface, which is `process.stdout`
 * by default.
 *
 * @api public
 */

Prompt.prototype.end = function(state) {
  this.only();
  if (state !== false) {
    this.render();
  }
  this.ui.end(state);
  this.rl.pause();
};

/**
 * [Resume][resume] the readline input stream if it has been paused.
 * @return {undefined}
 * @api public
 */

Prompt.prototype.resume = function() {
  this.status = 'initialized';
  this.rl.resume();
};

/**
 * Initialize event listeners
 */

Prompt.prototype.initListeners = function() {
  var prompt = this;
  var on = {};

  this.action('tab', function(pos, key) {
    if (key.shift === true && prompt.rl.line.slice(-1) === '\t') {
      prompt.rl.input.emit('keypress', '', {name: 'backspace'});
    }
    return this.position(pos);
  });

  // allow events to be defined using `question.on`. this is
  // defined as a setter/getter to allow events to be lazily
  // added after instantiation
  Object.defineProperty(this.question, 'on', {
    set: function(listeners) {
      prompt.addListeners(listeners);
      on = listeners;
    },
    get: function() {
      return on;
    }
  });
};

/**
 * Add an object of event listeners
 */

Prompt.prototype.addListeners = function(listeners) {
  var keys = Object.keys(listeners);
  for (var i = 0; i < keys.length; i++) {
    this.only(keys[i], listeners[keys[i]].bind(this));
  }
};

/**
 * Getter for getting the choices array from the question.
 *
 * @name .choices
 * @return {Object} Choices object
 * @api public
 */

Object.defineProperty(Prompt.prototype, 'choices', {
  set: function(choices) {
    this.question.choices = choices;
  },
  get: function() {
    return this.question.choices;
  }
});

/**
 * Getter that returns `question.message` after passing it to [format](#format).
 *
 * @name .message
 * @return {String} A formatted prompt message.
 * @api public
 */

Object.defineProperty(Prompt.prototype, 'message', {
  set: function(message) {
    this.question.message = message;
  },
  get: function() {
    return this.question.message;
  }
});

/**
 * Getter/setter for getting the checkbox symbol to use.
 *
 * ```js
 * // customize
 * prompt.symbol = '[ ]';
 * ```
 * @name .symbol
 * @return {String} The formatted symbol.
 * @api public
 */

Object.defineProperty(Prompt.prototype, 'symbol', {
  set: function(symbol) {
    this.question.symbol = symbol;
  },
  get: function() {
    var val = koalas(this.question.symbol, this.question.options.symbol);
    if (val != null) {
      this.question.symbol = val;
    }
    return val;
  }
});

/**
 * Getter/setter that returns the prefix to use before `question.message`.
 * The default value is a green `?`.
 *
 * ```js
 * // customize
 * prompt.prefix = ' ❤ ';
 * ```
 * @name .prefix
 * @return {String} The formatted prefix.
 * @api public
 */

Object.defineProperty(Prompt.prototype, 'prefix', {
  set: function(prefix) {
    this.question.prefix = prefix;
  },
  get: function() {
    if (typeof this.question.prefix === 'undefined') {
      return log.cyan('?') + ' ';
    } else {
      return this.question.prefix;
    }
  }
});

/**
 * Static convenience method for running the [.ask](#ask) method.
 * Takes the same arguments as the contructror.
 *
 * ```js
 * var prompt = require('prompt-base');
 *   .ask('What is your favorite color?', function(answer) {
 *     console.log({color: answer});
 *     //=> { color: 'blue' }
 *   });
 * ```
 * @param {Object} `question` Plain object or instance of [prompt-question][].
 * @param {Object} `answers` Optionally pass an answers object from a prompt manager (like [enquirer][]).
 * @param {Object} `ui` Optionally pass an instance of [readline-ui][]. If not passed, an instance is created for you.
 * @param {Function} `callback`
 * @return {undefined}
 * @api public
 */

Prompt.ask = function(question, answers, ui) {
  var args = [].slice.call(arguments);
  var cb = args.pop();
  var prompt = new this(...args);
  prompt.ask(cb);
};

/**
 * Static convenience method for running the [.run](#run) method.
 * Takes the same arguments as the contructror.
 *
 * ```js
 * var prompt = require('prompt-base');
 *   .run('What is your favorite color?')
 *   .then(function(answer) {
 *     console.log({color: answer});
 *     //=> { color: 'blue' }
 *   });
 * ```
 * @param {Object} `question` Plain object or instance of [prompt-question][].
 * @param {Object} `answers` Optionally pass an answers object from a prompt manager (like [enquirer][]).
 * @param {Object} `ui` Optionally pass an instance of [readline-ui][]. If not passed, an instance is created for you.
 * @return {Promise}
 * @api public
 */

Prompt.run = function() {
  var prompt = new this(...arguments);
  return prompt.run();
};

/**
 * Create a new `Question`. See [prompt-question][] for more details.
 *
 * ```js
 * var question = new Prompt.Question({name: 'foo'});
 * ```
 * @param {Object} `options`
 * @return {Object} Returns an instance of [prompt-question][]
 * @api public
 */

Prompt.Question = Question;

/**
 * Create a new `Choices` object. See [prompt-choices][]
 * for more details.
 *
 * ```js
 * var choices = new Prompt.Choices(['foo', 'bar', 'baz']);
 * ```
 * @param {Array} `choices` Array of choices
 * @return {Object} Returns an intance of Choices.
 * @api public
 */

Prompt.Choices = Question.Choices;

/**
 * Create a new `Separator` object. See [choices-separator][] for more details.
 *
 * ```js
 * new Prompt.Separator('---');
 * ```
 * @param {String} `separator` Optionally pass a string to use as the separator.
 * @return {Object} Returns a separator object.
 * @api public
 */

Prompt.Separator = Question.Separator;

/**
 * Static method for inheriting `Prompt`. This ensures that all getters/setters,
 * prototype methods, and static methods are inherited and invoked in the
 * correct context.
 */

Prompt.extend = extend(Prompt);

/**
 * Expose `Prompt`
 */

module.exports = Prompt;
