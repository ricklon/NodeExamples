var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  echovalue = JSON.stringify(req.method) + " : " + JSON.stringify(url.parse(req.url)) + "\n";
  res.writeHead(200, {'Content-Type': 'text/plain',
  'Access-Control-Allow-Origin': '*'});
  res.end(echovalue);
}).listen(process.env.C9_PORT, "0.0.0.0");
console.log('Server running on port: ' + process.env.C9_PORT);
