var express = require('express');
var app = express();
var config = require('./config.json');

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
// 	//function to get the data from http://api.football-data.org/v1/fixtures
// 	res.send("abs");
// });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

