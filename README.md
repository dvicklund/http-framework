[![Build Status](https://travis-ci.org/dvicklund/http-framework.svg?branch=master)](https://travis-ci.org/dvicklund/http-framework)
[![Stories in Ready](https://badge.waffle.io/dvicklund/http-framework.png?label=ready&title=Ready)](https://waffle.io/dvicklund/http-framework)
# HTTP-Framework

## Installation:

`npm install router-sprouter`

Then, require the package into your project.

```
var router = require ('router-sprouter');
```
To use the Logger and resWriteHead modules, do the following:

```
var logger = require('router-sprouter').logger;
var resWriteHead = require('router-sprouter').resWriteHead;
```

## Usage:

To properly use the router, first create a separate file(s) with your request/response handler functions. For example:

```
function upload() {
    /* put handler functionality here */
}
```

Then, register your handlers with the router via the Router.setRoute() method.

## Redirection:

The router allows you to register redirections for any incoming urls with the setRedirect() method. You can also set a redirection status of either 301 or 302. When the router detects that an incoming request is pointed at a redirected url, it will automatically re-point the url to the correct request handler.

Be sure to have set up a route handler (via setRoutes()) for your redirection url, otherwise setting a redirect will result in a 404 error.

You can check if a url has a registered redirect with the getRedirect() method.

## Response writeHead:

Instead of writing out response.WriteHead like so,

```
myRouter.get('/awesome', function(req, res){
**res.writeHead(200, { 'Content-Type': 'text/plain'});**
  res.write('wow, so awesome, such router');
  res.end();
});
```
simply include in the resWriteHead function.
```
myRouter.get('/awesome', function(req, res){
**resWriteHead(200, 'text/plain');**
  res.write('wow, so awesome, such router');
  res.end();
});
```

## Logging:

Router Sprouter contains a couple helpful methods to auto-generate logs with each request and response.  The logs generated will be stored (somewhat inconveniently) in your node_modules/router-sprouter/lib/log/ folder.  (Future versions will allow for custom log folder configuration)  You must implicitly call logger.logReq(req) at the point at which you want to log the request/response.  For example, to log the req and res from the above function, insert the following two lines of code:

```
myRouter.get('/awesome', function(req, res){
**logger.logReq(req);**
  resWriteHead(200, 'text/plain');
  res.write('wow, so awesome, such router');
  res.end();
**logger.logRes(res);**
});
```

It can also clear each log folder upon the following function call:

```
// Clear request logs folder
logger.clearReqLogs();

// Clear response logs folder
logger.clearResLogs();
```

## Functions:

   + Basic Router

        Router.setRoute(method, route, handler);

        Router.getRoute(req, res);

   + Url Request/Response Logger

        Logger.logReq(req);

        Logger.logRes(res);

        Logger.clearResLogs();

        Logger.clearReqLogs();


   + Redirect Support

        Router.setRedirect(url, redirect, type);

        Router.getRedirect(url);


   + Response writeHead encapsulation

        resWriteHead(status code, 'MIME-type');


## License: MIT

Copyright (c) <2015> <David Vicklund, Ryan Heathers, Jack Sneed>



Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:



The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.



THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
