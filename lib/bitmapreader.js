'use strict';

const fs = require('fs');
const BitStruct = require('../model/bit-read-constructor.js');
// const EventEmitter = require('events').EventEmitter;

module.exports =  (filePaths, callback) => {
  fs.readFile(filePaths, (err, data) => {
    if (err) return callback(err);
    let bitsofmap = new BitStruct(data);
    bitsofmap.random();
    callback(null, bitsofmap);
  });
};
