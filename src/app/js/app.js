(function() {
    "use strict";

    var app = angular.module("FlagQuizApp", []);

    function cropAndMix(arr, size) {
        arr.sort(function(a, b) {
             return Math.random() - 0.5;
        });

        return arr.splice(0, size);
    }

    app.controller("FlagQuizController", [ "$scope", "$http", function($scope, $http) {
        $scope.gamestart = false;
        $scope.selectedCountry = undefined;
        $scope.selectedFlag = undefined;
        $http.get("json/all.json").success(function(data, status) {
            $scope.countries = cropAndMix(data, 20);
        });

        $scope.setCountry = function(country) {
            $scope.selectedCountry = country;
        };

        $scope.setFlag = function(country) {
            $scope.selectedFlag = country;
            console.log(country);
        };

        $scope.$watch("selectedCountry", function(country) {
            console.log(country);
        });
    }]);

}());
