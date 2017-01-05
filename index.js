'use strict';

const readBitmap = require('./lib/bitmapreader.js');
// const EventEmitter = require('events').EventEmitter;


const main = module.exports = function(){
  return readBitmap('./assets/house.bmp', function(err, data) {
    if (err) return console.error(err);

    console.log(data);
  });
};
console.log(main());
