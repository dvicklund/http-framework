var expect = require('chai').expect;
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
      console.log('Request handled');
    };
    this.redirect = 'newurl';
    this.redirectHandler = function(req, res) {
      console.log('Redirect handled');
    };
  });

  it('should create a standard GET route', function() {
    this.req.method = 'GET';
    var testRoute = this.router.routes[this.req.url];
    // set the route object
    this.router.setRoute(this.req.method, this.req.url, this.handler);

    expect(testRoute).to.eql(this.handler);
    expect(this.router.getRoute(this.req, this.res)).to.eql('Request handled');
  }.bind(this));

  it('should create a redirection', function() {
    this.req.method = 'GET';
    var testRoute = this.router.routes[this.req.url];
    // set the route object
    this.router.setRoute(this.req.method, this.req.url, this.handler);
    this.router.setRedirection(this.req.url, this.redirect, 301);

    expect(this.router.getRedirect[this.req.url].redirect).to.eql(this.redirect);
    expect(this.router.getRedirect[this.req.url].status).to.eql(301);
  }.bind(this));

  it('should return a redirection', function() {
    this.req.method = 'GET';
    var testRoute = this.router.routes[this.req.url];

    expect(this.router.getRoute(this.req, this.res)).to.eql('Redirect handled');
    expect(testRoute(this.req, this.res)).to.eql('newurl');
  }.bind(this));
});
