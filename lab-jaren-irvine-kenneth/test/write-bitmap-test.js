'use strict';

const expect = require('chai').expect;
const writeBitmap = require('../lib/write-bitmap.js');
const readBitmap = require('../lib/read-bitmap.js');

describe('testing write bitmap module', function() {
  describe('testing with valid input', function() {
    let outputFileName = `${__dirname}/../outputs/bitmap-test-out.bmp`;
    let inputFileName = `${__dirname}/../../assets/bitmap.bmp`;
    before(function(done){
      readBitmap(inputFileName, function(err, bitmap){
        if (err) done(err);
        

      });
    });
  });
});

// writeBitmap(inputFileName, data, function(){
