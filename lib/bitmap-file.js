'use strict';

const fs = require('fs');
const path = require('path');
const ee = require('events').EventEmitter;

const bitmap = require('../model/bitmap.js');

const bitmapFile = module.exports = function(filePath){
  ee.call(this);
  if (filePath) this.emit('read', filePath);
};

bitmapFile.prototype = Object.create(ee.prototype);
