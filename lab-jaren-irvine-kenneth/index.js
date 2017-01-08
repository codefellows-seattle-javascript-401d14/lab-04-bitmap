'use strict';

const readBitmap = require('./lib/read-bitmap.js');
const writeBitmap = require('./lib/write-bitmap.js');
const transformer = require('./lib/transforms.js');

const main = module.exports = function() {
  //reads our constructor
  return readBitmap('../assets/bitmap.bmp', function(err, bitmap) {
    if (err) return console.error(err);
    // this is where we do our transform
    // console.log(bitmap.id);
    //transformer.randomColors(bitmap);
    //transformer.greyScale(bitmap);
    transformer.oppositeColors(bitmap);
    //follow up with a write to the new ouput folder
    writeBitmap('outputs/main-output.bmp', bitmap, function(err){
      if (err) return console.error(err);
    });
  });
};

main();

//promises of the future
