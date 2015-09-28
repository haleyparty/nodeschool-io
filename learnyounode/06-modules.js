var fs = require('fs');
var path = require('path');

module.exports = function(directory, extension, callback) {
  var filteredFiles = [];

  fs.readdir(directory, function(err, data) {
    if (err) {
      return callback(err);
    }

    data.forEach(function(file) {
      if (path.extname(file) === '.' + extension) {
        filteredFiles.push(file);
      }
    });

    callback(null, filteredFiles);
  })
}
