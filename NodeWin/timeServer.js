var net = require('net')
  , port = process.argv[2];

var server = net.createServer(function(socket){
  date = new Date();
  year = date.getFullYear();


  month = date.getMonth() + 1;


  if((month * 1) < 10){
    month = '0' + month.toString();
  };
  day = date.getDate();
  if((day * 1) < 10){
    day = '0' + day.toString();
  };
  hour = date.getHours();
  if((hour * 1) < 10){
    hour = '0' + hour.toString();
  };
  minute = date.getMinutes();
  if((minute * 1) < 10){
    minute = '0' + minute.toString();
  };

  var currentDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
  socket.write(currentDate + '\n');
  socket.end();
});

server.listen(port, function(){
});
