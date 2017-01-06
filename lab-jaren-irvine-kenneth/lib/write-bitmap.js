'use strict';

const fs = require('fs');
//const Buffer = require('../model/bitmap-constructor.js');

module.exports = function(outputFilePath, bitmap, callback){
  fs.writeFile(outputFilePath, bitmap.buffer, (err) => {
    if (err) return callback(err);

    callback(null, bitmap);
  });
};
