'use strict';
const expect = require('chai').expect;
const fs = require('fs');
const Bitmap = require('../model/bitmap-constructor.js');
// const readFile = require('../lib/read-file.js');

describe('Testing the constructor', function(){
  before('Instansiate Object', function(){
    this.bitmapObj = new Bitmap(fs.readFileSync('../assets/house.bmp'));
  });
  it('should create an obj given a file', function(){
    expect(this.bitmapObj).to.be.an('object');
  });
});
