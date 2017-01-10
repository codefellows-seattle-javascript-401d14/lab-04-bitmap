'use strict';

const Bitmap = module.exports = function(data){
  this.id = data.toString('utf-8',0,2);
  this.filesize = data.readUInt32LE(2);
  this.width = data.readUInt32LE(18);
  this.height = data.readUInt32LE(22);
  this.offset = data.readUInt32LE(10);
  this.colorArray = data.slice(54,this.offset);
  this.buf = data;
};

Bitmap.prototype.blackout = function(){
  this.colorArray.fill(0);
};

Bitmap.prototype.randomColors = function(){
  for(var i = 0; i< this.colorArray.length; i+=4){
    this.colorArray[i] = Math.floor(Math.random() *255) +1;
    this.colorArray[i+1] = Math.floor(Math.random() *255) +1;
    this.colorArray[i +2] = Math.floor(Math.random() *255) +1;
    this.colorArray[i] = Math.floor(Math.random() *255) +1;
  }
};
