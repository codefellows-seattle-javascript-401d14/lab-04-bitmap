'use strict';

const transformer = module.exports = {};

//transformer that randomizes each individual color
//i = blue, i+1 = green, i+2 = red
transformer.randomColors = function(bitmap) {
  // if block checks for a bitmap buffer object
  if (typeof bitmap !== 'object' || bitmap.id === undefined)
    throw new Error('expected a bitmap buffer');
  for (var i = 0; i < bitmap.colorArray.length; i += 4) {
    bitmap.colorArray[i] = Math.floor(Math.random() * 255) + 1;
    bitmap.colorArray[i + 1] = Math.floor(Math.random() * 255) + 1;
    bitmap.colorArray[i + 2] = Math.floor(Math.random() * 255) + 1;
  }
};

/* Transforms the bitmap to grey scale by averaging the rgb values of each color */
transformer.greyScale = function(bitmap) {
  if (typeof bitmap !== 'object' || bitmap.id === undefined)
    throw new Error('expected a bitmap buffer');
  let colors = bitmap.colorArray;
  for (let i = 0; i < colors.length; i += 4) {
    let avg = (colors[i] + colors[i + 1] + colors[i + 2]) / 3;
    colors[i] = colors[i + 1] = colors[i + 2] = Math.floor(avg);
  }
};

/* Transforms the bitmap to its inverted version */
transformer.invertColors = function(bitmap) {
  if (typeof bitmap !== 'object' || bitmap.id === undefined)
    throw new Error('expected a bitmap buffer');
  let colors = bitmap.colorArray;
  for (let i = 0; i < colors.length; i += 4) {
    colors[i] = 255 - colors[i];
    colors[i + 1] = 255 - colors[i + 1];
    colors[i + 2] = 255 - colors[i + 2];
  }
};
