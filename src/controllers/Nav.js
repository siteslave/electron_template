'use strict';

angular.module('app.controllers.Nav', [])
.controller('NavCtrl', ($scope, $state) => {

  $scope.go = (state) => {
    $state.go(state);
  }

});