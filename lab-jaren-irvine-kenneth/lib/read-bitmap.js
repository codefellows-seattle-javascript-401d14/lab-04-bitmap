'use strict';

const fs = require('fs');

module.exports = function(inputFilePath, callback){
  var result = [];
  fs.readFile(inputFilePath, (err, data) => {
    if (err) return callback(err);
    result.push(data);
    callback(null, result);
  });
};
