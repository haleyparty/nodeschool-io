var HTTP = require('q-io/http');

var path = 'http://localhost:1337';

HTTP.read(path)
.then(function(data) {
  console.log(JSON.parse(data));
});
  
