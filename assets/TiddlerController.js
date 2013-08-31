angular.module('angularSpace').controller('TiddlerController', function ($scope, $routeParams, tiddlerService) {

    $scope.bag = $routeParams.bag;
    $scope.title = $routeParams.title;

    $scope.getTiddler = function() {

        tiddlerService.getTiddler($scope.bag, $scope.title, function(tiddler) {

            $scope.tiddler = tiddler;
        }, true);
    };

    $scope.init = function() {
        $scope.getTiddler();
    };
});