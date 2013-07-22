(function() {
    "use strict";

    var app = angular.module("HelloWorldApp", []);

    app.controller("HelloWorldController", [ "$scope", function($scope) {
        $scope.numberError = false;
        $scope.circlePerimeter = function() {
            return 2 * Math.PI * $scope.perimeter;
        };

        $scope.$watch("number", function(newValue, oldValue) {
            if (!newValue typeof newValue !== typeof 1) {
                $scope.numberError = true;
            } else {
                $scope.numberError = false;
            }
        });
    }]);
}());
