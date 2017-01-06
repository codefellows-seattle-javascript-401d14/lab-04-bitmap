'use strict';

const expect = require('chai').expect;
const readBitmap = require('../lib/read-bitmap.js');

describe('testing read-bitmap module', function() {
  let id = 726027586;
  let fileName = `${__dirname}/../assets/bitmap.bmp`;
  it('should return buffer data', function(done){
    readBitmap(fileName, function(err, data){
      if (err) done(err);
      expect().to.equal();
      done();
    });
  });
});
