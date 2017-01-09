'use strict';

const readBitmap = require('./lib/read-bitmap.js');
const writeBitmap = require('./lib/write-bitmap.js');
const transformer = require('./lib/transforms.js');

const main = module.exports = function(argv) {
  var names = ['random', 'grey', 'invert'];
  if (!argv || argv.length !== 5) {
    console.error('Usage error: node index.js <transformName> <inputFilePath> <outputFilePath>');
    process.exit(1);
  }
  if (names.indexOf(argv[2]) === -1) {
    console.log('Usage error: transform name not recognized');
    process.exit(1);
  }
  //reads our constructor
  return readBitmap(argv[3], function(err, bitmap) {
    if (err) return console.error(err);
    // this is where we do our transform
    try{
      if (argv[2] === 'random')
        transformer.randomColors(bitmap);
      if (argv[2] === 'grey')
        transformer.greyScale(bitmap);
      if (argv[2] === 'invert')
        transformer.invertColors(bitmap);
    } catch(err) {
      console.log('failed to transform');
      // quit program with failure
      process.exit(1);
    }
    //follow up with a write to the new output folder
    writeBitmap(argv[4], bitmap, function(err){
      if (err) return console.error(err);
      console.log('Success!');
    });
  });
};

main(process.argv);

//promises of the future
