'use strict';

const writeFile = require('./lib/bitmap-writer.js');
const readBitmap = require('./lib/bitmapreader.js');
// const EventEmitter = require('events').EventEmitter;

let names = ['random'];
const main = module.exports = function(argv){
  if (!argv || argv.length !== 5) {
    console.error('Usage error: node index.js <transform> <input> <outputs>');
    process.exit(1);
  }
  if (names.indexOf(argv[1]) === -1) {
    console.log('Usage error: not proper transform');
    process.exit(1);
  }
  return readBitmap('./assets/house.bmp', function(err, bitMap) {
    if (err) return console.error(err);
    console.log(bitMap);
    /// transform
    bitMap.random();
    return writeFile('./outputs/output.bmp', bitMap, function(err) {
      console.log('did we hit here?');
      if (err) return console.error(err);
    });
  });
};
main(process.argv);
