'use strict';

const expect = require('chai').expect;
const writeBitmap = require('../lib/write-bitmap.js');
const readBitmap = require('../lib/read-bitmap.js');
const transformer = require('../lib/transforms.js');

describe('testing greyscale transform', function() {
  let outputFileName = `${__dirname}/../outputs/greyscale-test.bmp`;
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
      writeBitmap(outputFileName, this.bitmap, (err) => {
        if (err) done(err);
        done();
      });
    });
    it ('should have the colorArray property', () => {
      expect(this.bitmap).to.have.ownProperty('colorArray');
    });
    it('should transform file into a new bitmap by randomizing the colorArray', () => {
//==>>  .change asserts that a function changes the object property
//==>>  Although the colorArray does change, this test doesn't think so. WHYYY?
      expect(transformer.greyScale.bind(transformer.greyScale, this.bitmap)).to.change(this.bitmap, 'colorArray');
      /* ^^ expect wants a function, not the result of invoking it, so calling
        bind on itself with this.bitmap as its param should work? */
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
    it('should throw an error', () => {
      expect(transformer.greyScale).to.throw('expected a bitmap buffer');
    });
  });
});
