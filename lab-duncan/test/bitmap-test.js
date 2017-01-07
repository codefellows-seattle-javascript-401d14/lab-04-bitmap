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

function createMockBitmapBuffer(){
  let buffer = Buffer.alloc(74); // makes the pixelBuffer length 10
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
  return buffer;
}

function createMockBitmap(){
  // by default all colorPalletBuffer and pixelBuffer will be all 0's
  return new Bitmap(createMockBitmapBuffer());
}

describe('testing bitmap.js', function(){
  describe('testing constructor', () => {
    before(() => {
      this.tempBuffer = createMockBitmapBuffer();
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

  describe('testing bandw method', function(done){
    it('should average all the colors', () => {
      let bitmap = createMockBitmap();
      // make a normal color pallet length
      bitmap.colorPalletBuffer = Buffer.alloc(256 * 4);
      // fill each coloer with 2, 3 , 4, 0
      bitmap.colorPalletBuffer.fill(Buffer.from([2,3,4,0]));
      bitmap.bandw()
      for(let i=0; i<bitmap.colorPalletBuffer.length; i++){
        if(i % 4 == 3) continue; // skip the useless bit
        expect(bitmap.colorPalletBuffer[i]).to.equal(3);
      }
    });
  });

  describe('testing invert method', function(done){
    it('should average all the colors', () => {
      let bitmap = createMockBitmap();
      // make a normal color pallet length
      bitmap.colorPalletBuffer = Buffer.alloc(256 * 4);
      // fill each coloer with 0000
      bitmap.colorPalletBuffer.fill(100);
      bitmap.invert()
      for(let i=0; i<bitmap.colorPalletBuffer.length; i++){
        if(i % 4 == 3) continue; // skip the useless bit
        expect(bitmap.colorPalletBuffer[i]).to.equal(255 - 100);
      }
    });
  });

  describe('testing lighten method', function(done){
    it('lighten all the colors', () => {
      let bitmap = createMockBitmap();
      // make a normal color pallet length
      bitmap.colorPalletBuffer = Buffer.alloc(256 * 4);
      // fill each coloer with 10,10,10,10
      bitmap.colorPalletBuffer.fill(10);
      bitmap.lighten()
      for(let i=0; i<bitmap.colorPalletBuffer.length; i++){
        if(i % 4 == 3) continue; // skip the useless bit
        expect(bitmap.colorPalletBuffer[i]).to.equal(20);
      }

      bitmap.lighten(20)
      for(let i=0; i<bitmap.colorPalletBuffer.length; i++){
        if(i % 4 == 3) continue; // skip the useless bit
        expect(bitmap.colorPalletBuffer[i]).to.equal(40);
      }

      bitmap.lighten('not allowed')
      .catch(err => {
        expect(err.constructor).to.equal(Error);
      })
    });
  });

  describe('testing darken method', function(done){
    it('darken all the colors', () => {
      let bitmap = createMockBitmap();
      // make a normal color pallet length
      bitmap.colorPalletBuffer = Buffer.alloc(256 * 4);
      // fill each coloer with 100,100,100,100
      bitmap.colorPalletBuffer.fill(100);
      bitmap.darken()
      for(let i=0; i<bitmap.colorPalletBuffer.length; i++){
        if(i % 4 == 3) continue; // skip the useless bit
        expect(bitmap.colorPalletBuffer[i]).to.equal(90);
      }

      bitmap.darken(20)
      for(let i=0; i<bitmap.colorPalletBuffer.length; i++){
        if(i % 4 == 3) continue; // skip the useless bit
        expect(bitmap.colorPalletBuffer[i]).to.equal(70);
      }

      bitmap.darken('not allowed')
      .catch(err => {
        expect(err.constructor).to.equal(Error);
      })
    });
  });
});
