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
		// when('/teams',{
		// 	templateUrl: 'html/teams.html',
		// 	controller:  'teamCtrl'
		// 	}).
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