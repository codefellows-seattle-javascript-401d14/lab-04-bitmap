'use strict';

// const fs = require('fs');
const expect = require('chai').expect;

describe('should show house.bmp', function(){
  it('should exist', function(err,data){
    if (err) console.error(err);
    let grabBit = require('./assets/house.bmp');
    expect(grabBit).to.not.be.undefined;
    console.log(data);
  });
});
