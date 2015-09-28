var fs = require('fs');
var filePath = process.argv[2];
var ext = process.argv[3];
var pat = RegExp('\\.' + ext + '$');

fs.readdir(filePath, function(err, list) {
	for (var i = 0; i < list.length; i++) {
		if (pat.test(list[i])) {
			console.log(list[i]);
		}
	}
});
