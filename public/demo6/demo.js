

angular.module('alarmModule', [])
.service('alarmManagerPopup',[ '$window', function($window) {
			return {
				alarm : function(text) {
					$window.alert(text);
				}
			};
		} ])
.service('alarmManagerLog',	[  '$http', function( http) {
			return {
				alarm : function(text) {
					http.post('http://localhost:3000/logOnServer', {
						message : text
					})

				}
			};
		} ]);

var app = angular.module('App', []);
app.constant('appConstant', {
	debug : false,
    domain : 'http://localhost:3000/'
});


app.controller('demoController', [ '$scope', '$http','appConstant', function($scope, $http,constant) {

	// New injector created from the previus declared module
	var injector = angular.injector([ 'alarmModule', 'ng' ]);

	// Request any dependency from the injector
	if (constant.debug === true)
		var alarmManager = injector.get('alarmManagerPopup');
	else
		var alarmManager = injector.get('alarmManagerLog');



    alarmManager = alarmManager.alarm;
	$http.get(constant.domain +'gdg/languages?number=5').success(function(data) {
		$scope.languages = data;
	}).error(function() {
		console.log('Error: fetch teams');
		$scope.languages = {};
	});

	$scope.getAllTeams = function() {

		$http.get(constant.domain +'gdg/languages').success(function(data) {
			$scope.languages = data;
            alarmManager('Success : All teams fetched');
		}).error(function() {
            alarmManager('Error: fetch teams');
			$scope.showButton = false;
		});

	};
} ]);
