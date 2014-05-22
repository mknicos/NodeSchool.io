var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);

file = file.toString().split('\n');
console.log(file.length - 1);
