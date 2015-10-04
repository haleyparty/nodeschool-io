var http = require('http');
var async = require('async');

var url = process.argv[2];
var number = ['one', 'two', 'three'];

async.reduce(number, 0, function(memo, item, callback) {
  http.get(url + '?number=' + item, function(res) {
    var body = '';
    res.on('data', function(chunk) {
      body += chunk.toString();
    });

    res.on('end', function() {
      callback(null, memo + Number(body)); // add parseInt?
    });
  }).on('error', function(err) {
    return console.log(err);
  });
}, function(err, result) {
  if (err) return console.log(err);
  console.log(result);
});
