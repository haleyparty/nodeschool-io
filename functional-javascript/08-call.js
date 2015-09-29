function duckCount() {
  return Array.prototype.slice.call(arguments).reduce(function(previous, current) {
    return previous + (Object.hasOwnProperty.call(current, 'quack') ? 1 : 0);
  }, 0);
}

module.exports = duckCount;
