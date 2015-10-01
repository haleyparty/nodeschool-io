var q = require('q');
var defer1 = q.defer();
var defer2 = q.defer();

function all(prom1, prom2) {
  var groupDefer = q.defer();
  var count = 0;
  var val1, val2;

  prom1.then(function(result) {
    val1 = result;
    ++count;
    if (count >= 2) groupDefer.resolve([val1, val2]);
  })
  .then(null, groupDefer.reject)
  .done();

  prom2.then(function(result) {
    val2 = result;
    ++count;
    if (count >=2) groupDefer.resolve([val1, val2]);
  })
  .then(null, groupDefer.reject)
  .done();

  return groupDefer.promise;
}

all(defer1.promise, defer2.promise)
.then(console.log)
.done();

setTimeout(function() {
  defer1.resolve('PROMISES');
  defer2.resolve('FTW');
}, 200);
