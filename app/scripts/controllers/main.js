'use strict';

/**
 * @ngdoc function
 * @name originateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the originateApp
 */
angular.module('originateApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
