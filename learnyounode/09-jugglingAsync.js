var http = require('http');
var concat = require('concat-stream');

var urls = process.argv.slice(2);
var results = [];
var resultsCount = 0;

urls.forEach(function(url, i) {
  http.get(url, function(response) {
    response.setEncoding('utf8');

    response.pipe(concat(function(data) {
      results[i] = data;
      resultsCount++;

      if (resultsCount === urls.length) {
        results.forEach(function(result) {
          console.log(result);
        })
      }
    }))
  });
});
