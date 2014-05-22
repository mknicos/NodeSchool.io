var fs = require('fs');

var fileToRead = process.argv[2];

fs.readFile(fileToRead, 'utf8', function(err, data){
  if(err) throw err;
  console.log(data.split('\n').length - 1);
});
