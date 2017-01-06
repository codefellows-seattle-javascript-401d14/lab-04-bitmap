'use strict';

const readFile = require('./lib/read-file.js');

const main = module.exports = function(){
  return readFile('../assets/house.bmp', function(err,data) {
    if  (err) return console.error(err);
    console.log(data);
  });


};

console.log(main());
