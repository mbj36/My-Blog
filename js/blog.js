angular.module('MyApp').controller('BlogCtrl', function($scope, $timeout, config, $http,$sce) {
    $scope.blog = null;
    $scope.ready = 0;

    // Get profile
    $scope.loadData = function(){
        var req = {
            method: 'GET',
            url: 'data/blog.json'
        };
        $http(req)
            .then(
            function (response) { // Success callback
                $scope.blog = response.data;
                $scope.ready = 1;
            },
            function (response) { //Error callback
                console.log(response.toString());
            }
        );
    };
    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    // Delayed call to avoid navbar freeze on close
    $timeout($scope.loadData, config.loadDelay);
});


