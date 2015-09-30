function Spy(target, method) {
  var spy = {count: 0};

  var origFunction = target[method];

  target[method] = function() {
    spy.count++;
    return origFunction.apply(target, arguments);
  }
  return spy;
}

module.exports = Spy;
