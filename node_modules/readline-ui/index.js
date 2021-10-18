'use strict';

var util = require('util');
var debug = require('debug')('readline-ui');
var Emitter = require('component-emitter');
var stringWidth = require('string-width');
var utils = require('readline-utils');
var cached;

/**
 * Create a readline interface to use in prompts
 */

function UI(options) {
  if (!(this instanceof UI)) {
    var ui = Object.create(UI.prototype);
    UI.apply(ui, arguments);
    return ui;
  }
  debug('initializing from <%s>', __filename);
  this.options = utils.createOptions(options);
  this.appendedLines = 0;
  this.height = 0;
  this.initInterface();
}

/**
 * Decorate emitter methods
 */

Emitter(UI.prototype);

/**
 * Initialize settings and events.
 */

UI.prototype.initInterface = function() {
  if (this.initialized) return;
  this.initialized = true;
  var self = this;
  if (typeof this.rl === 'undefined') {
    this.rl = utils.createInterface(this.options);
  }

  this.forceClose = this.forceClose.bind(this);
  this.onKeypress = this.onKeypress.bind(this);

  this.rl.input.on('keypress', self.onKeypress);
  this.resume();

  this.rl.on('line', function(line) {
    setImmediate(function() {
      self.emit('line', line, {name: 'line', value: line});
    })
  });

  this.rl.on('SIGINT', this.forceClose);
  process.on('exit', this.forceClose);
};

/**
 * Handle `keypress` events.
 *
 * @param {String} `str`
 * @param {Object} `key`
 * @return {undefined}
 * @api public
 */

UI.prototype.onKeypress = function(input, key) {
  utils.emitKeypress(this, input, key);
};

/**
 * Render the prompt with the given `input` and optional `footer`.
 * @param {String} `input`
 * @param {String} `footer` (optional)
 * @return {undefined}
 * @api public
 */

UI.prototype.render = function(input, footer) {
  this.rl.output.unmute();
  this.clearLines(this.appendedLines);

  // Write message to screen and setPrompt to control backspace
  var line = utils.lastLine(input);
  var rawLine = utils.unstyle(line);

  // Remove the last line from our prompt. We can't rely
  // on the input of rl.line (mainly because of the password
  // prompt), so just rely on it's length.
  var prompt = line;
  if (this.rl.line.length) {
    prompt = prompt.slice(0, -this.rl.line.length);
  }

  this.rl.setPrompt(prompt);

  // setPrompt will change cursor position, now we can get correct value
  var cursorPos = this.cacheCursorPos();
  var width = utils.cliWidth(this.rl);

  input = utils.forceLineReturn(input, width);
  if (footer) {
    footer = utils.forceLineReturn(footer, width);
  }

  // Manually insert an extra line if we're at the end of
  // the line. This prevents the cursor from appearing at
  // the beginning of the current line.
  if (rawLine.length % width === 0) {
    input += '\n';
  }

  var fullContent = input + (footer ? '\n' + String(footer) : '');
  this.rl.output.write(fullContent);

  // We need to consider parts of the prompt under the
  // cursor as part of the bottom string in order to
  // correctly cleanup and re-render.
  var promptLineUpDiff = Math.floor(rawLine.length / width) - cursorPos.rows;
  var footerHeight = promptLineUpDiff + (footer ? utils.height(footer) : 0);
  if (footerHeight > 0) {
    utils.up(this.rl, footerHeight);
  }

  // Reset cursor at the beginning of the line
  var lastLine = utils.lastLine(fullContent);
  utils.left(this.rl, stringWidth(lastLine));

  // Adjust cursor on the right
  var newPos = utils.unstyle(input).length;
  utils.right(this.rl, newPos);

  // Set up state for next re-rendering
  this.appendedLines = footerHeight;
  this.height = utils.height(fullContent);
  this.rl.output.mute();
};

/**
 * Remove `n` lines from the bottom of the terminal
 * @param {Number} `lines` Number of lines to remove
 * @api public
 */

UI.prototype.clearLines = function(n) {
  if (n) utils.down(this.rl, n);
  utils.clearLine(this.rl, this.height);
};

/**
 * Cache the current cursor's column and line position.
 * @returns {Object} UI instance.
 * @api public
 */

UI.prototype.cacheCursorPos = function() {
  this.cursorPos = utils.cursorPosition(this.rl);
  return this.cursorPos;
};

/**
 * Restore the cursor position to the cached column and line.
 * @return {Object} UI instance.
 * @api public
 */

UI.prototype.restoreCursorPos = function() {
  utils.restoreCursorPos(this.rl, this.cursorPos);
  return this;
};

/**
 * Resume the input stream.
 * @api public
 */

UI.prototype.resume = function() {
  this.rl.resume();
};

/**
 * Pause the input stream, allowing it to be resumed later if necessary.
 * @api public
 */

UI.prototype.pause = function() {
  this.rl.pause();
  this.emit('pause');
};

/**
 * Close the `readline.Interface` instance and relinquish
 * control over the input and output streams. Also removes
 * event listeners, and restores/unmutes prompt functionality.
 * @api public
 */

UI.prototype.close = function() {
  utils.close(this.rl);
  this.emit('close');
};

/**
 * Close the interface when the keypress is `^C`
 * @api public
 */

UI.prototype.forceClose = function() {
  utils.forceClose(this.rl);
};

/**
 * Returns an "indentity" function that calls `.close()`,
 * which can be used as the final `.then()` function with
 * promises.
 * @api public
 */

UI.prototype.finish = function() {
  var ui = this;
  return function(val) {
    ui.close();
    ui.emit('finish');
    return val;
  };
};

/**
 * Default method for writing a prompt to the terminal.
 * This can be overridden.
 * @api public
 */

UI.prototype.end = function(newline) {
  this.rl.setPrompt('');
  this.rl.output.unmute();
  this.rl.output.write(newline !== false ? '\n' : '');
  utils.cursorShow(this.rl);
};

/**
 * Mutes the output stream that was used to create the
 * readline interface, and returns a function for unmuting the
 * stream. This is useful in unit tests.
 *
 * ```js
 * // mute the stream
 * var unmute = ui.mute();
 *
 * // unmute the stream
 * unmute();
 * ```
 * @return {Function}
 * @api public
 */

UI.prototype.mute = function() {
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
 * Unmute then write to the output stream that was used
 * to create the readline interface, then re-mute the stream.
 * Useful for debugging prompts.
 *
 * @api public
 */

UI.prototype.log = function(input) {
  this.rl.output.unmute();
  this.rl.output.write(util.inspect.apply(util, arguments));
  this.rl.output.mute();
};

/**
 * Expose `UI`
 */

module.exports = UI;

/**
 * Expose `UI.create` for using a single instance across
 * multiple prompts.
 */

module.exports.create = function(options) {
  if (cached) return cached;
  cached = new UI(options);
  return cached;
};
