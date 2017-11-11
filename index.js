angular.module("app", [])
    .controller("appCtrl", function ($scope, $timeout) {
        $scope.scout_list = [{num: '1', name: 'Rand name 1', depth: 0}]
        $scope.countArt = function () {
            $scope.money++;
            $scope.artifact_layer_1_count= $scope.artifact_layer_1_count +$scope.layer_1.length
            $scope.artifact_layer_2_count= $scope.artifact_layer_2_count +$scope.layer_2.length
            $scope.artifact_layer_3_count= $scope.artifact_layer_3_count +$scope.layer_3.length
            $timeout($scope.countArt, 1000);
        };
        $scope.addEmployee = () => {
            $scope.scout_list.push({
                num: $scope.scout_list.length + 1,
                name: `Rand name ${$scope.scout_list.length + 1}`,
                depth: 0
            })
        }
        $scope.changeLayer = (index, layer) => {
            const depth = $scope.scout_list[index].depth
            if (depth)  $scope[`layer_${depth}`]=$scope[`layer_${depth}`].filter(el => el.index !== index)
            if (layer) $scope[`layer_${layer}`].push({
                index: index,
                name: $scope.scout_list[index].name
            })
            $scope.scout_list[index].depth = layer
        }
        $scope.load = function () {
            $scope.layer_1 = []
            $scope.layer_2 = []
            $scope.layer_3 = []
            $scope.artifact_layer_1_count = 0
            $scope.artifact_layer_2_count = 0
            $scope.artifact_layer_3_count = 0
            $scope.artifact_layer_1 = []
            $scope.artifact_layer_2 = []
            $scope.artifact_layer_3 = []
            $scope.money = 0;
            $scope.countArt();
        }
        $scope.load()

    });