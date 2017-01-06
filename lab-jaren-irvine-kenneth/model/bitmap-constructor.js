'use strict';

module.exports = function(data) {
  this.buffer = data;
  this.format = data.readUInt32LE(28);
  this.width = data.readUInt32LE(18);
  this.height = data.readUInt32LE(22);
  
};
