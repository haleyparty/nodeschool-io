var http = require('http');
var fs = require('fs');
var async = require('async');

var file = process.argv[2];

async.waterfall([ readUrlFromFile, getUrl ], function(err, result) {
  if (err) return console.log(err);
  console.log(result);
})

function readUrlFromFile(next) {
  fs.readFile(file, function(err, url) {
    next(null, url.toString());
  })
}

function getUrl(url, done) {
  http.get(url, function(res) {
    var body = '';

    res.setEncoding('utf8');
    res.on('data', function(chunk) { body += chunk; });
    res.on('end', function() {
      done(null, body);
    });
  });
}
