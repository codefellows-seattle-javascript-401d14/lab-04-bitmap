'use strict';

const readFile = require('./lib/read-file.js');
const writeFile = require('./lib/write-files.js');

const main = module.exports = function(){
  return readFile('../assets/house.bmp', function(err,bitmap) {
    if  (err) return console.error(err);
    console.log(bitmap);
    return writeFile('../assets/output.bmp', bitmap, function(err){
      if (err) return console.error(err);
    });
  });



};

console.log(main());
