'use strict';

const expect = require('chai').expect;
const readBitmap = require('../lib/read-bitmap.js');
const transformer = require('../lib/transforms.js');

describe('testing greyscale transform', function() {
  let inputFileName = `${__dirname}/../../assets/bitmap.bmp`;
  describe('testing with valid input', () => {
    var beforeColors = [];
    var afterColors = [];
    before((done) => {
      readBitmap(inputFileName, (err, bitmap) => {
        if (err) done(err);
        this.bitmap = bitmap;
        beforeColors[0] = bitmap.colorArray[4];
        beforeColors[1] = bitmap.colorArray[5];
        beforeColors[2] = bitmap.colorArray[6];
        done();
      });
    });
    it('should assign the rgb average to red green and blue', () => {
      transformer.greyScale(this.bitmap);
      afterColors[0] = this.bitmap.colorArray[4];
      afterColors[1] = this.bitmap.colorArray[5];
      afterColors[2] = this.bitmap.colorArray[6];
      expect(Math.floor((beforeColors[0]+beforeColors[1]+beforeColors[2])/3)).to.equal(afterColors[0]);
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
      expect(transformer.greyScale).to.throw(Error);
    });
  });
});
