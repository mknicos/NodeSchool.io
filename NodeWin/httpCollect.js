var http = require('http')
  , bl = require('bl')
  , url = process.argv[2];

http.get(url, function(response){
  response.pipe(bl(function (err, data){
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});
