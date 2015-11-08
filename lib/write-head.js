/* usage: Ex. resWriteHead(status code, MIME type/internet media type);
   No need to put quotations around the second parameter */

module.exports = exports = function resWriteHead(status, contentType) {
    response.writeHead(status, {
    'Content-Type': contentType.toString()
    });
};
