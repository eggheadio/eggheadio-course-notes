'use strict';

module.exports = function(options) {
  if (options && typeof options.pointer === 'string') {
    return options.pointer.trim();
  }

  var small = options && options.small;
  switch (process.platform) {
    case 'cygwin':
    case 'msys':
    case 'win32':
      return small ? '»' : '>';
    case 'linux':
      return small ? '‣' : '‣';
    default: {
      return small ? '›' : '❯';
    }
  }
};
