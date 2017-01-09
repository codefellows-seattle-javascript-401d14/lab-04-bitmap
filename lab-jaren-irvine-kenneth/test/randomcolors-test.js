'use strict';

const expect = require('chai').expect;
const readBitmap = require('../lib/read-bitmap.js');
const transformer = require('../lib/transforms.js');

describe('testing randomcolors transform', function() {
  let inputFileName = `${__dirname}/../../assets/bitmap.bmp`;
  describe('testing with valid input', () => {
    var beforeColors = [];
    var afterColors = [];
    before((done) => {
      readBitmap(inputFileName, (err, bitmap) => {
        if (err) done(err);
        this.bitmap = bitmap;
        beforeColors[0] = bitmap.colorArray[0];
        beforeColors[1] = bitmap.colorArray[1];
        beforeColors[2] = bitmap.colorArray[2];
        done();
      });
    });
    it('should randomize the first three rgb values in colorArray', () => {
      transformer.randomColors(this.bitmap);
      afterColors[0] = this.bitmap.colorArray[0];
      afterColors[1] = this.bitmap.colorArray[1];
      afterColors[2] = this.bitmap.colorArray[2];
      // .eql means deeply equal
      expect(afterColors).to.not.eql(beforeColors);
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
      expect(transformer.randomColors).to.throw('expected a bitmap buffer');
    });
  });
});
