'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', 'ImageSol', function ($scope, Global, ImageSol, AlertDemoCtrl) {
    $scope.global = Global;
    $scope.logo = ImageSol.logo;
      $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success round', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
}]);
