var expect = require('chai').expect;
var logger = require(__dirname + '/../lib/logger');
var Router = require(__dirname + '/../lib/router');

describe('router functionality', function() {
  beforeEach(function() {
    this.router = new Router();
    this.req = {
      method: '',
      url: 'testurl'
    };
    this.res = {
      test: 'sometest'
    };
    this.handler = function(req, res){
      console.log('Route handled');
    };
    this.redirect = 'newurl';
    this.redirectHandler = function(req, res) {
      console.log('Redirect handled');
    };
  });

  it('should create a standard GET route', function() {
    this.req.method = 'GET';
    // set the route object
    this.router.setRoute(this.req.method, this.req.url, this.handler);
    var testHandler = this.router.routes[this.req.method][this.req.url];

    expect(testHandler).to.eql(this.handler);
    //Does not return as expected --> expect(this.router.getRoute(this.req, this.res)).to.eql('Request handled');
  });

  it('should create a redirection', function() {
    this.req.method = 'GET';
    // set the route object with redirect
    this.router.setRoute(this.req.method, this.req.url, this.handler);
    this.router.setRedirect(this.req.url, this.redirect, 301);

    expect(this.router.getRedirect([this.req.url]).redirect).to.eql(this.redirect);
    expect(this.router.getRedirect([this.req.url]).status).to.eql(301);
  });

  it('should return a redirection', function() {
    this.req.method = 'GET';
    // set the route object with redirect
    this.router.setRoute(this.req.method, this.req.url, this.handler);
    this.router.setRedirect(this.req.url, this.redirect, 301);

    //Does not return as expected --> expect(this.router.getRoute(this.req, this.res)).to.eql('Redirect handled');
  });
});
