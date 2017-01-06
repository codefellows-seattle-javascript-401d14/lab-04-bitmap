'use strict';

const readBitmap = require('./lib/read-bitmap.js');
const writeBitmap = require('./lib/write-bitmap.js');

const main = module.exports = function() {
  return readBitmap('../assets/bitmap.bmp', function(err, bitmap) {
    if (err) return console.error(err);
    // this is where we do our transform
    bitmap.colorArray.fill(0);
    for (var i = 0; i < bitmap.colorArray.length; i += 4){
      bitmap.colorArray[i] = 0; // blue
      bitmap.colorArray[i+1] = 0; // green
      bitmap.colorArray[i+2] = 0; // red
      bitmap.colorArray[i+3] = 0; // alpha
    }

    writeBitmap('outputs/bitmap-out.bmp', bitmap, function(err){
      if (err) return console.error(err);
    });
  });
};

main();
