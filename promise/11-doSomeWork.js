var HTTP = require('q-io/http');

HTTP.read('http://localhost:7000')
.then(function(data) {
  return HTTP.read('http://localhost:7001/' + data);
})
.then(function(user) {
  console.log(JSON.parse(user));
})
.then(null, console.error)
.done()
