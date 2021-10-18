'use strict';

var win = require('is-windows')();
var green = require('ansi-green');
var gray = require('ansi-gray');

module.exports = {
  on: green(win ? '(*)' : '◉'),
  off: win ? '( )' : '◯',
  disabled: gray(win ? '(|)' : 'Ⓘ')
};

module.exports.star = {
  on: green('★'),
  off: '☆',
  disabled: gray('☆')
};

module.exports.check = {
  on: green(win ? '\u221A' : '✓'),
  off: win ? '[ ]' : '☐',
  disabled: gray(win ? '\u00D7' : '☒')
};

module.exports.ballot = {
  on: green(win ? '[×]' : '☑'),
  off: win ? '[ ]' : '☐',
  disabled: gray(win ? '\u00D7' : '☒')
};

module.exports.nocolor = {
  on: win ? '(*)' : '◉',
  off: win ? '( )' : '◯',
  disabled: win ? '(|)' : 'Ⓘ',

  star: {
    on: win ? '*' : '★',
    off: '☆',
    disabled: '☆'
  },

  ballot: {
    on: '☑',
    off: '☐',
    disabled: '☒'
  },

  check: {
    on: win ? '\u221A' : '✓',
    off: win ? '[ ]' : '☐',
    disabled: win ? '\u00D7' : '☒'
  }
};
