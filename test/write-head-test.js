var mocha = require('mocha');
var chai = require('chai');
var expect = require('chai').expect;
// This file path will be changed to file of implementation.
var resWriteHead = require(__dirname + '/../lib/write-head.js');

describe('the resWriteHead function', function(){
  it('should return resWriteHead("MIME type"/"internet media type")', function() {
    expect(resWriteHead(200, 'text/html')).to.be.true;
  });
});
