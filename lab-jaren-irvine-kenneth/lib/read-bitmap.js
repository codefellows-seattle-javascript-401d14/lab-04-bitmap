'use strict';

const fs = require('fs');
const Bitmap = require('../model/bitmap-constructor.js');
//constants include fs and Bitmap (being pulled from our bitmap-contructor.js file)
module.exports = function(inputFilePath, callback){
  fs.readFile(inputFilePath, (err, data) => {
    if (err) return callback(err);
    var result = new Bitmap(data);
    callback(null, result);
  });
};
