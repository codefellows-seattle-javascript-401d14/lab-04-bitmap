'use strict';

module.exports = function(data){
  this.buf = data;
  this.fileSize = data.readUInt32LE(2);
  console.log(this.fileSize);
  this.offset = data.readUInt32LE(10);
  this.colorArray = data.slice(54,this.offset);
};
