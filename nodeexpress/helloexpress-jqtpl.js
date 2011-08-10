var express = require('express');
var jqtpl = require("jqtpl");
var app = express.createServer();

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

app.listen(37881);
