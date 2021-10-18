'use strict';

var isObject = require('isobject');

function toggle(arr, prop, idx) {
  var ele = arr[idx];
  var init = isObject(ele) ? ele[prop] : false;
  var len = arr.length;
  var i = -1;

  while (++i < len) {
    ele = arr[i];
    if (!isObject(ele)) {
      continue;
    }
    if (i !== idx) {
      ele[prop] = !!init;
    } else {
      ele[prop] = !init;
    }
  }
  return arr;
}

toggle.enable = function(arr, prop, i) {
  return initial(arr, prop, i, false);
};

toggle.disable = function(arr, prop, i) {
  return initial(arr, prop, i, true);
};

function initial(arr, prop, i, init) {
  if (isObject(arr[i])) arr[i][prop] = init;
  return toggle(arr, prop, i);
}

/**
 * Expose `toggle`
 */

module.exports = toggle;
