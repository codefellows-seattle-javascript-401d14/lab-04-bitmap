'use strict';

const fs = require('fs');
const bitStruct = require('../model/bit-read-constructor.js');
// const EventEmitter = require('events').EventEmitter;

module.exports =  (filePaths, callback) => {
  fs.readFile(filePaths, (err, data) => {
    if (err) return callback(err);
    // bitsofmap.push(data);
    let bitsofmap = new bitStruct(data);
    callback(null, bitsofmap);
  });
};
