'use strict';

const fs = require('fs');
const Buffer = require('../model/bitmap-constructor.js');

module.exports  = function(inputFile, callback){
  fs.readFile(inputFile, (err,data) => {
    if(err) return console.log(err);
    var result = new Buffer(data);
    callback(null,result);
  });

};
