'use strict';
const fs = require('fs');

module.exports = function(buf){
  this.buf = buf;
  this.id = buf.readUInt32LE(0);
  this.numOfPixels = buf.readUInt32LE(28);
  this.pixalArray = buf.readUInt32LE(14);
  this.filesize = buf.readUInt32LE(2);
  this.offset = buf.readUInt32LE(10);
  this.colorArray = buf.slice(54, this.offset);
  this.width = buf.readUInt32LE(18);
  this.height = buf.readUInt32LE(22);
};
