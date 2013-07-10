var express = require('express');
var app = express();

app.use(express.bodyParser());

app.configure(function() {
    app.use(express.logger());
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

//could do the following useing app.all()

app.get('/*', function(req, res) {
    echovalue = "req.method: " + JSON.stringify(req.method) + "\nreq.header: " + JSON.stringify(req.header) + "\nreq.url: " + JSON.stringify(req.url) + "\nreq.params: " + JSON.stringify(req.params) + "\nreq.query: " + JSON.stringify(req.query) + "\nreq.body: " + JSON.stringify(req.body) + "\n";
    res.send(echovalue );
});

app.post('/*', function(req, res){
    echovalue = "req.method: " + JSON.stringify(req.method) + "\nreq.header: " + JSON.stringify(req.header) + "\nreq.url: " + JSON.stringify(req.url) + "\nreq.params: " + JSON.stringify(req.params) + "\nreq.query: " + JSON.stringify(req.query) + "\nreq.body: " + JSON.stringify(req.body) + "\n";
    res.send(echovalue );
});

app.put('/*', function(req, res){
    echovalue = "req.method: " + JSON.stringify(req.method) + "\nreq.header: " + JSON.stringify(req.header) + "\nreq.url: " + JSON.stringify(req.url) + "\nreq.params: " + JSON.stringify(req.params) + "\nreq.query: " + JSON.stringify(req.query) + "\nreq.body: " + JSON.stringify(req.body) + "\n";
    res.send(echovalue );
});

app.del('/*', function(req, res){
    echovalue = "req.method: " + JSON.stringify(req.method) + "\nreq.header: " + JSON.stringify(req.header) + "\nreq.url: " + JSON.stringify(req.url) + "\nreq.params: " + JSON.stringify(req.params) + "\nreq.query: " + JSON.stringify(req.query) + "\nreq.body: " + JSON.stringify(req.body) + "\n";
    res.send(echovalue );
});

app.listen(process.env.PORT);
