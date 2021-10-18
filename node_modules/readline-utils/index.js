'use strict';

var koalas = require('koalas');
var isNum = require('is-number');
var size = require('window-size');
var readline = require('readline');
var isBuffer = require('is-buffer');
var flatten = require('arr-flatten');
var extend = require('extend-shallow');
var isWindows = require('is-windows');
var MuteStream = require('mute-stream');
var stripColor = require('strip-color');
var sizeUtils = require('window-size/utils');
var utils = module.exports;

/**
 * Create default options
 */

utils.createOptions = function(options) {
  var opts = extend({ terminal: true }, options);
  opts.output = opts.output || process.stdout;
  opts.input = opts.input || process.stdin;
  return opts;
};

/**
 * Create a readline interface with the given `options`.
 * @param {Object} `options`
 * @api public
 */

utils.createInterface = function(options) {
  var opts = utils.createOptions(options);
  var ms = new MuteStream();
  ms.pipe(opts.output);
  opts.output = ms;
  return readline.createInterface(opts);
};

/**
 * Move cursor up by `n` lines.
 *
 * @param {Readline} `rl` Readline interface
 * @param {Number} `n` Lines up to move. Default is `1`.
 * @api public
 */

utils.up = function(rl, n) {
  readline.moveCursor(rl.output, 0, -(n || 1));
  return this;
};

/**
 * Move cursor down by `n` lines.
 *
 * @param {Readline} `rl` Readline interface
 * @param {Number} `n` Lines down to move. Default is `1`.
 * @api public
 */

utils.down = function(rl, n) {
  readline.moveCursor(rl.output, 0, n || 1);
  return this;
};

/**
 * Move cursor left by `n` colums.
 *
 * @param {Readline} `rl` Readline interface
 * @param {Number} `n` Characters to move left. Default is `1`.
 * @api public
 */

utils.left = function(rl, n) {
  readline.moveCursor(rl.output, -(n || 1));
  return this;
};

/**
 * Move cursor right by `n` colums.
 *
 * @param {Readline} `rl` Readline interface
 * @param {Number} `n` Characters to move right. Default is `1`.
 * @api public
 */

utils.right = function(rl, n) {
  readline.moveCursor(rl.output, n || 1);
  return this;
};

/**
 * Move cursor up, down, left or right by `1` line.
 *
 * ```js
 * var utils = require('readline-utils');
 * var rl = utils.createInterface();
 * rl.input.on('keypress', function(str, key) {
 *   utils.move(rl, key);
 * });
 * ```
 * @param {Readline} `rl` Readline interface
 * @api public
 */

utils.move = function(rl, key, n) {
  if (key && exports[key.name]) {
    exports[key.name](rl, n);
  }
  return this;
};

/**
 * Callback function for the `keypress` event, to automatically move cursor
 * up, down, left or right by `1` line.
 *
 * ```js
 * var utils = require('readline-utils');
 * var rl = utils.createInterface();
 * rl.input.on('keypress', utils.auto(rl));
 * ```
 * @param {Readline} `rl` Readline interface
 * @api public
 */

utils.auto = function(rl) {
  return function(s, key) {
    utils.move(rl, key);
  };
};

/**
 * Clear `n` lines.
 *
 * @param {Readline} `rl` Readline interface
 * @param {Number} `n` Number of lines to clear
 */

utils.clearLine = function(rl, n) {
  rl.output.write(utils.eraseLines(n));
  return this;
};

/**
 * Clear `n` lines after the cursor.
 *
 * @param {Readline} `rl` Readline interface
 * @param {Number} `n` Number of lines to clear
 * @api public
 */

utils.clearAfter = function(rl, n) {
  utils.clearLine(rl, n || 1);
  return this;
};

/**
 * Clear the terminal.
 *
 * @param {Readline} `rl` Readline interface
 * @param {Number} `n` Number of lines to clear
 * @api public
 */

utils.clearScreen = function(rl) {
  rl.write(null, { ctrl: true, name: 'l' });
  return this;
};

/**
 * Get the last line from the given `str`
 *
 * @param {String} `str`
 * @return {String}
 * @api public
 */

utils.lastLine = function(str) {
  return last(str.split('\n'));
};

/**
 * Get the height (rows) of the given `str`
 *
 * @param {String} `str`
 * @return {Number}
 * @api public
 */

utils.height = function(str) {
  return str.split('\n').length;
};

/**
 * Hide the cursor so it doesn't show during a prompt. This is
 * useful for multiple-choice or list prompts, or any prompt
 * where the user will not be entering input.
 *
 * @param {Readline} `rl` Readline interface
 * @return {Object} readline-utils object for chaining
 * @api public
 */

utils.hideCursor = utils.cursorHide = function(rl) {
  rl.output.write('\x1B[?25l');
  return this;
};

/**
 * Show the cursor.
 *
 * @param {Readline} `rl` Readline interface
 * @return {Object} readline-utils object for chaining
 * @api public
 */

utils.showCursor = utils.cursorShow = function(rl) {
  rl.output.write('\x1B[?25h');
  return this;
};

/**
 * Close the interface, remove event listeners, and restore/unmute prompt functionality
 *
 * @param {Readline} `rl` Readline interface
 * @return {Object} readline-utils object for chaining
 * @api public
 */

utils.close = function(rl, fn) {
  fn = fn || utils.forceClose.bind(exports, rl);
  process.removeListener('exit', fn);
  rl.removeListener('SIGINT', fn);
  if (typeof rl.output.unmute === 'function') {
    rl.output.unmute();
    rl.output.end();
  }
  rl.pause();
  rl.close();
  return this;
};

/**
 * Close the interface when the keypress is `^C`
 *
 * @param {Readline} `rl` Readline interface
 * @return {Object} readline-utils object for chaining
 * @api public
 */

utils.forceClose = function(rl) {
  utils.close(rl);
  return this;
};

/**
 * Erase `n` lines
 *
 * ```js
 * utils.eraseLines(3);
 * ```
 * @param {Number} `n`
 * @return {String} Returns the unicode to erase lines
 * @api public
 */

utils.eraseLines = function(n) {
  var num = toNumber(n);
  var lines = '';
  var i = -1;

  while (++i < num) {
    lines += '\u001b[1000D\u001b[K';
    if (i < num - 1) {
      lines += '\u001b[1A';
    }
  }
  return lines;
};

/**
 * Remove lines from the bottom of the terminal.
 * @param  {Number} `rl` Readline interface
 * @param  {Number} `lines` Number of lines to remove
 * @param  {Number} `height` Content height
 * @return {Object} Returns the readline-utils object for chaining
 * @api public
 */

utils.clearTrailingLines = function(rl, lines, height) {
  if (!isNumber(lines)) lines = 0;
  var len = height + lines;

  while (len--) {
    readline.moveCursor(rl.output, -utils.cliWidth(80), 0);
    readline.clearLine(rl.output, 0);
    if (len) readline.moveCursor(rl.output, 0, -1);
  }
  return this;
};

/**
 * Remember the cursor position
 * @return {Object} readline-utils object
 * @api public
 */

utils.cursorPosition = function(rl) {
  return rl._getCursorPos();
};

/**
 * Restore the cursor position to where it has been previously stored.
 * @return {Object} readline-utils object
 * @api public
 */

utils.restoreCursorPos = function(rl, cursorPos) {
  if (!cursorPos) return;
  var line = rl._prompt + rl.line;
  readline.moveCursor(rl.output, -line.length, 0);
  readline.moveCursor(rl.output, cursorPos.cols, 0);
  cursorPos = null;
  return this;
};

/**
 * Get the width of the terminal
 *
 * @param  {Number} `fallback` A fallback width to use if the actual width is not found.
 * @return {Number} Returns the number of columns.
 * @api public
 */

utils.cliWidth = function(fallback) {
  var windows = isWindows();
  var modifier = windows ? 1 : 0;
  size = size || (windows ? sizeUtils.win() : sizeUtils.tput());
  return koalas(size && size.width, fallback, modifier) - modifier;
};

/**
 * Break lines longer than the cli width so we can normalize the
 * natural line returns behavior accross terminals. (I don't see how
 * this can work consistently. It seems brittle and will probably be replaced
 * with https://github.com/jonschlinkert/word-wrap)
 *
 * @param {Array} `lines` Array of lines
 * @param {Number} `width` Terminal width
 * @api public
 */

utils.breakLines = function(lines, width) {
  var quantifier = '';
  if (width > 1) {
    quantifier = '{1,' + width + '}';
  }

  var regex = new RegExp('(?:(?:\\033[[0-9;]*m)*.?)' + quantifier, 'g');
  return lines.map(function(line) {
    var matches = line.match(regex);
    if (!matches) return '';
    // last match is always empty
    matches.pop();
    return matches || '';
  });
};

/**
 * Joins the lines returned from [.breakLines](#breakLines).
 *
 * @param {Array|String} `lines` String or array of lines.
 * @param {Number} `width` Terminal width
 * @return {String}
 * @api public
 */

utils.forceLineReturn = function(lines, width) {
  if (typeof lines === 'string') {
    lines = utils.breakLines(lines.split('\n'), width);
  }
  return flatten(lines).join('\n');
};

/**
 * Ensure the given `str` ends in a newline.
 *
 * ```js
 * console.log(utils.normalizeLF('foo'));
 * //=> 'foo\n'
 * ```
 * @param  {String} `str` The input string
 * @return {String}
 * @api public
 */

utils.normalizeLF = function(str) {
  if (str.slice(-1) !== '\n') {
    str += '\n';
  }
  return str;
};

/**
 * Strip ansi styles from the given string.
 */

utils.unstyle = function(str) {
  return stripColor(str);
};

/**
 * The following code is based on code from the node.js core
 * readline module and https://github.com/TooTallNate/keypress.
 */

/**
 * This module offers the internal "keypress" functionality from node-core's
 * `readline` module, for your own programs and modules to use.
 *
 * The `keypress` function accepts a readable Stream instance and makes it
 * emit "keypress" events.
 *
 * Usage:
 *
 * ``` js
 * require('keypress')(process.stdin);
 *
 * process.stdin.on('keypress', function(ch, key) {
 *   console.log(ch, key);
 *   if (key.ctrl && key.name === 'c') {
 *     process.stdin.pause();
 *   }
 * });
 * proces.stdin.resume();
 * ```
 *
 * @param {Stream} stream
 * @api public
 */

utils.keypress = function(stream) {
  var StringDecoder = require('string_decoder').StringDecoder; // lazy load
  stream._keypressDecoder = new StringDecoder('utf8');

  function onData(b) {
    if (stream.listenerCount('keypress') > 0) {
      var r = stream._keypressDecoder.write(b);
      if (r) utils.emitKeypress(stream, r);
    } else {
      // Nobody's watching anyway
      stream.removeListener('data', onData);
      stream.on('newListener', onNewListener);
    }
  }

  function onNewListener(event) {
    if (event === 'keypress') {
      stream.on('data', onData);
      stream.removeListener('newListener', onNewListener);
    }
  }

  if (stream.listenerCount('keypress') > 0) {
    stream.on('data', onData);
  } else {
    stream.on('newListener', onNewListener);
  }
};

/**
 * Enables "mousepress" events on the *input* stream. Note
 * that `stream` must be an *output* stream (i.e. a Writable
 * Stream instance), usually `process.stdout`.
 *
 * @param {Stream} stream writable stream instance
 * @api public
 */

utils.enableMouse = function(stream) {
  stream.write('\x1b[?1000h');
};

/**
 * Disables "mousepress" events from being sent to the *input*
 * stream. Note that `stream` must be an *output* stream (i.e.
 * a Writable Stream instance), usually `process.stdout`.
 *
 * @param {Stream} stream writable stream instance
 * @api public
 */

utils.disableMouse = function(stream) {
  stream.write('\x1b[?1000l');
};

///////////////////////////////////////////////////////////////////////
// Below this function is code from node-core's `readline.js` module //
///////////////////////////////////////////////////////////////////////

/*
  Some patterns seen in terminal key escape codes, derived from combos seen
  at http://www.midnight-commander.org/browser/lib/tty/key.c

  ESC letter
  ESC [ letter
  ESC [ modifier letter
  ESC [ 1 ; modifier letter
  ESC [ num char
  ESC [ num ; modifier char
  ESC O letter
  ESC O modifier letter
  ESC O 1 ; modifier letter
  ESC N letter
  ESC [ [ num ; modifier char
  ESC [ [ 1 ; modifier letter
  ESC ESC [ num char
  ESC ESC O letter

  - char is usually ~ but $ and ^ also happen with rxvt
  - modifier is 1 +
                (shift     * 1) +
                (left_alt  * 2) +
                (ctrl      * 4) +
                (right_alt * 8)
  - two leading ESCs apparently mean the same as one leading ESC
*/

utils.normalize = function(s, key) {
  var metaKeyCodeRe = /^(?:\x1b)([a-zA-Z0-9])$/;
  var functionKeyCodeRe = /^(?:\x1b+)(O|N|\[|\[\[)(?:(\d+)(?:;(\d+))?([~^$])|(?:1;)?(\d+)?([a-zA-Z]))/;

  var events = [];
  var parts;
  var ch = s;
  key = extend({
    name: undefined,
    ctrl: false,
    meta: false,
    shift: false,
    value: s
  }, key);

  if (s === null && key.name === 'down') {
    key.ctrl = true;
    s = 'n';
  }

  if (s === null && key.name === 'up') {
    key.ctrl = true;
    s = 'p';
  }

  if (isBuffer(s)) {
    if (s[0] > 127 && s[1] === undefined) {
      s[0] -= 128;
      s = '\x1b' + s.toString();
    } else {
      s = s.toString();
    }
  }

  if (!s && key && key.sequence) {
    s = key.sequence;
  }

  if (typeof s === 'number') {
    s = String(s);
    key.value = Number(s);
    key.name = 'number';
  }

  key.sequence = String(s);

  if (s === '\r') {
    // carriage return
    key.name = 'return';
  } else if (s === '\n') {
    // enter, should have been called linefeed
    key.name = 'enter';
  } else if (s === '\t') {
    // tab
    key.name = 'tab';
  } else if (s === '\b' || s === '\x7f' || s === '\x1b\x7f' || s === '\x1b\b') {
    // backspace or ctrl+h
    key.name = 'backspace';
    key.meta = s.charAt(0) === '\x1b';
  } else if (s === '\x1b' || s === '\x1b\x1b') {
    // escape key
    key.name = 'escape';
    key.meta = s.length === 2;
  } else if (s === ' ' || s === '\x1b ') {
    key.name = 'space';
    key.meta = s.length === 2;
  } else if (s <= '\x1a') {
    // ctrl+letter
    key.name = String.fromCharCode(s.charCodeAt(0) + 'a'.charCodeAt(0) - 1);
    key.ctrl = true;
  } else if (s.length === 1 && s >= '0' && s <= '9') {
    // number
    key.value = Number(s);
    key.name = 'number';
  } else if (s.length === 1 && '!"#$%&()*+:<>?@^_{|}~'.indexOf(s) !== -1) {
    // shift
    key.name = s;
    key.shift = true;
  } else if ('.,-\\/;=[]`\''.indexOf(s) !== -1) {
    key.name = s;
  } else if (s.length === 1 && s >= 'a' && s <= 'z') {
    // lowercase letter
    key.name = s;
  } else if (s.length === 1 && s >= 'A' && s <= 'Z') {
    // shift+letter
    key.name = s.toLowerCase();
    key.shift = true;
  } else if ((parts = metaKeyCodeRe.exec(s))) {
    // meta+character key
    key.name = parts[1].toLowerCase();
    key.meta = true;
    key.shift = /^[A-Z]$/.test(parts[1]);
  } else if ((parts = functionKeyCodeRe.exec(s))) {
    // ansi escape sequence
    // reassemble the key code leaving out leading \x1b's,
    // the modifier key bitflag and any meaningless "1;" sequence
    var code = (parts[1] || '')
      + (parts[2] || '')
      + (parts[4] || '')
      + (parts[6] || '');

    var modifier = (parts[3] || parts[5] || 1) - 1;

    // Parse the key modifier
    key.ctrl = !!(modifier & 4);
    key.meta = !!(modifier & 10);
    key.shift = !!(modifier & 1);
    key.code = code;

    // Parse the key itself
    switch (code) {
      /* xterm/gnome ESC O letter */
      case 'OP': key.name = 'f1'; break;
      case 'OQ': key.name = 'f2'; break;
      case 'OR': key.name = 'f3'; break;
      case 'OS': key.name = 'f4'; break;
      /* xterm/rxvt ESC [ number ~ */
      case '[11~': key.name = 'f1'; break;
      case '[12~': key.name = 'f2'; break;
      case '[13~': key.name = 'f3'; break;
      case '[14~': key.name = 'f4'; break;
      /* from Cygwin and used in libuv */
      case '[[A': key.name = 'f1'; break;
      case '[[B': key.name = 'f2'; break;
      case '[[C': key.name = 'f3'; break;
      case '[[D': key.name = 'f4'; break;
      case '[[E': key.name = 'f5'; break;
      /* common */
      case '[15~': key.name = 'f5'; break;
      case '[17~': key.name = 'f6'; break;
      case '[18~': key.name = 'f7'; break;
      case '[19~': key.name = 'f8'; break;
      case '[20~': key.name = 'f9'; break;
      case '[21~': key.name = 'f10'; break;
      case '[23~': key.name = 'f11'; break;
      case '[24~': key.name = 'f12'; break;
      /* xterm ESC [ letter */
      case '[A': key.name = 'up'; break;
      case '[B': key.name = 'down'; break;
      case '[C': key.name = 'right'; break;
      case '[D': key.name = 'left'; break;
      case '[E': key.name = 'clear'; break;
      case '[F': key.name = 'end'; break;
      case '[H': key.name = 'home'; break;
      /* xterm/gnome ESC O letter */
      case 'OA': key.name = 'up'; break;
      case 'OB': key.name = 'down'; break;
      case 'OC': key.name = 'right'; break;
      case 'OD': key.name = 'left'; break;
      case 'OE': key.name = 'clear'; break;
      case 'OF': key.name = 'end'; break;
      case 'OH': key.name = 'home'; break;
      /* xterm/rxvt ESC [ number ~ */
      case '[1~': key.name = 'home'; break;
      case '[2~': key.name = 'insert'; break;
      case '[3~': key.name = 'delete'; break;
      case '[4~': key.name = 'end'; break;
      case '[5~': key.name = 'pageup'; break;
      case '[6~': key.name = 'pagedown'; break;
      /* putty */
      case '[[5~': key.name = 'pageup'; break;
      case '[[6~': key.name = 'pagedown'; break;
      /* rxvt */
      case '[7~': key.name = 'home'; break;
      case '[8~': key.name = 'end'; break;
      /* rxvt keys with modifiers */
      case '[a': key.name = 'up'; key.shift = true; break;
      case '[b': key.name = 'down'; key.shift = true; break;
      case '[c': key.name = 'right'; key.shift = true; break;
      case '[d': key.name = 'left'; key.shift = true; break;
      case '[e': key.name = 'clear'; key.shift = true; break;

      case '[2$': key.name = 'insert'; key.shift = true; break;
      case '[3$': key.name = 'delete'; key.shift = true; break;
      case '[5$': key.name = 'pageup'; key.shift = true; break;
      case '[6$': key.name = 'pagedown'; key.shift = true; break;
      case '[7$': key.name = 'home'; key.shift = true; break;
      case '[8$': key.name = 'end'; key.shift = true; break;

      case 'Oa': key.name = 'up'; key.ctrl = true; break;
      case 'Ob': key.name = 'down'; key.ctrl = true; break;
      case 'Oc': key.name = 'right'; key.ctrl = true; break;
      case 'Od': key.name = 'left'; key.ctrl = true; break;
      case 'Oe': key.name = 'clear'; key.ctrl = true; break;

      case '[2^': key.name = 'insert'; key.ctrl = true; break;
      case '[3^': key.name = 'delete'; key.ctrl = true; break;
      case '[5^': key.name = 'pageup'; key.ctrl = true; break;
      case '[6^': key.name = 'pagedown'; key.ctrl = true; break;
      case '[7^': key.name = 'home'; key.ctrl = true; break;
      case '[8^': key.name = 'end'; key.ctrl = true; break;
      /* misc. */
      case '[Z': key.name = 'tab'; key.shift = true; break;
      default:
        key.name = 'undefined';
        break;
    }
  } else if (s.length > 1 && s[0] !== '\x1b') {
    // Got a longer-than-one string of characters.
    // Probably a paste, since it wasn't a control sequence.
    for (var i = 0; i < s.length; i++) {
      events = events.concat(utils.normalize(s[i]));
    }
  }

  // XXX: this "mouse" parsing code is NOT part of the node-core standard
  // `readline.js` module, and is a `keypress` module non-standard extension.
  if (key.code === '[M') {
    key.name = 'mouse';
    s = key.sequence;
    var b = s.charCodeAt(3);
    key.x = s.charCodeAt(4) - parseInt('040', 8);
    key.y = s.charCodeAt(5) - parseInt('040', 8);

    key.scroll = 0;

    key.ctrl = !!((1 << 4) & b);
    key.meta = !!((1 << 3) & b);
    key.shift = !!((1 << 2) & b);

    key.release = (3 & b) === 3;

    if ((1 << 6) & b) {
      // scroll
      key.scroll = 1 & b ? 1 : -1;
    }

    if (!key.release && !key.scroll) {
      key.button = b & 3;
    }
  }

  if (key.name === 'p' && key.ctrl && !key.shift && !key.meta) {
    key.name = 'up';
  }

  if (key.name === 'n' && key.ctrl && !key.shift && !key.meta) {
    key.name = 'down';
  }

  // Don't emit a key if no name was found
  if (!key.name) {
    return events;
  }

  if (s.length === 1) {
    ch = s;
  }

  events.push({ch: ch, key: key});
  return events;
};

utils.emitKeypress = function(emitter, s, key) {
  var events = utils.normalize(s, key);
  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    if (event.key && event.key.name === 'mouse') {
      emitter.emit('mousepress', event.key);
    } else {
      emitter.emit('keypress', event.key.name, event.key);
      emitter.emit(event.key.name, event.key);
    }
  }
};

utils.key = {
  up: '\u001b[A',
  down: '\u001b[B',
  left: '\u001b[D',
  right: '\u001b[C',
  ctrlc: '\u0003'
};

function last(arr) {
  return arr[arr.length - 1];
}

function isNumber(n) {
  return isNum(n) && String(n).trim() !== '';
}

function toNumber(n) {
  return isNumber(n) ? Number(n) : 1;
}
