'use strict';

// const fs = require('fs');
const expect = require('chai').expect;

describe('grabBit', function(){
  it('it should exist', function(){
    let grabBit = require('../index.js');
    expect(grabBit).to.not.be.undefined;
  });
});
