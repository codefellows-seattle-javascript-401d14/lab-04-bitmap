'use strict';

//transformer that randomizes each individual color
//i = blue, i+1 = green, i+2 = red
const transformer = module.exports = {};

transformer.randomColors = function(bitmap) {
  for (var i = 0; i < bitmap.colorArray.length; i+= 4) {
    bitmap.colorArray[i] = Math.floor(Math.random() * 255) + 1;
    bitmap.colorArray[i + 1] = Math.floor(Math.random() * 255) + 1;
    bitmap.colorArray[i + 2] = Math.floor(Math.random() * 255) + 1;
  }
};
