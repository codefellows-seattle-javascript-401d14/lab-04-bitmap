'use strict';

const Bitmap = module.exports = function(buffer){
  this.buffer = buffer;

  // file header
  this.type = buffer.toString('utf8', 0, 2);
  this.size = buffer.readUInt32LE(2);
  this.pixelArrayOffset = buffer.readUInt32LE(10);

  // DIB header
  this.size = buffer.readUInt32LE(14);
  this.width = buffer.readUInt32LE(18);
  this.height = buffer.readUInt32LE(22);
  this.colorPlanes = buffer.readUInt16LE(26);
  this.depth = buffer.readUInt16LE(28);
  this.horizontalResolution = buffer.readUInt32LE(38);
  this.verticalsResolution = buffer.readUInt32LE(42);
  this.numColors = buffer.readUInt32LE(46);
  this.importantColors = buffer.readUInt32LE(50);

  // colorPallet
  this.colorPalletBuffer = buffer.slice(54, this.pixelArrayOffset);

  // pixelArray
  this.pixelBuffer = buffer.slice(this.pixelArrayOffset);
}
