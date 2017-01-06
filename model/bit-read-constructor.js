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

BitMap.prototype.random = function(){
//   console.log(this.colorArray);
//   this.colorArray.fill(0);
// };
  for(var i = 0; i < this.colorArray.length; i += 4) {
    this.colorArray[i] = Math.floor(Math.random() * 255);
    this.colorArray[i + 1] = Math.floor(Math.random() * 255);
    this.colorArray[i + 2] = Math.floor(Math.random() * 255);
  }
};

//BitMap.prototype.random();
