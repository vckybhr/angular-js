var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
		when('/',{
			templateUrl: 'home.html',
			controller:  'homeCtrl'

			}).
		when('/competition',{
			templateUrl: 'competition.html',
			controller:  'competitionCtrl'
			}).
		when('/fixtures',{
			templateUrl: 'fixture.html',
			controller:  'fixtureCtrl'
			}).
		when('/teams',{
			templateUrl: 'teams.html',
			controller:  'teamCtrl'
			}).
		when('/teams/:key/:teamkey/players',{
			templateUrl: 'teamPlayers.html',
			controller:  'teamPlayerCtrl'
			}).
		when('/:id/Competeams',{
			templateUrl: 'competitionTeam.html',
			controller:  'competitionTeamCtrl'
			}).
		otherwise({
			redirectTo:'/'
		});

}); 

app.controller('homeCtrl', function($scope){
	
});

app.controller('teamCtrl', function($scope){
	$scope.data = [
    {"name" : "Barcelona", "key" : "81"},
    {"name" : "Chelsea FC", "key" : "61"},
    {"name" : "Everton FC", "key" : "62"},
    {"name" : "Liverpool FC", "key" : "64"},
    {"name" : "Manchester City FC", "key" : "65"},
    {"name" : "Manchester United FC", "key" : "66"},
    {"name" : "Newcastle United FC", "key" : "67"},
    {"name" : "Norwich City FC", "key" : "68"},
    {"name" : "Stoke City FC", "key" : "70"},
    {"name" : "Swansea City FC", "key" : "72"},
    {"name" : "Tottenham Hotspur FC", "key" : "73"},
    {"name" : "Athletic Club", "key" : "77"},
    {"name" : "Atletico de Madrid", "key" : "78"},
    {"name" : "Malaga CF", "key" : "84"},
    {"name" : "Real Madrid CF", "key" : "86"}];
});
app.controller('competitionCtrl',['$scope','$http','teamFactory', function($scope, $http, teamFactory){
	url = 'http://api.football-data.org/v1/competitions';
	teamFactory.data(url,function(data, status){
		$scope.posts = data ;
		console.log(data);   // remove  this console		
	});
}]);
app.controller('fixtureCtrl',['$scope','$http','teamFactory', function($scope, $http, teamFactory){
	url = 'http://api.football-data.org/v1/fixtures'
	teamFactory.data(url,function(data, status){
		$scope.posts = data ;
		console.log(data);   // remove  this console		
	});	
	}]);
app.controller('competitionTeamCtrl',['$scope', '$http', '$routeParams','teamFactory', function($scope, $http, $routeParams,teamFactory){
	var param = $routeParams.id;
	console.log(param); 
	url = 'http://api.football-data.org/v1/competitions/' +param  + '/teams'
	teamFactory.data(url,function(data, status){
		$scope.posts = data.teams;
		console.log(data);
	});	
	}]);
app.controller('teamPlayerCtrl',['$scope','$http','$routeParams','teamFactory', function($scope,$http,$routeParams,teamFactory){
	var key= $routeParams.key;
	$scope.teamName = $routeParams.teamkey;
	url = 'http://api.football-data.org/v1/teams/' + key +'/players' ;
	teamFactory.data(url,function(data, status){
		$scope.posts = data.players;
		console.log(data);
	});
	
}]);

app.factory('teamFactory', ['$http' ,
	function($http){
	var teamFactory={
		data:function httpRequestHandler(url,callback)
			{
						$http({url: url,
						  	method: 'GET',
						  	headers: {
							  	'X-Auth-Token': '908cabfd72b547d191cb43364ce55f85'
								},
							timeout:5000
						}).success(function(data,status){
							callback(data,status);

							})
						  .error(function (err,status){
						  	callback(err,status);
							});

			}
    }
	
	return teamFactory;
}]);
// app.service('team1Service',['$http',function($http){
// 	this.users = ['John', 'James', 'Jake'];
// 	this.showMe =function(){
// 		console.log("Shown service called");
// 	};
// 	var response={
// 		show:this.users
// 	};
// 	return response;
	// function httpRequestHandler(url,callback)
	// {
	// 					$http({url: url,
	// 					  	method: 'GET',
	// 					  	headers: {
 //   						  	'X-Auth-Token': '908cabfd72b547d191cb43364ce55f85'
 // 							},
	// 						timeout:5000
	// 					}).success(function(data,status){
	// 						callback(data,status);

	// 						})
	// 					  .error(function (err,status){
	// 					  	callback(err,status);
	// 						});

	// }


// }]);




