var http = require('http');
var PORT = process.env.PORT || 3000;

http.createServer(function (req, res) {
  res.end('Hello World');
}).listen(PORT);