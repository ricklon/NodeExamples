var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
var  echovalue = JSON.stringify(req.method) + " : " + JSON.stringify(url.parse(req.url)) + "\n";
  res.writeHead(200, {'Content-Type': 'text/plain',
  'Access-Control-Allow-Origin': '*'});
  res.end(echovalue);
}).listen(process.env.PORT, process.env.IP);
console.log('Server running on port: ' + process.env.PORT);
