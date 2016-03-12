'use strict';

angular.module('app.controllers.Toolbar', [])
.controller('ToolbarCtrl', function ($scope, $mdSidenav) {
  $scope.toggleLeft = function () {
    $mdSidenav('left')
      .toggle();
  }
});