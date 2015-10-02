var feedCat = require(process.argv[2]);
var test = require('tape');

test('feedCat', function(t) {
  t.plan(2);
  t.equal(feedCat('cat nip'), 'yum');
  t.throws(function() {
    feedCat('chocolate');
  })
});
