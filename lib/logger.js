var fs = require('fs');
var Logger = module.exports = exports = {

  logReq: function(req) {
    var logFolder = __dirname + '/log/requests/';
    writeFile(logFolder, makeReqLog(req));
  },

  logRes: function(res) {
    var logFolder = __dirname + '/log/responses/';
    writeFile(logFolder, makeResLog(res));
  },

  // Borrows heavily from Guy Bedford's post at https://gist.github.com/liangzan/807712
  clearResLogs: function() {
    var dirPath = __dirname + '/log/responses/';
    var fileList = fs.readdir(dirPath, function(err, files) {
      if(err) return console.log(err);
      if(files.length > 0) {
        files.forEach(function(curr, i, array) {
          var currPath = dirPath + '/' + curr;
          if(fs.statSync(currPath).isFile()) fs.unlinkSync(currPath);
        });
      }
    });
  },

  // Same as above, except for request folder
  clearReqLogs: function() {
    var dirPath = __dirname + '/log/requests/';
    var fileList = fs.readdir(dirPath, function(err, files) {
      if(err) return console.log(err);
      if(files.length > 0) {
        files.forEach(function(curr, i, array) {
          var currPath = dirPath + '/' + curr;
          if(fs.statSync(currPath).isFile()) fs.unlinkSync(currPath);
        });
      }
    });
  }
};

function makeReqLog(req) {
  var logString = "";

  logString += "URL: " + req.url + "\n";
  logString += "Method: " + req.method + "\n";
  logString += "Headers: " + "\n";
  logString += "User Agent: " + req.headers["user-agent"] + "\n";
  logString += "Host: " + req.headers.host + "\n";
  logString += "Accept: " + req.headers.accept + "\n";

  return logString;
}

function makeResLog(res) {
  var logString = "";
  
  logString += "Header: " + res._header;
  logString += "Status Code: " + res.statusCode + "\n";
  logString += "Status Message: " + res.statusMessage + "\n";

  return logString;
}

function writeFile(logFolder, data) {
  var date = new Date();
  var dateString = date.toTimeString() + ":" + date.getMilliseconds();
  fs.access(logFolder, fs.F_OK, function(err) {
    if(err) {
      fs.mkdirSync(logFolder);
      fs.writeFile(logFolder + dateString + '.log', data, function(err) {
        err ? console.log("Error - can't write file!") : console.log('Response log saved!');
      });
    } else { 
      fs.writeFile(logFolder + dateString + '.log', data, function(err) {
        err ? console.log("Error - can't write file!") : console.log('Response log saved!');
      });
    }
  });
}