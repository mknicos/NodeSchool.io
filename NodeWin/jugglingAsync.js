var http = require('http')
  , bl = require('bl')
  , url1 = process.argv[2]
  , url2 = process.argv[3]
  , url3 = process.argv[4];

http.get(url1, function(response1){
  http.get(url2, function(response2){
    http.get(url3, function(response3){
      response1.pipe(bl(function (err, data1){
        response2.pipe(bl(function (err, data2){
          response3.pipe(bl(function (err, data3){
            console.log(data1.toString());
            console.log(data2.toString());
            console.log(data3.toString());
          }));
        }));
      }));
    });
  });
});

//Node School Solution:
//
//var http = require('http')
//   var bl = require('bl')
//   var results = []
//   var count = 0

//   function printResults () {
//     for (var i = 0; i < 3; i++)
//       console.log(results[i])
//   }

//   function httpGet (index) {
//     http.get(process.argv[2 + index], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err)
//           return console.error(data)

//         results[index] = data.toString()
//         count++

//         if (count == 3) // yay! we are the last one!
//           printResults()
//       }))
//     })
//   }

//   for (var i = 0; i < 3; i++)
//     httpGet(i)
