'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', 'ImageSol', function ($scope, Global, ImageSol) {
    $scope.global = Global;
    $scope.logo = ImageSol.logo;
}]);