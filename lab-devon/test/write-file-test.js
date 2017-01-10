'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const writeFile = require('../lib/write-file.js');
const readFile = require('../lib/read-file.js');
const Bitmap = require('../model/bitmap-constructor.js');

describe('testing write file module', function(){
  let inputFile = `${__dirname}/../../assets/house.bmp`;
  let outputFile = `${__dirname}/../assets/write-test.bmp`;
  describe('testing with valid file', function(){
    before('writing to file', function(done) {
      readFile(inputFile, function(err, bitmapObj){
        if(err) done(err);
        this.bitmapObj = bitmapObj;
        done();
      });
    });
    it('should push to output assets folder', function(done){
      writeFile(outputFile, this.data, function(err,data){
        if(err) done(err);
        expect(this.data).to.equal(data);
        done();
      });
    });
  });

  describe('testing with invalid file', function(){
    before('writing to file',function(done){
      readFile(inputFile, function(err, bitmap){
        if(err) done(err);
        this.bitmap = bitmap;
        done();
      });
    });
    it('should return usage error', function(done){
      writeFile(66, this.bitmap, function(err,data){
        expect(!!err).to.equal(true);
        console.log(data);
        done();
      });
    });
  });
});
