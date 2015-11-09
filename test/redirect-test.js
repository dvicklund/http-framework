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
    this.handler = function(){};
  });

  it('should create a GET route', function() {
    debugger;
    this.req.method = 'GET';
    testRoute = this.router.routes[this.req.url];
    // set the route object
    this.router.setRoute(this.req.method, this.req.url, this.handler);

    expect(testRoute[handler]).to.eql(this.handler);
  }.bind(this));
});
