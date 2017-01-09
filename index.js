'use strict';

const readFile = require('./lib/read-file.js');
const writeFile = require('./lib/write-file.js');
const transformFile = require('./lib/transform-file.js');

const main = module.exports = function(){
  return readFile('./assets/house.bmp', function(err, bitmap) {
    if  (err) return console.error(err);
    transformFile.randomColors(bitmap);
    return writeFile('./outputfiles/output.bmp', bitmap, function(err) {
      if  (err) return console.error(err);
    });
  });
};
main();
//Open the bitmap file using fs module and read it into a buffer

//Use a Bitmap constructor to parse the buffer's "bitmap headers"

//Run a transform on the bitmap instance

//Convert the bitmap into a buffer

//Write the buffer into a new file
