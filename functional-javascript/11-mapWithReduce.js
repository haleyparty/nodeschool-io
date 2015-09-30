module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(accum, curr, index, arr) {
    accum.push(fn(curr, index, arr));
    return accum;
  }, []);
};
