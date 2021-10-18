'use strict';

var debug = require('debug')('choices-separator');
var strip = require('strip-color');
var dim = require('ansi-dim');

/**
 * Separator object, used in choices arrays in prompts, to
 * create a visual break between sections. The default separator
 * line is `────────` styled with [ansi-dim].
 *
 * ```js
 * new Separator('----');
 * new Separator({line: '----'})
 * new Separator({line: '----', prefix: '    '});
 * ```
 * @param {String} `options` Optionally provide a custom `line` and or `prefix` to use.
 * @api public
 */

function Separator(options) {
  debug('initializing from <%s>', __filename);
  this.isSeparator = true;
  this.type = 'separator';

  if (typeof options === 'string') {
    options = { line: options };
  }

  this.options = options || {};
  this.prefix = ' ';

  if (typeof this.options.prefix === 'string') {
    this.prefix = this.options.prefix;
  }

  if (typeof this.options.line === 'string') {
    this.line = this.options.line;
  } else {
    this.line = dim('────────');
  }
}

/**
 * Returns the `separator.line` stripped of ansi styling.
 *
 * ```js
 * var separator = new Separator();
 * console.log(separator.raw());
 * //=> '────────'
 * ```
 * @return {String}
 * @api public
 */

Separator.prototype.raw = function() {
  return strip(this.line);
};

/**
 * Render `separator.prefix` plus `separator.line`.
 *
 * ```js
 * var separator = new Separator();
 * console.log(separator.render());
 * //=> ' \u001b[2m────────\u001b[22m\n')
 * ```
 * @return {String}
 * @api public
 */

Separator.prototype.render = function() {
  return this.prefix + this.line + '\n';
};

/**
 * Returns false if the given object is a separator.
 * @param  {Object} `choice` object to test against
 * @return {Boolean} Returns false if the given object is a separator
 * @api public
 */

Separator.exclude = function(choice) {
  return choice.type !== 'separator';
};

/**
 * Stringify separator
 * @return {String} Returns the `separator.line` string
 * @api public
 */

Separator.prototype.toString = function() {
  return this.line;
};

/**
 * Expose `Separator`
 */

module.exports = Separator;
