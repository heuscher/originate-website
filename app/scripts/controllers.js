'use strict';

/**
 * @ngdoc function
 * @name originateApp.controllers
 * @description
 * # OriginateApp.controllers
 * Controllers used in originateApp
 */

angular.module('originateApp.controllers', [])
  .controller('AppCtrl', function ($scope) {
    console.info('yo');
  })

  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
