(function() {
    "use strict";

    var app = angular.module("HelloWorldApp", [], function($routeProvider, $locationProvider) {
        $routeProvider.when("/area", {
            templateUrl: 'templates/area.html',
            controller: 'AreaController'
        });

        $routeProvider.when("/perimeter", {
            templateUrl: 'templates/perimeter.html',
            controller: 'PerimeterController'
        });

        $locationProvider.html5Mode(false);
    });

    app.controller("HelloWorldController", [ "$scope", "$route", "$routeParams", "$location", function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $scope.circleArea = "hola";

        $scope.numberError = false;

        $scope.circleArea = function() {
            console.log($scope);
            return Math.PI * Math.pow($scope.number, 2);
        };

        $scope.$watch("number", function(newValue, oldValue) {
            if (newValue === undefined) return;

            if (isNaN(newValue)) {
                $scope.numberError = true;
            } else {
                $scope.numberError = false;
            }
        });
    }]);

    app.controller("AreaController", [ "$scope", "$routeParams", function($scope, $routeParams) {
        $scope.circleArea = function() {
            return Math.PI * Math.pow($scope.number, 2);
        };
    }]);

    app.controller("PerimeterController", [ "$scope", "$routeParams", function($scope, $routeParams) {
        $scope.circlePerimeter = function() {
            return 2 * Math.PI * $scope.number;
        };
    }]);

}());
