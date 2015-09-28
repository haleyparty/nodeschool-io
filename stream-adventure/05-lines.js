var through = require('through2');
var split = require('split');


var lineCount = 0;
var stream = through(write);

function write(buffer, _, next) {
  var line = buffer.toString();
  if (lineCount % 2 === 0) {
    this.push(line.toLowerCase() + '\n');
  } else {
    this.push(line.toUpperCase() + '\n')
  }
  lineCount++;
  next();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
