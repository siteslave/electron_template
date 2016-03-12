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
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: './app/templates/main.html'
  })
  .state('login', {
    url: '/login',
    templateUrl: './app/templates/login.html'
  })
  .state('new', {
    url: '/new',
    templateUrl: './app/templates/new.html'
  })
  .state('report', {
    url: '/report',
    templateUrl: './app/templates/report.html'
  })
  .state('setting', {
    url: '/setting',
    templateUrl: './app/templates/setting.html'
  })
});