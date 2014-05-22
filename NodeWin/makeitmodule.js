var fs = require('fs');
var path = require('path');

module.exports = function(directory, fileExt, fn){
  var list = [];
  fs.readdir(directory, function(err, files){
    if(err) return fn(err);
    files.forEach(function (file){
      if(path.extname(file) === '.' + fileExt){
        list.push(file);
      };
    });
    fn(null, list);
  });
};
