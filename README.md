[![Stories in Ready](https://badge.waffle.io/dvicklund/http-framework.png?label=ready&title=Ready)](https://waffle.io/dvicklund/http-framework)
# HTTP-Framework



## Functions:

   + Url Request/Response Logger

        Logger.logReq(req);

        Logger.logRes(res);

        Logger.clearResLogs();

        Logger.clearReqLogs();

        Logger.makeReqLog(req);

        Logger.makeResLog(res);

        Logger.writeFile(logFolder, data);


   + Redirect Support

        Router.setRoute(method, route, handler);

        Router.setRedirect(url, redirect, type);

        Router.getRoute(req, res);

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
