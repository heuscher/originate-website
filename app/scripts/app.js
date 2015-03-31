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
    'angular-velocity',
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
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
      })
      .state('services', {
        url: '/services',
        templateUrl: 'views/services.html',
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'views/portfolio.html',
      });
  });
