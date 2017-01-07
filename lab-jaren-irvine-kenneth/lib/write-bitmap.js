'use strict';

const fs = require('fs');
//writing newly transformed file to a new output folder

module.exports = function(outputFilePath, bitmap, callback){
  fs.writeFile(outputFilePath, bitmap.buffer, (err) => {
    if (err) return callback(err);
    callback(null, bitmap);
  });
};
