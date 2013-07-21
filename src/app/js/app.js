(function() {
    "use strict";

    var app = angular.module("HelloWorldApp", []);

    app.controller("HelloWorldController", [ "$scope", function($scope) {
        $scope.circlePerimeter = function() {
            return 2 * Math.PI * $scope.perimeter;
        };
    }]);
}());
