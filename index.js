var http = require('http');
var Router = require(__dirname + '/lib/router');
// var logger = require(__dirname + '/lib/logger');
var router = new Router();

http.createServer(function(req, res) {
  router.route(req, res);
}).listen(3000, function() {
  console.log('server up');
});