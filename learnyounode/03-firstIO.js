var fs = require('fs');
var file = process.argv[2];

contents = fs.readFileSync(file).toString();
console.log(contents.split('\n').length - 1);
