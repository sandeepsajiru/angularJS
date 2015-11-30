var express = require('express');
var path = require('path');

var app = express();

var rootPath = path.normalize(__dirname+'/../');

console.log('RootPath: '+rootPath);

app.use(express.static(rootPath+'/app'));

app.listen(8000);

console.log('Server started on http://localhost:8000');