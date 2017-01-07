'use strict';

const expect = require('chai').expect;
const Bitmap = require('../model/bitmap.js');

const mockData = {
  type: 'BM',
  size: 100,
  pixelArrayOffset: 64,  // makes the colorPalletBuffer length 10
  width: 100,
  height: 200,
  colorPlanes: 33,
  depth: 60,
  horizontalResolution: 30,
  verticalResolution: 70,
  numColors: 256,
  importantColors: 33,
}

describe('testing Bitmap constructor', function(){
  before(() => {
    // mock a buffer to work with the bitmap
    let buffer = this.tempBuffer = Buffer.alloc(74); // makes the pixelBuffer length 10
    buffer.write(mockData.type);
    buffer.writeUInt32LE(mockData.size, 2);
    buffer.writeUInt32LE(mockData.pixelArrayOffset, 10);
    buffer.writeUInt32LE(mockData.width, 18);
    buffer.writeUInt32LE(mockData.height, 22);
    buffer.writeUInt16LE(mockData.colorPlanes, 26);
    buffer.writeUInt16LE(mockData.depth, 28);
    buffer.writeUInt32LE(mockData.horizontalResolution, 38);
    buffer.writeUInt32LE(mockData.verticalResolution, 42);
    buffer.writeUInt32LE(mockData.numColors, 46);
    buffer.writeUInt32LE(mockData.importantColors, 50);
  })

  it('should correctly parse the buffer', () => {
    let bitmap = new Bitmap(this.tempBuffer);

    for(let key in mockData){
      expect(bitmap[key]).to.equal(mockData[key]);
    }

    expect(bitmap.colorPalletBuffer.length).to.equal(10);
    expect(bitmap.pixelBuffer.length).to.equal(10);
  });
});
