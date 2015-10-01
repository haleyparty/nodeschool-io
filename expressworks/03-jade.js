var express = require('express');
var app = express();

var jade = process.argv[3];

app.set('view engine', 'jade');
app.set('views', jade);

app.get('/home', function(req, res) {
  res.render('index', { date: new Date().toDateString() });
});

app.listen(process.argv[2]);
