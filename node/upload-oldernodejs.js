var http = require('http');
var multipart = require('multipart');
var util = require('util');

var server = http.createServer(function(req, res) {
  switch (req.url) {
    case '/':
      display_form(req, res);
      break;
    case '/upload':
      upload_file(req, res);
      break;
    default:
      show_404(req, res);
      break;
  }
});
server.listen(process.env.PORT);

function display_form(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.end(
    '<form action="/upload" method="post" enctype="multipart/form-data">'+
    '<input type="file" name="upload-file">'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );

}

function upload_file(req, res) {
  req.setBodyEncoding('binary');

  var stream = new multipart.Stream(req);
  stream.addListener('part', function(part) {
    part.addListener('body', function(chunk) {
      var progress = (stream.bytesReceived / stream.bytesTotal * 100).toFixed(2);
      var mb = (stream.bytesTotal / 1024 / 1024).toFixed(1);

      util.print("Uploading "+mb+"mb ("+progress+"%)\015");

      // chunk could be appended to a file if the uploaded file needs to be saved
    });
  });
  stream.addListener('complete', function() {
    res.sendHeader(200, {'Content-Type': 'text/plain'});
    res.sendBody('Thanks for playing!');
    res.finish();
    util.puts("\n=> Done");
  });
}

function show_404(req, res) {
  res.sendHeader(404, {'Content-Type': 'text/plain'});
  res.sendBody('You r doing it rong!');
  res.finish();
}
