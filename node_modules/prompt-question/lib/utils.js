'use strict';

var define = require('define-property');
var typeOf = require('kind-of');
var utils = module.exports;

/**
 * Extend the given `obj` with `options`. Assigned values
 * are also on "question.cache" so that we can easily use
 * those when question.clone() is called
 */

utils.assign = function(question, options) {
  var keys = Object.keys(options);
  var cache = {options: {}};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var val = options[key];

    if (utils.isObject(val)) {
      Object.assign(cache, val);

    }  else if (val != null) {
      cache[key] = val;
    }
  }

  if (!cache.message) {
    cache.message = cache.name;
  }
  define(question, 'cache', cache);
  var opts = question.options;
  Object.assign(question, cache);
  question.options = Object.assign({}, opts, cache.options);
};

/**
 * Decrement the number on each value in the given array.
 */

utils.decrement = function(val) {
  val = Array.isArray(val) ? val : [val];
  for (var i = 0; i < val.length; i++) {
    if (typeof val[i] === 'number') {
      val[i] = val[i] - 1;
    }
  }
  return val;
};

/**
 * Return true if `val` is an object
 */

utils.isObject = function(val) {
  return typeOf(val) === 'object';
};

/**
 * Return true if `str` is a non-empty string
 */

utils.isString = function(str) {
  return str && typeof str === 'string';
};

/**
 * Expose `utils` modules
 */

module.exports = utils;
