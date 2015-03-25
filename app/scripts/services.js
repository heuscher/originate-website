'use strict';

/**
 * @ngdoc function
 * @name originateApp.services
 * @description
 * # OriginateApp.services
 * Services used in originateApp
 */

angular.module('originateApp.services', [])
    .factory('ParallaxService', ['$rootScope', function($rootScope) {
        var self = {};
        $rootScope.parallaxItems = [];

        var setPositions = function() {
            for ( var i = 0; i < $rootScope.parallaxItems.length; i++) {
                angular.element($rootScope.parallaxItems[i][0]).css('left', $rootScope.parallaxItems[i][1] + 'px');
                angular.element($rootScope.parallaxItems[i][0]).css('top', $rootScope.parallaxItems[i][2] + 'px');
            }
            console.info($rootScope.parallaxItems);
        };

        self.get = function() {
            return $rootScope.parallaxItems;
        };

        self.add = function(element, posX, posY, factor) {
            var elementDiv = angular.element(element[0]);
            var newArray = [];
            newArray.push(elementDiv, posX, posY, factor);
            $rootScope.parallaxItems.push(newArray);
            setPositions();
        };

        // self.move = function() {
        //     console.info($rootScope.parallaxItems);
        //     for (var i = 0; i < $rootScope.parallaxItems.length; i++) {
        //         var newPosX = $rootScope.parallaxItems[i][3] * (0.5 * scope.windowWidth - tempX) + $rootScope.parallaxItems[i][1];
        //         var newPosY = $rootScope.parallaxItems[i][3] * (0.5 * scope.windowHeight - tempY) + $rootScope.parallaxItems[i][2];
        //         angular.element($rootScope.parallaxItems[i][0]).css('left', newPosX + 'px');
        //         angular.element($rootScope.parallaxItems[i][0]).css('top', newPosY + 'px');
        //     }
        // };

        return self;
    }]);