'use strict';

const fs = require('fs');
const Buffer = require('../model/bitmap-constructor.js');
//constants include fs and Buffer (being pulled from our bitmap-contructor.js file)
module.exports = function(inputFilePath, callback){
  fs.readFile(inputFilePath, (err, data) => {
    if (err) return callback(err);
    // data is the buffer
    var result = new Buffer(data);
    callback(null, result);
  });
};
