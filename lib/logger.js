var fs = require('fs');
var Logger = module.exports = exports = {
  logReq: function(req) {
    var logFolder = __dirname + '/log/requests/';
    fs.access(logFolder, fs.F_OK, function(err) {
      if(err) {
        fs.mkdirSync(logFolder);
        fs.writeFile(logFolder + Date.now() + '.log', req, function(err) {
          err ? console.log("Error - can't write file!") : console.log('Log saved!');
        })
      } else { 
        fs.writeFile(logFolder + Date.now() + '.log', req, function(err) {
          err ? console.log("Error - can't write file!") : console.log('Log saved!');
        });
      }
    });
  },

  logRes: function(res) {
    var logFolder = __dirname + '/log/responses/';
    fs.access(logFolder, fs.F_OK, function(err) {
      if(err) {
        fs.mkdirSync(logFolder);
        fs.writeFile(logFolder + Date.now() + '.log', res, function(err) {
          err ? console.log("Error - can't write file!") : console.log('Log saved!');
        })
      } else { 
        fs.writeFile(logFolder + Date.now() + '.log', res, function(err) {
          err ? console.log("Error - can't write file!") : console.log('Log saved!');
        });
      }
    });
  },
}
