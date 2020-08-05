var express = require('express');
var app = express();
var path = require('path');
var http = require('http');

var httpServer = http.createServer(app);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/script.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/script.js'));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var listener = httpServer.listen(8081);

console.log('launched server at port ', listener.address().port);
