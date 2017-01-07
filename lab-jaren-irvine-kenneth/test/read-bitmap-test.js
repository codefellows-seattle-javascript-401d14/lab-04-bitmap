'use strict';

const expect = require('chai').expect;
const readBitmap = require('../lib/read-bitmap.js');


//Test checking constructor and read modules
describe('testing constructor module', function() {
  describe('testing with valid input', function() {
    let id = 'BM';
    let fileName = `${__dirname}/../../assets/bitmap.bmp`;
    it('should return id', function(done){
      readBitmap(fileName, function(err, data){
        if (err) done(err);
        expect(id).to.equal(data.id);
        done();
      });
    });
  });

  describe('testing with invalid input', function() {
    it('should return an error', function(done) {
      readBitmap(42, function(err, data){
        expect(!!err).to.equal(true);
        console.log(data);
        done();
      });
    });
  });
});
