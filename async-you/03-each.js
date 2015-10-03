var http = require('http');
var async = require('async');

var url1 = process.argv[2];
var url2 = process.argv[3];

async.each([url1, url2], function(item, done) {
  fetchURL(item, done);
},
function(err) {
  if (err) console.log(err);
});

function fetchURL(url, done) {
  http.get(url, function(res) {
    res.on('data', function(chunk) {
    });

    res.on('end', function() {
      return done();
    });
  }).on('error', function(err) {
      return console.log(err);
    });
}
