var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var file = process.argv[3];

http.createServer(function callback(request, response) {
  response.writeHead(200, {'content-type' : 'text/plain'})
  fs.createReadStream(file).pipe(response);
}).listen(port);
