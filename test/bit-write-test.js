'use strict';

const expect = require('chai').expect;
const bitWrite = require('../lib/bitmap-writer.js');
const bitRead = require('../lib/bitmapreader.js');

describe('testing write bitmap module', function() {
  let outputFileName = `${__dirname}/../ouputs/bit-write-test.bmp`;
  let inputFileName = `${__dirname}/../../assets/house.bmp`;
  describe('testing with valid input', () => {
    before((done) => {
      bitRead(inputFileName, (err, bitmap) => {
        if (err) done(err);
        this.bitmap = bitmap;
        done();
      });
    });
    it('should push file to outputs', (done) => {
      bitWrite(outputFileName, this.bitmap, (err, data) => {
        if (err) done(err);
        expect(this.bitmap).to.equal(data);
        done();
      });
    });
  });

  describe('testing with invalid input', () => {
    before((done) => {
      bitRead(inputFileName, (err, bitmap) => {
        if (err) done(err);
        this.bitmap = bitmap;
        done();
      });
    });
    it('should return an error', (done) => {
      bitWrite(42, this.bitmap, (err, data) => {
        expect(!!err).to.equal(true);
        console.log(data);
        done();
      });
    });
  });
});
