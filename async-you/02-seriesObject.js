var http = require('http');
var async = require('async');

var url1 = process.argv[2];
var url2 = process.argv[3];

async.series({
  requestOne: function(done) {
    fetchURL(url1, done);
  },
  requestTwo: function(done) {
    fetchURL(url2, done);
  }
}, function(err, results) {
  if (err) {
    return console.error(err);
  }

  console.log(results);
});

function fetchURL(url, done) {
  http.get(url, function(res) {
    var body = '';
    res.on('data', function(chunk) {
      body += chunk.toString();
    }).on('end', function(chunk) {
      done(null, body);
    });
  }).on('error', function(err) {
    return cb(err);
  });
}
