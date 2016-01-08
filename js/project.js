angular.module('MyApp').controller('ProjectCtrl', function($scope, $timeout, config, $http) {
    $scope.projects = null;
    $scope.ready = 0;

    // Get works info
    $scope.loadData = function(){
        var req = {
            method: 'GET',
            url: 'data/projects.json'
        };
        $http(req)
            .then(
            function (response) { // Success callback
                $scope.projects = response.data;
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
