'use strict';

/**
 * @ngdoc function
 * @name originateApp.controllers
 * @description
 * # OriginateApp.controllers
 * Controllers used in originateApp
 */

angular.module('originateApp.controllers', [])
  .controller('AppCtrl', ['$scope', '$window', function ($scope, $window) {
    $scope.windowWidth = $window.innerWidth;
    $scope.windowHeight = $window.innerHeight;
  }])

  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });