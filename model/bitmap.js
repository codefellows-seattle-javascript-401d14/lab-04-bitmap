'use strict';
// Bitmap constructor to parse the buffer's "bitmap headers"
export class Bitmap()  {
  constructor(name, buffer){
    this.name = name;
    this.data = buffer;
  };
};
