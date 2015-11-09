//  to parse URLs for incoming requests. So you can declare a pattern vs an absolute url.
var http = require('http');
var fs = require('fs');

module.exports = exports = function processString() {

  var urlPath = request.url.split('//');
  var https = /^https?:/i;
  var http = /^http?:/i;

  if (http.test(urlPath[0]) || https.test(urlPath[0])) {

    console.log('This path is absolute.');


  } else {

    console.log('This path is relative.');

}
