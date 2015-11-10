var expect = require('chai').expect;
var logger = require(__dirname + '/../lib/logger');
var Router = require(__dirname + '/../lib/router');
var http = require('http');

describe('router functionality', function() {
  beforeEach(function() {
    this.router = new Router();
    this.req = {
      method: '',
      url: 'testurl',
      headers: {
        "user-agent": "curl/7.35.0",
        "host": "localhost:3000",
        'accept': "*/*"
      }
    };
    this.res = {
      test: 'sometest'
    };
    this.redirect = 'newurl';
    this.cbFlag = false;
    this.handler = function(req, res){
      this.cbFlag = true;
      console.log('Route handled');
    }.bind(this);
    this.redirectHandler = function(req, res) {
      this.cbFlag = true;
      console.log('Redirect handled');
    }.bind(this);
  });

  it('should create a standard GET route', function() {
    this.req.method = 'GET';
    // set the route object and invoke getRoute
    this.router.setRoute(this.req.method, this.req.url, this.handler);
    this.router.getRoute(this.req, this.res);
    var testHandler = this.router.routes[this.req.method][this.req.url];

    expect(testHandler).to.eql(this.handler);
    expect(this.cbFlag).to.eql(true);
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
    this.router.setRoute(this.req.method, this.redirect, this.redirectHandler);
    this.router.getRoute(this.req, this.res);

    expect(this.cbFlag).to.eql(true);
  });
});
