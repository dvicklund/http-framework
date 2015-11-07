// usage: Ex. resWriteHead(status code, text/"insert type")

module.exports = exports = function resWriteHead(status, contentType) {
    response.writeHead(status, {
    'Content-Type': contentType.toString()
    });
};
