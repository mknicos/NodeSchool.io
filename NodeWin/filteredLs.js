var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(directory, function (err, files){
  for(i=0; i < files.length; i++){
    file = files[i];
    if(path.extname(file) === '.' + fileExt){
      console.log(file);
    }
  }
});

