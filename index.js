'use strict';

const writeFile = require('./lib/bitmap-writer.js');
const readBitmap = require('./lib/bitmapreader.js');
// const EventEmitter = require('events').EventEmitter;


const main = module.exports = function(){
  return readBitmap('./assets/house.bmp', function(err, bitMap) {
    if (err) return console.error(err);
    console.log(bitMap);
    /// transform
    
    return writeFile('./outputs/output.bmp', bitMap, function(err) {
      if (err) return console.error(err);
    });
  });
};
console.log(main());
