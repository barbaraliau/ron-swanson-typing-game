var express = require('express');
var app = express();

var port = 9999;

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log('Listening on port', port);
});