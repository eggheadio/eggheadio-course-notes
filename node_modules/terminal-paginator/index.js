'use strict';

var debug = require('debug')('terminal-paginator');
var extend = require('extend-shallow');
var log = require('log-utils');

/**
 * The paginator keeps track of a position index in a list
 * and returns a subset of the choices if the list is too
 * long.
 */

function Paginator(options) {
  debug('initializing from <%s>', __filename);
  this.options = options || {};
  this.footer = this.options.footer;
  if (typeof this.footer !== 'string') {
    this.footer = '(Move up and down to reveal more choices)';
  }
  this.firstRender = true;
  this.lastIndex = 0;
  this.position = 0;
}

/**
 * Paginate the given `output` string and update the cursor position.
 *
 * @param {String} `output`
 * @param {Number} `pos`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

Paginator.prototype.paginate = function(output, pos, options) {
  var opts = extend({limit: 7}, this.options, options);
  var lines = output.split('\n');
  var limit = opts.limit;

  // Return if we don't have enough visible lines to paginate
  if (lines.length <= limit || opts.paginate === false) {
    return output;
  }

  // get the approximate "middle" of the visible list
  var middle = Math.floor(limit / 2);

  // Move the position when a down keypress is entered, and limit
  // it to approximately half the length of the limit to keep the
  // position the middle of the visible list
  if (this.position < middle && this.lastIndex < pos && pos - this.lastIndex < limit) {
    this.position = Math.min(middle, this.position + pos - this.lastIndex);
  }

  // store reference to the index of the currently pos item
  this.lastIndex = pos;

  // Duplicate lines to create the illusion of an infinite list
  var infinite = lines.concat(lines).concat(lines);
  if (opts.filterList !== false) {
    infinite = infinite.filter(Boolean);
  }

  var topIndex = Math.max(0, pos + lines.length - this.position - 1);

  // Create the visible list based on the limit and current cursor position
  var visible = infinite.splice(topIndex, limit).join('\n');
  if (this.footer) {
    visible += '\n';
    visible += log.dim(this.footer);
  }

  // ensure that output has a leading newline, so that the first
  // list item begins on the next line after the prompt question
  if (visible.charAt(0) !== '\n') {
    visible = '\n' + visible;
  }

  return visible;
};

/**
 * Expose `Paginator`
 */

module.exports = Paginator;
