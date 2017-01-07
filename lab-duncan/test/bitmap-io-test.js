'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const bitmapIO = require('../lib/bitmap-io.js');
const Bitmap = require('../model/bitmap.js');

describe('testing module bitmap-io.js', function(){
  describe('testing method readBitmap', function(){
    it('should return a bitmap', function(done){
      bitmapIO.readBitmap('../assets/bitmap.bmp')
      .then(bitmap => {
        expect(bitmap.constructor).to.equal(Bitmap);
        done();
      })
      .catch(done);
    });

    it('should resolve an error', function(done){
      bitmapIO.readBitmap('./bad/path.bmp')
      .then(done)
      .catch(err => done())
    });
  });

  describe('testing method writeBitmap', function(){
    after((done) => {
      fs.unlink('./output.bmp', done);
    });

    it('should create a file', function(done){
      let bitmap = new Bitmap(Buffer.alloc(1000));
      bitmapIO.writeBitmap('./output.bmp', bitmap)
      .then(() => done())
      .catch(done);
    });

    it('should fail file', function(done){
      bitmapIO.writeBitmap('./output.bmp')
      .then(done)
      .catch(() => done())
    });
  });
});
