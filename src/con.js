var app = angular.module('app',['ngRoute','ngAnimate','ngTouch']);

app.controller('homeCtrl', function($scope){
  $scope.slides = [
   {image: 'images/img00.jpg', description: 'Image 00'},
   {image: 'images/img01.jpg', description: 'Image 01'},
   {image: 'images/img02.jpg', description: 'Image 02'},
   {image: 'images/img03.jpg', description: 'Image 03'}
            // {image: 'img04.jpg', description: 'Image 04'}
  ];

  $scope.current = 0;

  $scope.setCurrent = function(index){
    $scope.current = index;
  };

    $scope.direction = 'left';
    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
        $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
        $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };

    $scope.prevSlide = function () {
        $scope.direction = 'left';
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.direction = 'right';
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };
});
app.controller('teamCtrl',['$scope', 'footballConstant', function($scope,footballConstant){
	$scope.data = footballConstant.teamData;
	// console.log($scope.data);
}]);
app.controller('competitionCtrl',['$scope','$http','teamFactory', function($scope, $http, teamFactory){
	var url = 'http://api.football-data.org/v1/competitions';
	teamFactory.data(url,function(data, status){
		$scope.posts = data ;
		// console.log(data);   // remove  this console		
	});
}]);
app.controller('fixtureCtrl',['$scope','$http','teamFactory', function($scope, $http, teamFactory){
	var url = 'http://api.football-data.org/v1/fixtures'
	teamFactory.data(url,function(data, status){
		$scope.posts = data ;
		// console.log(data);   // remove  this console		
	});	
	}]);
app.controller('competitionTeamCtrl',['$scope', '$http', '$routeParams','teamFactory', function($scope, $http, $routeParams,teamFactory){
	var param = $routeParams.id;
	console.log(param); 
	var url = 'http://api.football-data.org/v1/competitions/' +param  + '/teams'
	teamFactory.data(url,function(data, status){
		$scope.posts = data.teams;
		// console.log(data);
	});	
	}]);
app.controller('teamPlayerCtrl',['$scope','$http','$routeParams','teamFactory', function($scope,$http,$routeParams,teamFactory){
	var key= $routeParams.key;
	$scope.teamName = $routeParams.teamkey;
	var url = 'http://api.football-data.org/v1/teams/' + key +'/players' ;
	teamFactory.data(url,function(data, status){
		$scope.posts = data.players;
		// console.log(data);
		
		var position = function(){
			console.log("position");
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
	}
	position();
	});

	
}]);









