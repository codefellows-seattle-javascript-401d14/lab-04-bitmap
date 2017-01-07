'use strict';
// data is the bitmap buffer data
module.exports = function(data) {
  this.buffer = data; //full data for bitmap file
  this.id = data.toString('utf-8', 0, 2); //identifier for Bitmap returns BM for test comparison "doesn't mean bad manners :P"
  this.format = data.readUInt32LE(28); //returns file size
  this.width = data.readUInt32LE(18); //returns file width
  this.height = data.readUInt32LE(22); //returns file height
  this.offset = data.readUInt32LE(10); //returns endpoint for colorArray
  this.colorArray = data.slice(54,this.offset); //sets startpoint and endpoint for colorArray
};
