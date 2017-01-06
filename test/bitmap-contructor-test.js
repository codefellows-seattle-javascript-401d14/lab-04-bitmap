'use strict';

const fs = require('fs');
const expect = require('chai').expect;
const Bitmap = require('../model/bitmap-constructor');

describe('testing bitmap module', function(){
  describe('testing constructor with outputfiles/output.bmp', function(){
    fs.readFile('../outputfiles/output.bmp', (error, data) => {
      if (error) throw error;
      console.log(data);
    });
    it('name should equal  "output.bmp"', () => {
      expect(this.buf).to.equal('output.bmp');
    });
  });
});
