var express = require('express');
var fs = require('fs');
var app = express();

var file = process.argv[3];

app.get('/books', function(req, res) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;
    object = JSON.parse(data);
    res.json(object);
  })
});


app.listen(process.argv[2]);
