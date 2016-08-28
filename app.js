var express = require('express');
var app = express();
var config = require('./config.json');
// var http = require('http')

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res) {
		res.render(__dirname + '/index.ejs', {token: config['X-Auth-token']});
		
});

// app.get('/fixtures', function(req, res){
// 	console.log('headers are', req.headers);
// 	var token = req.headers['X-Auth-Token'];
// 	console.log('token');
// 	console.log('hittt');
// 	//function to get the data from http://api.football-data.org/v1/fixtures
// 	// res.on('data', function (chunk) {
//  //    console.log('BODY: ' + chunk);
//  //  });
// });
// var extServerOptions = {
//     url: 'http://api.football-data.org/v1/fixtures',
//     path: '/fixture',
//     method: 'GET',
//     headers:{
// 	'X-Auth-Token': '908cabfd72b547d191cb43364ce55f85',
//     }
// };
// //3.
// function get() {
//     http.request(extServerOptions, function (res) {
//         // res.setEncoding('utf8');
//         res.on('data', function (data) {
//             // var jsonContent = JSON.parse(data);
//            var json= JSON.parse(data);
//            console.log(data);

//         });
 
//     }).end();
// };
// get();


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

