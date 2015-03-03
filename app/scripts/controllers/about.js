'use strict';

/**
 * @ngdoc function
 * @name originateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the originateApp
 */
angular.module('originateApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
