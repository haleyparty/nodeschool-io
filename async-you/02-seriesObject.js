http = require('http');
async = require('async');

url1 = process.argv[2];
url2 = process.argv[3];

async.series({
  requestOne: function(cb) {
    http.get(url1, function(res) {
      var body = '';
      res.on('data', function(chunk) {
        body += chunk.toString();
      }).on('end', function() {
        cb(null, body);
      });
    }).on('error', function(err) {
      return cb(err);
    });
  },
  requestTwo: function(cb) {
    http.get(url2, function(res) {
      var body = '';
      res.on('data', function(chunk) {
        body += chunk.toString();
      }).on('end', function() {
        cb(null, body);
      });
    }).on('error', function(err) {
      return cb(err);
    });
  }
}, function(err, results) {
  if (err) {
    return console.error(err);
  }

  console.log(results);
})
