var logger = require('./logger');
var writeResHead = require("./write-head");

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
};

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
};

Router.prototype.setRedirect = function(url, redirect, type) {
  this.redirects[url] = {
    status: type,
    redirect: redirect
  };
};

Router.prototype.getRoute = function(req, res) {
  logger.clearResLogs();
  logger.clearReqLogs();
  logger.logReq(req);
  var route = req.url;
  var handler = this.routes[req.method][req.url];

  if (this.redirects[route]) {
    // if redirect, set new req.url and call getRoute recursively
    req.url = this.redirects[route].redirect;
    res.status = this.redirects[route].status;
    this.getRoute(req, res);
  }
  else if (handler) {
    handler(req, res);
  }
  else {
    this.fourOhFour(req, res);
  }

  logger.logRes(res);
};

Router.prototype.getRedirect = function(url) {
  return this.redirects[url];
};

Router.prototype.writeResHead = writeResHead;