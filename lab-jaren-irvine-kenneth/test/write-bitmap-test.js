'use strict';

const expect = require('chai').expect;
const writeBitmap = require('../lib/write-bitmap.js');
const readBitmap = require('../lib/read-bitmap.js');

describe('testing write bitmap module', function() {
  let outputFileName = `${__dirname}/../outputs/write-bitmap-test.bmp`;
  let inputFileName = `${__dirname}/../../assets/bitmap.bmp`;
  describe('testing with valid input', () => {
    before((done) => {
      readBitmap(inputFileName, (err, bitmap) => {
        if (err) done(err);
        this.bitmap = bitmap;
        done();
      });
    });
    it('should write a write-bitmap-test.bmp file to outputs', (done) => {
      writeBitmap(outputFileName, this.bitmap, (err, data) => {
        if (err) done(err);
        expect(this.bitmap).to.equal(data);
        done();
      });
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
    it('should return an error', (done) => {
      writeBitmap(42, this.bitmap, (err, data) => {
        expect(!!err).to.equal(true);
        console.log(data);
        done();
      });
    });
  });
});
