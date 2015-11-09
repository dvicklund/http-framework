var logger = require('./logger');

var Router = module.exports = exports = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {}
  };
};

Router.prototype.get = function(route, redirect, handler) {
  var method = 'GET';
  setRoute(method, route, redirect, handler);
};

Router.prototype.post = function(route, redirect, handler) {
  var method = 'POST';
  setRoute(method, route, redirect, handler);
};

Router.prototype.put = function(route, redirect, handler) {
  var method = 'PUT';
  setRoute(method, route, redirect, handler);
};

Router.prototype.patch = function(route, redirect, handler) {
  var method = 'PATCH';
  setRoute(method, route, redirect, handler)
};

Router.prototype.delete = function(route, redirect, handler) {
  var method = 'DELETE';
  setRoute(method, route, redirect, handler);
};

Router.prototype.fourOhFour = function(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain'
  });
  res.write('not found');
  res.end();
};

Router.prototype.setRoute = function(method, route, handler, redirectURL) {
  return this.routes[method][route] = {
    handler: handler,
    redirect: redirectURL ? true : false,
    redirectURL: redirect
  }
}

Router.prototype.getRoute = function(req, res) {
  logger.logReq(req);
  var route = this.routes[req.method][req.url];
  if (route && route[redirect]) {
    // if redirect, set new req.url and call getRoute recursively
    req.url = route[redirectURL];
    res.status = 301;
    getRoute(req, res)
  }
  else if (route) {
    route[handler](req, res);
  }
  else {
    this.fourOhFour(req, res);
  }
  res.end();
};
