var logger = require('./logger');

var Router = module.exports = exports = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {}
  };
  this.redirects = {};
};

Router.prototype.get = function(route, handler) {
  var method = 'GET';
  setRoute(method, route, handler);

Router.prototype.post = function(route, handler) {
  var method = 'POST';
  setRoute(method, route, handler);
};

Router.prototype.put = function(route, handler) {
  var method = 'PUT';
  setRoute(method, route, handler);
};

Router.prototype.patch = function(route, handler) {
  var method = 'PATCH';
  setRoute(method, route, handler);
};

Router.prototype.delete = function(route, handler) {
  var method = 'DELETE';
  setRoute(method, route, handler);
};

Router.prototype.fourOhFour = function(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain'
  });
  res.write('not found');
  res.end();
};

Router.prototype.setRoute = function(method, route, handler) {
  this.routes[method][route] = handler;
}

Router.prototype.setRedirect = function(url, redirect, type) {
  this.redirects[url] = {
    status: type,
    redirect: redirect
  };
}

Router.prototype.getRoute = function(req, res) {
  logger.logReq(req);
  var route = this.routes[req.method][req.url];

  if (this.redirects[route]) {
    // if redirect, set new req.url and call getRoute recursively
    req.url = this.redirects[route][redirect];
    res.status = this.redirects[route][status];
    getRoute(req, res)
  }
  else if (route) {
    route(req, res);
  }
  else {
    this.fourOhFour(req, res);
  }

  res.end();
};

Router.prototype.getRedirect = function(url) {
  return this.redirects[url];
}
