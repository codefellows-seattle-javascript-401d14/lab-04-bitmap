'use strict';

// const fs = require('fs');
const expect = require('chai').expect;
var

describe('should show house.bmp', function(){
  it('should exist', function(){
    let grabBit = require('./assets/house.bmp');
    expect(grabBit).to.not.be.undefined;
  });
});
