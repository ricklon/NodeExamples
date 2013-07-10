var express = require('express');
var jqtpl = require("jqtpl");
var app = express.createServer();

app.configure(function() {
	app.use(express.logger());
	app.use(express.static(__dirname + '/static'));
});

app.configure(function() {
    app.use(express.logger());
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});
app.set("view engine", "html");
app.register(".html", require("jqtpl").express);

app.set('views', __dirname +'/views/');

app.get('/', function(req, res) {
	res.render('index.html');
});

app.get('/test', function(req, res) {
    res.render('test.html');
});

app.get('/test/test.html', function(req, res) {
    res.render('test.html');
});

app.listen(process.env.C9_PORT);
