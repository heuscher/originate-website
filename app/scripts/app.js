'use strict';

/**
 * @ngdoc overview
 * @name originateApp
 * @description
 * # originateApp
 *
 * Main module of the application.
 */
angular
  .module('originateApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'originateApp.services',
    'originateApp.directives',
    'originateApp.controllers'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/index.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  });
