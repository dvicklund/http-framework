// usage: Ex. resWriteHead(status code, 'text/"type"')

module.exports = exports = function resWriteHead(status, contentType) {
    response.writeHead(status, {
    'Content-Type': contentType
    });
  };
