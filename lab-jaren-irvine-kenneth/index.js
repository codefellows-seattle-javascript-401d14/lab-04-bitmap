'use strict';

const readBitmap = require('./lib/read-bitmap.js');
const writeBitmap = require('./lib/write-bitmap.js');
const transformer = require('./lib/transforms.js');

const main = module.exports = function() {
  return readBitmap('../assets/bitmap.bmp', function(err, bitmap) {
    if (err) return console.error(err);
    // this is where we do our transform
    transformer.randomColors(bitmap);
    writeBitmap('outputs/bitmap-out.bmp', bitmap, function(err){
      if (err) return console.error(err);
    });
  });
};

main();
