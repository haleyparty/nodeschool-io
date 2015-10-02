var fancify = require(process.argv[2]);
var test = require('tape');

test('fancify', function(t) {
  t.equal(fancify('Hello'), '~*~Hello~*~', 'Wraps string in ~*~');
  t.equal(fancify('Hello', true), '~*~HELLO~*~', 'Optionally takes second argument to make all caps');
  t.equal(fancify('Hello', false, '!'), '~!~Hello~!~', 'Optionally takes third argument to set middle character');
  t.end();
});
