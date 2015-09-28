var myModule = require('./06-modules');

var dirPath = process.argv[2];
var extension = process.argv[3];

myModule(dirPath, extension, function(err, data) {
  if (err) {
    console.log('Error occurred when reading ' + dirPath);
    return err;
  }

  data.forEach(function(fileName) {
    console.log(fileName);
  });
})
