'use strict';

require('angular');
require('angular-ui-router');
require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');

angular.module('app', [
  'ui.router',
  'ngMaterial',
  'app.controllers.Nav',
  'app.controllers.Toolbar'
])

.config(($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: './templates/main.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: './templates/login.html'
  })
  .state('new', {
    url: '/new',
    templateUrl: './templates/new.html'
  })
  .state('report', {
    url: '/report',
    templateUrl: './templates/report.html'
  })
  .state('setting', {
    url: '/setting',
    templateUrl: './templates/setting.html'
  })
});