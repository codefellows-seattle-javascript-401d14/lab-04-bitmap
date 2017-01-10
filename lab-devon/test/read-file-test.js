'use strict';

const expect = require('chai').expect;
const readFile = require('../lib/read-file.js');

describe('Testing the read file module', function(){

  describe('Testing if passing in an existing file', function() {
    let testData = {
      id:'BM',
      filesize: 66616,
      width:256,
      height:256,
    };
    let fileName = `${__dirname}/../assets/output.bmp`;
    it('should return test data', function(done){
      readFile(fileName, function(err,data){
        if(err) done(err);
        for (var key in testData){
          expect(testData[key]).to.equal(data[key]);
        }
        done();
      });
    });
  });

  describe('Testing if passing invalid file', function() {
    it('should return error', function(done){
      readFile(66, function(err,data){
        expect(!!err).to.equal(true);
        console.log(data);
        done();
      });
    });
  });
});
