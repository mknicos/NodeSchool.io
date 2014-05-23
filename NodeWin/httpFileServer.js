var http = require('http')
  , fs = require('fs')
  , port = process.argv[2]
  , fileDir = process.argv[3];

var server = http.createServer(function(request, response){
  fs.createReadStream(fileDir).pipe(response);
});

server.listen(process.argv[2]);

// Node Schol Answer
/*  var http = require('http')
    var fs = require('fs')

    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))
*/
