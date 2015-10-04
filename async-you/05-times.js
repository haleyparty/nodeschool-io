var http = require('http');
var async = require('async');

var hostname = process.argv[2];
var port = process.argv[3];

async.series({
  post: function(done) {
    post(done);
  },
  get: function(done) {
    get(done);
  }
}, function(err, results) {
  if (err) return console.error(err);
  console.log(results.get);
});

function post(done) {
  var opts = {
    hostname: hostname,
    port: port,
    method: 'POST',
    path: '/users/create'
  }
  async.times(5, function(i, timesDone) {
    var req = http.request(opts, function(res) {
      res.on('data', function(chunk) {
      });

      res.on('end', function() {
        timesDone(null);
      });
    }).on('error', function(err) {
      return console.log(err);
    });

    var data = JSON.stringify({ user_id : i + 1 });
    req.end(data);
  }, function(err) {
    if (err) return console.log(err);
    done(null);
  });
}

function get(done) {
  http.get('http://' + [hostname, port].join(':') + '/users', function(res) {
    var body = '';

    res.on('data', function(chunk) {
      body += chunk.toString();
    });

    res.on('end', function() {
      done(null, body);
    });
  });
}
