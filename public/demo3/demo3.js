function demoController($scope, $http) {
	var url = 'http://localhost:3000/gdg/languages?number=5';
	$http({
		method : 'GET',
		url : url
	}).success(function(data) {
		$scope.languages = data;
	}).error(function(data) {
		console.log('Error: fetch tweets');
		$scope.languages = {};
	});
	return $scope;
}