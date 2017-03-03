var express = require('express');
var app = express();
var url = require('url');

app.get("/webapp/*", function(req, res){
	var path = url.parse(req.url).pathname;
	console.log("Requested for: "+path);
	res.sendFile(__dirname+path);
});

app.get("/", function(req, res){
	var path = url.parse(req.url).pathname;
	console.log("Requested for: "+path);
	res.send("processing...");
})

var server = app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');