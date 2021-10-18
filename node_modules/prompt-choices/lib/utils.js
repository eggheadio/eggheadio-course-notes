'use strict';

const isNumber = require('is-number');

/**
 * Lazily require module dependencies in a way that is both
 * friendly to node.js and webpack/browserify.
 */

define(exports, 'flatten', () => require('arr-flatten'));
define(exports, 'clone', () => require('clone-deep'));
define(exports, 'Separator', () => require('choices-separator'));
define(exports, 'define', () => require('define-property'));
define(exports, 'typeOf', () => require('kind-of'));
define(exports, 'toggle', () => require('toggle-array'));
define(exports, 'set', () => require('set-value'));

function define(obj, key, value) {
  Reflect.defineProperty(obj, key, { get: value });
}

/**
 * Returns true if `val` is a number (also ensures that val
 * is not whitespace, which is cast to `0`)
 */

exports.isNumber = function(val) {
  return isNumber(val) && String(val).trim() !== '';
};

/**
 * Returns true if `val` is a number (also ensures that val
 * is not whitespace, which is cast to `0`)
 */

exports.isObject = function(val) {
  return exports.typeOf(val) === 'object';
};

/**
 * Cast `val` to an array.
 */

exports.arrayify = function(val) {
  return val ? (Array.isArray(val) ? val : [val]) : [];
};
