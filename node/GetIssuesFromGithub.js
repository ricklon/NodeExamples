/*
* Request information from Github issue tracker
*/


var options = {
  host: url,
  port: 80,
  path: 'http://github.com/api/v2/json/issues/list/chipKIT32/chipKIT32-MAX/open',
  method: 'POST'
};

http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();

