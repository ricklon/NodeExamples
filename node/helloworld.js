var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*'});
  res.end('Hello World\n');
}).listen(process.env.C9_PORT, "0.0.0.0");
console.log('Server running on port' + process.env.C9_PORT);
