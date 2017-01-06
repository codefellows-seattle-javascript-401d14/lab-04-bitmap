'use strict';

const fs = require('fs');
// const EventEmitter = require('events').EventEmitter;

module.exports =  (filePaths, bitsofmap, callback) => {
  fs.writeFile(filePaths, bitsofmap.buf, (err) => {
    if (err) return callback(err);
    callback(null, bitsofmap.buf);
  });
};
