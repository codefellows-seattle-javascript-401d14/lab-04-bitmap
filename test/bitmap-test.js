'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const Bitmap = require('../model/bitmap');

describe('testing bitmap module', function(){
  describe('testing constructor with data/test.bmp', function(){
    before((done) => {
      fs.readFile(__dirname + '/data/test.bmp', (error, data) => {
        if (error) throw error;
        this.bitmap = new Bitmap('test.bmp', data);
        done();
      });
    });
    it('name should equal  "test.bmp"', () => {
      expect(this.bitmap.name).to.equal('test.bmp');
    });
  });
});
