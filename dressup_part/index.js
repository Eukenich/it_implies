angular.module("dress", [])
    .controller("dressCtrl", function ($scope, $timeout) {
        $scope.clothes_layer=0
        $scope.clothes_type=0
        $scope.character = {
            body :1
        }
        $scope.body_color=[
            '../img/body/01.png',
            '../img/body/02.png',
            '../img/body/03.png',
            '../img/body/04.png',
            '../img/body/05.png',
            '../img/body/06.png',
            '../img/body/07.png',
            '../img/body/08.png'
        ]
        $scope.countArt = function () {

            $timeout($scope.countArt, 1000);
        };
        $scope.load = function () {

        }
        $scope.load()

    });