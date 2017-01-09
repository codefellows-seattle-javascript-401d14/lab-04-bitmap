'use strict';

const fs = require('fs');
const Bitmap = require('../model/bitmap.js');

const bitmapIO = module.exports = {};

bitmapIO.readBitmap = function(path){
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) return reject(err);
      resolve(new Bitmap(data));
    });
  });
}

bitmapIO.writeBitmap = function(path, bitmap){
  return new Promise((resolve, reject) => {
    if (bitmap.constructor !== Bitmap)
      return reject(new Error('must pass in a bitmap'));

    fs.writeFile(path, bitmap.buffer, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}
