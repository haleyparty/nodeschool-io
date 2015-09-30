function getDependencies(tree, result) {
  var result = result || [];
  var dependencies = tree.dependencies || [];

  Object.keys(dependencies).forEach(function(dependency) {
    var depName = [dependency, dependencies[dependency].version].join('@');

    // base case
    if (result.indexOf(depName) === -1) {
      result.push(depName);
    }

    // recursive case
    getDependencies(tree.dependencies[dependency], result);
  });

  return result.sort();
}

module.exports = getDependencies;
