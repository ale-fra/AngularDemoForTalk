function demoController($scope, $http) {

	$http({
		method : 'GET',
		url : 'http://localhost:3000/gdg/languages?number=5'
	}).success(function(data) {
		$scope.languages = data;
	}).error(function(data) {
		console.log('Error: fetch teams');
		$scope.languages = {};
	});

	$scope.getAllLanguages = function() {

		$http({
			method : 'GET',
			url : 'http://localhost:3000/gdg/languages'
		}).success(function(data) {
			$scope.languages = data
		}).error(function(data) {
			console.log('Error: fetch teams');
			$scope.showButton=false;
		});

	}
	return $scope;
}