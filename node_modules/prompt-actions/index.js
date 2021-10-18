'use strict';

var debug = require('debug')('prompt-actions');

/**
 * Create an instance of `Actions` with an instance of [prompt-base][].
 * Any of the methods may be overridden in custom prompts.
 *
 * ```js
 * var Actions = require('prompt-actions');
 * var Base = require('prompt-base');
 * var prompt = new Prompt('Favorite flavor?' ['chocolate', 'vanilla']);
 * var actions = new Actions(prompt);
 * ```
 * @param {Object} `prompt` Instance of [prompt-base][].
 * @api public
 */

function Actions(prompt) {
  debug('initializing from <%s>', __filename);
  this.prompt = prompt;
  this.options = this.prompt.options;
}

/**
 * Handle <kbd>number</kbd> keypress events. Toggles the choice at
 * corresponding row, starting at `1`. Because of this (1-based index)
 * we need to decrement the returned position by `1`, so that
 * the "real" position is correct.
 *
 * @return {Number} Returns `choices.position`
 * @api public
 */

Actions.prototype.number = function(pos, key) {
  pos = this.position(pos, key);
  if (pos >= 0 && pos <= this.choices.length) {
    this.choices.position = pos - 1;
    this.choices.radio();
  }
  return pos - 1;
};

/**
 * Handle <kbd>space</kbd> keypress events. Toggles the choice at the
 * current position (e.g. on the same row as the pointer).
 *
 * @return {Number} Returns `choices.position`
 * @api public
 */

Actions.prototype.space = function(pos) {
  pos = this.position(pos);
  this.choices.radio();
  return pos;
};

/**
 * Handle <kbd>tab</kbd> keypress events. By default, this is
 * just an identity function that returns the cursor position
 * on `tab` keypress events. This may be overridden in custom
 * prompts.
 *
 * ```js
 * var Prompt = require('prompt-base');
 * function MyPrompt() {
 *   Prompt.apply(this, arguments);
 *   this.action('tab', function() {
 *     // do custom tab stuff
 *   });
 * }
 * // inherit prompt-base
 * Prompt.extend(MyPrompt);
 * ```
 *
 * @return {Number} Returns `choices.position`
 * @api public
 */

Actions.prototype.tab = function(pos) {
  return this.position(pos);
};

/**
 * Handle <kbd>a</kbd> keypress events. If all choices are already checked,
 * this will disable all choices. If zero to any other number of
 * choices is checked, this will enable all choices.
 *
 * @return {Number} Returns `choices.position`
 * @api public
 */

Actions.prototype.a = function(pos) {
  this.choices[this.choices.all ? 'uncheck' : 'check']();
  this.choices.update();
  return this.position(pos);
};

/**
 * Handle <kbd>i</kbd> keypress events. The <kbd>i</kbd>
 * keypress toggles all choices. If the pointer is inside a
 * choice group, only choices in that group will be toggled.
 *
 * @return {Number} Returns `choices.position`
 * @api public
 */

Actions.prototype.i = function(pos) {
  this.choices.toggle();
  this.choices.update();
  return this.position(pos);
};

/**
 * Handle <kdb>down</kdb> keypress events. <kdb>down</kdb> moves the
 * cursor down one row, and <kdb>shift</kdb>+<kdb>down</kdb> will
 * increase the number of rows visible in the terminal by one row.
 *
 * @return {Number} Returns the updated `choices.position`.
 * @api public
 */

Actions.prototype.down = function(pos, key) {
  pos = this.position(pos);
  if (key && key.shift === true) {
    if (this.options.expandChoices !== false) {
      return this.addRow();
    }
    this.moveDown(pos);
  }
  return (pos < this.choices.length - 1) ? pos + 1 : 0;
};

/**
 * Handle <kdb>up</kdb> keypress events. <kdb>up</kdb> moves the
 * cursor up one row, and <kdb>shift</kdb>+<kdb>up</kdb> will
 * reduce the number of rows visible in the terminal by one row.
 *
 * @return {Number} Returns the updated `choices.position`.
 * @api public
 */

Actions.prototype.up = function(pos, key) {
  pos = this.position(pos);
  if (key && key.shift === true) {
    if (this.options.expandChoices !== false) {
      return this.removeRow();
    }
    this.moveUp(pos);
  }
  return (pos > 0) ? pos - 1 : this.choices.length - 1;
};

/**
 * Move the currently selected item up.
 */

Actions.prototype.moveUp = function(pos) {
  var len = this.choices.length;
  pos = this.position(pos);
  if (pos > 0) {
    this.choices.swap(pos - 1, pos);
  } else {
    this.choices.swap(pos, len - 1);
  }
  return pos;
};

/**
 * Move the currently selected item down.
 */

Actions.prototype.moveDown = function(pos) {
  var len = this.choices.length;
  pos = this.position(pos);
  if (pos < len - 1) {
    this.choices.swap(pos + 1, pos);
  } else {
    this.choices.swap(pos, 0);
  }
  return pos;
};

/**
 * Move the currently selected item up.
 */

Actions.prototype.addRow = function() {
  if (this.choices.options.limit < this.choices.length) {
    this.choices.options.limit++;
  }
};

/**
 * Move the currently selected item up.
 */

Actions.prototype.removeRow = function() {
  if (this.choices.options.limit > 0) {
    this.choices.options.limit--;
  }
};

/**
 * Handle <kbd>enter</kbd> keypress events. By default this is a
 * noop since <kbd>enter</kbd> keypress events are typically ignored
 * to allow the `line` event to be handled when an answer is submitted.
 *
 * @return {Number} Returns `choices.position`
 * @api public
 */

Actions.prototype.enter = function(pos, key) {
  return this.position(pos);
};

/**
 * Returns the current choices position
 *
 * @return {Number} Returns `choices.position`
 * @api public
 */

Actions.prototype.identity = function(pos) {
  return this.position(pos);
};

/**
 * Helper for getting the current corsor position.
 *
 * @param {Number} `pos` (optional) Current position
 * @return {Number} Returns given `pos` or `choices.position`
 * @api public
 */

Actions.prototype.position = function(pos, key) {
  if (key && key.name === 'number' && key.hasOwnProperty('value')) {
    pos = Number(key.value);
  }
  if (typeof pos === 'number') {
    if (pos >= 0 && pos <= this.choices.length) {
      this.choices.position = pos;
    }
    return pos;
  }
  return this.choices.position;
};

/**
 * Getter for getting the choices array from the question.
 *
 * @name .choices
 * @return {Object} Choices object
 * @api public
 */

Object.defineProperty(Actions.prototype, 'choices', {
  get: function() {
    return this.prompt.choices;
  }
});

/**
 * Expose `Actions`
 */

module.exports = Actions;
