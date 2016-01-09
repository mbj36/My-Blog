/**
 * Created by praveen on 12.09.15.
 */

angular.module('MyApp').controller('AboutCtrl', function($scope, $timeout, config, $http) {
    $scope.profile = null;
    $scope.ready = 0;

    // Get profile
    $scope.loadData = function(){
        var req = {
            method: 'GET',
            url: 'data/about.json'
        };
        $http(req)
            .then(
            function (response) { // Success callback
                $scope.profile = response.data;
                $scope.ready = 1;
            },
            function (response) { //Error callback
                console.log(response.toString());
            }
        );
    };

    // Delayed call to avoid navbar freeze on close
    $timeout($scope.loadData, config.loadDelay);
});