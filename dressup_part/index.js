angular.module("dress", [])
    .controller("dressCtrl", function ($scope, $timeout) {
        $scope.clothes_layer=0
        $scope.clothes_type=0
        $scope.character = {
            body :'../img/body/02.png'
        }
        $scope.countArt = function () {

            $timeout($scope.countArt, 1000);
        };
        $scope.load = function () {

        }
        $scope.load()

    });