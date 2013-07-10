// *******************************************************
// expressjs template
//
// assumes: npm install express
// defaults to jade engine, install others as needed
//
// assumes these subfolders:
//   public/
//   public/js/
//   public/css/
//   public/assets
//   views/
//
var express = require('express');
var app = express();
var viewEngine = 'jade'; // modify for your view engine
// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', viewEngine);
  app.use(express.bodyParser({uploadDir:'/uploads'}));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function(){
  app.use(express.errorHandler());
});
// *******************************************************



/*
app.post('/file-upload', function(req, res, next) {
    console.log(req.body);
    console.log(req.files);
});
*/
app.post('/file-upload', function(req, res, next) {
    req.form.complete(function(err, fields, files) {
    if (err) { next(err); }
    else {
            console.log(fields);
            console.log('---------------');
            console.log(files);
            res.redirect(req.url);
        }
    });
});


var port = process.env.PORT;
console.log("Listening port: " + port); 
app.listen(port);

