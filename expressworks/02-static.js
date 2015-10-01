var express = require('express');
var app = express();

var file = process.argv[3];

app.use(express.static(file || path.join(__dirname, 'public')));

app.listen(process.argv[2]);
