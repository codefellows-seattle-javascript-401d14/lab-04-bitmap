'use strict';


const BitMap = module.exports = function(data) {
  this.filesize = data.readUInt32LE(2);
  this.format = data.readUInt32LE();
  this.width = data.readUInt32LE(22);
  this.height = data.readUInt32LE();
  this.offset = data.readUInt32LE(10);
  this.colorArray = data.slice(54,this.offset);
  this.buf = data;
  console.log(data);
};

BitMap.prototype.random
