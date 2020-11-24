var express = require('express');
var app = express();
const hostname = '0.0.0.0';
const port = 3001; 

var routes = require('./api/routes'); routes(app); 

app.listen(port,hostname,function(){ console.log('Server started on port: ' + port); });
