var HTTP = require('q-io/http');
var _ = require('lodash');

HTTP.read('http://localhost:7000')
.then(_.compose(HTTP.read, function(data) { return 'http://localhost:7001/' + data }))
.then(_.compose(console.log, JSON.parse))
.then(null, console.error)
.done();
