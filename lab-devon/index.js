'use strict';

const readFile = require('./lib/read-file.js');
const writeFile = require('./lib/write-file.js');

let names = ['random'];

const main = module.exports = function(argv){
  if (!argv || argv.length !==5){
    console.error('Must Type: node index.js <transform> <input> <outputs>');
    process.exit(1);
  }
  if(names.indexOf(argv[1]) === -1) {
    console.log('Usage Error: need to input correct transform name');
    process.exit(1);
  }
  return readFile('../assets/house.bmp', function(err,bitmap) {
    if  (err) return console.error(err);
    bitmap.blackout();
    return writeFile('../assets/output.bmp', bitmap, function(err){
      if (err) return console.error(err);
    });
  });
};
main(process.argv);

console.log(main(process.argv));
