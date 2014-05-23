var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
  var parsedReq = request.pipe(url.parse(request.url, true);
  var date = new Date(parsedReq.iso);
  var obj = {"hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()};
  obj.pipe(response);
});


server.listen(process.argv[2]);
