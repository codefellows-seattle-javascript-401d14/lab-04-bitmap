'use strict';
// data is the bitmap buffer data
module.exports = function(data) {
  this.buffer = data;
  this.format = data.readUInt32LE(28);
  this.width = data.readUInt32LE(18);
  this.height = data.readUInt32LE(22);
  this.red = data.readUInt32LE(54);
  this.green = data.readUInt32LE(58);
  this.blue = data.readUInt32LE(62);
  this.alpha = data.readUInt32LE(66);
};
