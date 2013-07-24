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
        $scope.correctAnswers = [];
        $scope.badAnswers = [];
        $scope.allCountries = undefined;
        $scope.halloffame = [];
        $scope.score = 0;

        $http.get("json/all.json").success(function(data, status) {
            $scope.allCountries = data;
            $scope.countries = cropAndMix(data, 5);
            $scope.flags = $scope.countries.slice(0);
            $scope.flags = cropAndMix($scope.flags, 5);
        });

        $scope.setSelectedCountry = function(country) {
            $scope.selectedCountry = country;
        };

        $scope.setSelectedFlag = function(country) {
            $scope.selectedFlag = country;
        };

        $scope.setCountryColor = function(country) {
            if ($scope.correctAnswers.indexOf(country.name) !== -1) {
                return 'btn-success';
            }

            if ($scope.badAnswers.indexOf(country.name) !== -1) {
                return 'btn-danger';
            }

            if ($scope.selectedCountry && $scope.selectedCountry.name == country.name) {
                return 'btn-warning';
            }
            return 'btn-primary';
        };

        $scope.checkIfGameIsOver = function() {
            if ($scope.correctAnswers === undefined || !$scope.badAnswers === undefined || !$scope.countries) return;

            if (($scope.correctAnswers.length + $scope.badAnswers.length) === $scope.countries.length) {
                $scope.gamestart = false;
                $scope.countries = cropAndMix($scope.allCountries, 5);
                $scope.flags = $scope.countries.slice(0);
                $scope.flags = cropAndMix($scope.flags, 5);
                var hof = $scope.halloffame.splice();
                hof.push({ user: $scope.username, score: $scope.score });
                $scope.halloffame = hof;
                $scope.username = undefined;
                $scope.score = 0;
            }
        };

        $scope.setFlagColor = function(country) {
            var code = country['alpha-2'];
            var selected = "";
            if ($scope.selectedFlag && $scope.selectedFlag.name === country.name) {
                selected = " flagSelected";
            }
            return code.toLowerCase() + selected;
        };

        $scope.$watch("selectedFlag", function(country) {
            $scope.checkIfGameIsOver();
            if ($scope.selectedCountry && $scope.selectedFlag) {
                if ($scope.selectedCountry.name === $scope.selectedFlag.name) {
                    $scope.correctAnswers.push($scope.selectedCountry.name);
                    $scope.score++;
                } else {
                    $scope.badAnswers.push($scope.selectedCountry.name);
                    $scope.score--;
                }
                $scope.selectedFlag = undefined;
            }
        });

        $scope.$watch("selectedCountry", function(country) {
            $scope.checkIfGameIsOver();
            if ($scope.selectedCountry && $scope.selectedFlag) {
                if ($scope.selectedCountry.name === $scope.selectedFlag.name) {
                    $scope.correctAnswers.push($scope.selectedCountry.name);
                    $scope.score++;
                } else {
                    $scope.badAnswers.push($scope.selectedCountry.name);
                    $scope.score--;
                }
                $scope.selectedFlag = undefined;
            }
        });
    }]);

}());
