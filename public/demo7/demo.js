var app = angular.module('App', []);
app.constant('appConstant', {
    debug : true,
    domain : 'http://localhost:3000/'
});


app.controller('demoController', [ '$scope', '$http','appConstant', function($scope, $http,constant) {

    ;
    $http.get(constant.domain +'gdg/languages?number=5').success(function(data) {
        $scope.languages = data;
    }).error(function() {
        console.log('Error: fetch teams');
        $scope.languages = {};
    });

    $scope.getAllLanguages = function() {

        $http.get(constant.domain +'gdg/languages').success(function(data) {
            $scope.languages = data;
            alarmManager('Success : All teams fetched');
        });

    };
} ]);
