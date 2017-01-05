'use strict';

const fs = require('fs');
// const EventEmitter = require('events').EventEmitter;

module.exports =  (filePaths, callback) => {
  let bitsofmap = [];
  fs.readFile(filePaths, (err, data) => {
    if (err) return callback(err);
    bitsofmap.push(data);
    callback(null, bitsofmap);
  });
};
