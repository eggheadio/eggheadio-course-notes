'use strict';

var isNumber = require('is-number');

module.exports = function(arr, a, b) {
  if (!Array.isArray(arr)) {
    throw new TypeError('expected an array');
  }

  var idxa = isNumber(a) ? a : arr.indexOf(a);
  var idxb = isNumber(b) ? b : arr.indexOf(b);
  var vala = arr[idxa];
  var valb = arr[idxb];
  arr[idxa] = valb;
  arr[idxb] = vala;
  return arr;
};
