'use strict';
// data is the bitmap buffer data
module.exports = function(data) {
  this.buffer = data; // full data for bitmap file
  this.id = data.toString('utf-8', 0, 2); // identifier for Bitmap returns BM for test comparison "doesn't mean bad manners :P"
  this.size = data.readUInt32LE(2); // sets bitmap size
  this.format = data.readUInt32LE(28); // sets number of bits per pixel
  this.width = data.readUInt32LE(18); // sets file width
  this.height = data.readUInt32LE(22); // sets file height
  this.offset = data.readUInt32LE(10); // sets endpoint for colorArray
  this.colorArray = data.slice(54,this.offset); // returns color array buffer
  this.pixelArray = data.slice(this.offset, this.size); // returns pixel array buffer
};
