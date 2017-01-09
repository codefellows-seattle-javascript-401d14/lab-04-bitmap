'use strict';

const Bitmap = module.exports = function(buffer){
  this.buffer = buffer;

  // file header
  this.type = buffer.toString('utf8', 0, 2);
  this.size = buffer.readUInt32LE(2);
  this.pixelArrayOffset = buffer.readUInt32LE(10);

  // DIB header
  this.width = buffer.readUInt32LE(18);
  this.height = buffer.readUInt32LE(22);
  this.colorPlanes = buffer.readUInt16LE(26);
  this.depth = buffer.readUInt16LE(28);
  this.horizontalResolution = buffer.readUInt32LE(38);
  this.verticalResolution = buffer.readUInt32LE(42);
  this.numColors = buffer.readUInt32LE(46);
  this.importantColors = buffer.readUInt32LE(50);

  // color palet
  this.colorPalletBuffer = buffer.slice(54, this.pixelArrayOffset);

  // pixel data
  this.pixelBuffer = buffer.slice(this.pixelArrayOffset);
}

Bitmap.prototype.blackout = function(){
  this.colorPalletBuffer.fill(0);
  return Promise.resolve(this);
}

Bitmap.prototype.invert = function(){
  for(let i=0; i<this.colorPalletBuffer.length; i++){
    this.colorPalletBuffer[i] = 255 - this.colorPalletBuffer[i];
  }

  return Promise.resolve(this);
}

Bitmap.prototype.bandw = function(){
  let colors = this.colorPalletBuffer;
  for(let i=0; i<colors.length; i+=4){
    let average = Math.floor((colors[i] + colors[i+1] + colors[i+2]) / 3)
    colors[i] = average;
    colors[i+1] = average;
    colors[i+2] = average;
  }
  return Promise.resolve(this);
}

Bitmap.prototype.lighten = function(amount=10){
  amount = Number(amount);
  if(isNaN(amount)) 
    return Promise.reject(new Error('lighten amount must be a number'));

  let colors = this.colorPalletBuffer;
  // add amount to orignal numbber but dont exceed 255
  for(let i=0; i<colors.length; i+=4){
    colors[i] = (colors[i] + amount) > 255 ? 255 : colors[i] + amount
    colors[i+1] = (colors[i+1] + amount) > 255 ? 255 : colors[i+1] + amount
    colors[i+2] = (colors[i+2] + amount) > 255 ? 255 : colors[i+2] + amount
  }
  
  return Promise.resolve(this);
}

Bitmap.prototype.darken = function(amount=10){
  amount = Number(amount);
  if(isNaN(amount)) 
    return Promise.reject(new Error('daken amount must be a number'));

  let colors = this.colorPalletBuffer;
  // subtract amount from orignal numbber but dont go under 0
  for(let i=0; i<colors.length; i+=4){
    colors[i] = (colors[i] + amount) < 0 ? 0: colors[i] - amount 
    colors[i+1] = (colors[i+1] + amount) < 0 ? 0: colors[i+1] - amount 
    colors[i+2] = (colors[i+2] + amount) < 0 ? 0: colors[i+2] - amount 
  }

  return Promise.resolve(this)
}
