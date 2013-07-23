(function() {
    "use strict";

    var app = angular.module("HelloWorldApp", [], function($routeProvider, $locationProvider) {
        $routeProvider.when("/area", {
            templateUrl: 'templates/area.html'
        });

        $routeProvider.when("/perimeter", {
            templateUrl: 'templates/perimeter.html'
        });

        $locationProvider.html5Mode(false);
    });

    app.controller("HelloWorldController", [ "$scope", "$route", "$routeParams", "$location", function($scope, $route, $routeParams, $location) {

        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        $scope.numberError = false;

        $scope.circleArea = function() {
            console.log($scope);
            return Math.PI * Math.pow($scope.number, 2);
        };

        $scope.circleArea = function() {
            return Math.PI * Math.pow($scope.number, 2);
        };

        $scope.circlePerimeter = function() {
            return 2 * Math.PI * $scope.number;
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

}());
