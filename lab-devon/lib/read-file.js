'use strict';

const fs = require('fs');
const Buffer = require('../model/bitmap-constructor.js');
module.exports  = function(inputFile, callback){
  fs.readFile(inputFile, (err,data) => {
    if(err) return callback(err);
    var result = new Buffer(data);
    callback(null,result);
  });

};

// exports.writeFile = function(buf, inputFile){
//   return new Promise(function(resolve,reject){
//     fs.writeFile(inputFile, buf, function(err){
//       if (err) return reject(new Error(err));
//       resolve();
//     });
//   });
// };
