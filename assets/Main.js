angular.module('angularSpace', ['ngSanitize', 'tiddlerModule']).config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'MainController'
        })
        .when('/tiddler/:bag/:title', {
            templateUrl: 'tiddler.html',
            controller: 'TiddlerController'
        })
}]);