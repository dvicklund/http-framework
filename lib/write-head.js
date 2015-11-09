// usage: Ex. resWriteHead(status code, 'MIME type/internet media type');

module.exports = exports = function resWriteHead(status, contentType) {
    res.writeHead(status, {
    'Content-Type': contentType
    });
};
