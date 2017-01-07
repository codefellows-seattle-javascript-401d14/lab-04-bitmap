'use strict';

const expect = require('chai').expect;
const writeBitmap = require('../lib/write-bitmap.js');
const readBitmap = require('../lib/read-bitmap.js');
const transformer = require('../lib/transforms.js');

describe('testing transform bitmap module', function() {
  let outputFileName = `${__dirname}/../outputs/bitmap-test-out.bmp`;
  let inputFileName = `${__dirname}/../../assets/bitmap.bmp`;
  describe('testing with valid input', () => {
    before((done) => {
      readBitmap(inputFileName, (err, bitmap) => {
        if (err) done(err);
        this.bitmap = bitmap;
        done();
      });
    });

    after((done) => {
      writeBitmap(outputFileName, this.bitmap, (err, data) => {
        if (err) done(err);
        this.data = data;
        done();
      });
    });

    it('should transform file into a new bitmap', (done) => {
      transformer.randomColors(this.bitmap);
      done();
    });
  });
  describe('testing with invalid input', () => {
    before((done) => {
      readBitmap(inputFileName, (err, bitmap) => {
        if (err) done(err);
        this.bitmap = bitmap;
        done();
      });
    });
    after((done) => {
      writeBitmap(outputFileName, this.bitmap, (err, data) => {
        if (err) done(err);
        this.data = data;
        done();
      });
    });
    it('should return an error', (done) => {
      transformer.randomColors(42, () => {
        expect(this.bitmap).to.equal(this.data);
        
        done();
      });
    });
  });
});
