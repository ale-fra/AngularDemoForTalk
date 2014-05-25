
var app = angular.module('App', []);
			
			app.service('alarmManager', [ '$window', function($window) {
				return {
					alarm : function(text) {
						$window.alert(text);
					}
				};
			} ]);
			
			

app.controller('demoController', [ 'alarmManager', '$scope', '$http',
		function(alarmManager, $scope, $http) {
			var alarm = alarmManager.alarm;
			$http({
				method : 'GET',
				url : 'http://localhost:3000/gdg/languages?number=5'
			}).success(function(data) {
				$scope.languages = data;
			}).error(function() {
				console.log('Error: fetch teams');
				$scope.languages = {};
			});

			$scope.getAllLanguages = function() {

				$http({
					method : 'GET',
					url : 'http://localhost:3000/gdg/languages/'
				}).success(function(data) {
					$scope.languages = data;
					// say fetched
					alarm('fetched');
				}).error(function() {
					alarm('Error: fetch teams');
					$scope.showButton = false;
				});

			};
		}
]);
