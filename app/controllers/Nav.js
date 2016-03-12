'use strict';

angular.module('app.controllers.Nav', [])
.controller('NavCtrl', function ($scope, $state) {

  $scope.go = function (state) {
    $state.go(state);
  }

});