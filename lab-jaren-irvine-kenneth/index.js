'use strict';

const readBitmap = require('./lib/read-bitmap.js');

const main = module.exports = function() {
  return readBitmap('../assets/bitmap.bmp', function(err, data) {
    if (err) return console.error(err);

  });
};

console.log(main());
