'use strict';

const fs = require('fs');
const Buffer = require('../model/bitmap-constructor.js');

module.exports = function(inputFilePath, callback){
  fs.readFile(inputFilePath, (err, data) => {
    if (err) return callback(err);
    // data is the buffer
    // console.log(data);
    var result = new Buffer(data);
    callback(null, result);
  });
};
