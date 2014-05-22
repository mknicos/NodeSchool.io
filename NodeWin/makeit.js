module1 = require('./makeitmodule.js');

module1(process.argv[2], process.argv[3], function(err, list){
  list.forEach(function (file) {
    console.log(file);
  });
});

