function curryN(fn, n) {
  n = typeof n === 'undefined' ? fn.length : n;

  if (n) {
    return function(arg) {
      return curryN(fn.bind(this, arg), n - 1);
    }
  } else {
    return fn();
  }
}

module.exports = curryN;
