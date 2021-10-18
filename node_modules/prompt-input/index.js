'use strict';

var debug = require('debug')('prompt-input');
var Prompt = require('prompt-base');

/**
 * Create a new "Input" prompt with the given `question`, and optional `answers`
 * and `rl`.
 */

function Input(/*question, answers, rl*/) {
  debug('initializing from <%s>', __filename);
  Prompt.apply(this, arguments);
}

/**
 * Inherit base `Prompt`
 */

Prompt.extend(Input);

/**
 * Render the prompt to terminal
 */

Input.prototype.render = function(state) {
  var message = this.renderMessage(this);
  var error = this.renderError({state: state});

  if (this.status === 'answered') {
    message += this.renderAnswer();
  } else {
    message += this.renderHelp(this) + this.rl.line;
  }

  this.ui.render(message, error);
};

/**
 * Module exports
 */

module.exports = Input;
