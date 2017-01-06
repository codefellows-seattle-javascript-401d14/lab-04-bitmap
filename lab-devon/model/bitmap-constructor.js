'use strict';

module.exports = function(data){
  this.buf = data;
  this.numOfPixels = data.readUIntLE(28);
  this.pixalArray = data.readUIntLE(14);
  this.width = data.readUIntLE(18);
  this.red = data.readUIntLE(54);
  this.green = data.readUIntLE(63);
  this.blue = data.readUIntLE(66);
};
