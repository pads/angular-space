angular.module('angularSpace').controller('MainController', function ($scope) {

    $scope.showTiddler = function() {
        document.location.href = '#/tiddler/' + $scope.bag + '/' + $scope.title;
    };
});