var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
		when('/',{
			templateUrl: 'html/home.html',
			controller:  'homeCtrl'

			}).
		when('/competition',{
			templateUrl: 'html/competition.html',
			controller:  'competitionCtrl'
			}).
		when('/fixtures',{
			templateUrl: 'html/fixture.html',
			controller:  'fixtureCtrl'
			}).
		when('/teams',{
			templateUrl: 'html/teams.html',
			controller:  'teamCtrl'
			}).
		when('/teams/:key/:teamkey/players',{
			templateUrl: 'html/teamPlayers.html',
			controller:  'teamPlayerCtrl'
			}).
		when('/:id/Competeams',{
			templateUrl: 'html/competitionTeam.html',
			controller:  'competitionTeamCtrl'
			}).
		otherwise({
			redirectTo:'/'
		});

}); 

app.controller('homeCtrl', function($scope){
	
});
app.controller('teamCtrl',['$scope', 'footballConstant', function($scope,footballConstant){
	$scope.data = footballConstant.teamData;
	console.log($scope.data);
}]);
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
		// if($scope.teamName == "Barcelona" || $scope.teamName == "Chelsea FC")
		// {
		// 	$scope.barca = false;
		// }
		// else{
		// 	$scope.barca = true;
		// }
		// for defence
		if (key==="84" || key==="70" || key==="64" || key==="86" || key==="72" || key==="65") {
			$scope.defence2 = true;
			$scope.defence1 = false;
		}
		else{
			$scope.defence2 = false;
			$scope.defence1 = true;
		}
		// for mid 
		if (key === "81" || key === "66" || key === "73"){
			$scope.mid_six = true;
			$scope.mid_twelve = false;
			$scope.mid_thirteen = false;
			$scope.mid_eighteen = false;
			$scope.mid_nineteen= false;
			$scope.mid_sixteen = false;
			$scope.mid_seventeen = false;
		}
		else if(key === "77" || key === "67" || key === "61"){
			$scope.mid_six = false;
			$scope.mid_twelve = true;
			$scope.mid_thirteen = true;
			$scope.mid_sixteen = true;
			$scope.mid_seventeen = false;
			$scope.mid_eighteen = false;
			$scope.mid_nineteen= false;
		}
		else if(key === "78" || key === "68" || key === "62"){
			$scope.mid_six = false;
			$scope.mid_twelve = false;
			$scope.mid_thirteen = false;
			$scope.mid_sixteen = false;
			$scope.mid_seventeen = true;
			$scope.mid_eighteen = true;
			$scope.mid_nineteen= true;
		}
		else if(key === "84" || key === "70" || key === "64"){
			$scope.mid_six = false;
			$scope.mid_twelve = false;
			$scope.mid_thirteen = false;
			$scope.mid_sixteen = true;
			$scope.mid_seventeen = true;
			$scope.mid_eighteen = false;
			$scope.mid_nineteen= false;
		}
		else if(key === "86" || key === "72" || key === "65"){
			$scope.mid_six = true;
			$scope.mid_twelve = true;
			$scope.mid_thirteen = true;
			$scope.mid_sixteen = false;
			$scope.mid_seventeen = false;
			$scope.mid_eighteen = false;
			$scope.mid_nineteen= false;
		}
		// for attack
		if (key === "81" || key === "66" || key === "73" || key === "84" || key === "70" || key === "64"){
			$scope.attack_eight = true;
			$scope.attack_nine = true;
			$scope.attack_ten = true;
			$scope.attack_fourteen = false;
			$scope.attack_fifteen= false;
		}
		else if(key === "77" || key === "67" || key === "61" || key === "78" || key === "68" || key === "62"){
			$scope.attack_eight = false;
			$scope.attack_nine = false;
			$scope.attack_ten = true;
			$scope.attack_fourteen = false;
			$scope.attack_fifteen= false;
		}
		else if(key === "86" || key === "72" || key === "65"){
			$scope.attack_eight = false;
			$scope.attack_nine = false;
			$scope.attack_ten = false;
			$scope.attack_fourteen = true;
			$scope.attack_fifteen= true;
		}

	});
	
}]);









