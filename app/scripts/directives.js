'use strict';

/**
 * @ngdoc function
 * @name originateApp.directives
 * @description
 * # OriginateApp.directives
 * Directives used in originateApp
 */

angular.module('originateApp.directives', [])
    .directive('parallaxMap', function() {
        function link(scope, element) {
            var parent = element.parent().parent().find('.selectedItem');

            element.on('click', function(event) {
                var target = angular.element(event.currentTarget);
                var value = target.children().text();
                parent.text(value);
            });
        }
        return {
            restrict: 'A',
            link: link
        };
    });
