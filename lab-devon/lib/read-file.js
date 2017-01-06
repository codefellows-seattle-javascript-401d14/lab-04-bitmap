'use strict';

const fs = require('fs');
const Bitmap = require('../model/bitmap-constructor.js');

module.exports  = function(inputFile, callback){
  fs.readFile(inputFile, (err,data) => {
    if(err) return callback(err);
    var result = new Bitmap(data);
    callback(null,result);
  });
};
