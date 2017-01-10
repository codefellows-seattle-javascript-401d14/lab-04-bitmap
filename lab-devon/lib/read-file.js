'use strict';

const fs = require('fs');
const Bitmap = require('../model/bitmap-constructor.js');

module.exports  = function(inputFile, callback){
  fs.readFile(inputFile, (err,data) => {
    if(err) return callback(err);
    let result = new Bitmap(data);
    result.blackout();
    callback(null,result);
  });
};
