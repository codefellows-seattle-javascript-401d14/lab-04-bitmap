'use strict';

const expect = require('chai').expect;
const readBitmap = require('../lib/read-bitmap.js');


//Test checking constructor and read modules
describe('testing read bitmap module integrating bitmap constructor', function() {
  describe('testing with valid input', function() {
    let id = 'BM';
    let mockData = {
      id: 'BM',
      size: 11078,
      width: 100,
      height: 100,
    };
    let fileName = `${__dirname}/../../assets/bitmap.bmp`;
    it('should return id', function(done){
      readBitmap(fileName, function(err, data){
        if (err) done(err);
        expect(id).to.equal(data.id);
        for (var key in mockData){
          expect(mockData[key]).to.equal(data[key]);
        }
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
