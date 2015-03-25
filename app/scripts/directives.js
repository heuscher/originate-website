'use strict';

/**
 * @ngdoc function
 * @name originateApp.directives
 * @description
 * # OriginateApp.directives
 * Directives used in originateApp
 */

angular.module('originateApp.directives', [])
    .directive('starfield', ['$document', function($document) {
        function link(scope, element) {
            // var intro = element[0].querySelector('#intro');

            // Detect if the browser is IE or not.
            // If it is not IE, we assume that the browser is NS.
            var IE = document.all ? true : false;

            // If NS -- that is, !IE -- then set up for mouse capture
            if (!IE) { document.captureEvents(Event.MOUSEMOVE); }

            // Temporary variables to hold mouse x-y pos.s
            var tempX = 0;
            var tempY = 0;
            var objectArray = [];

            // Main function to retrieve mouse x-y pos.s
            function getMouseXY(e) {
                console.info('mousexy fire');
                if (IE) {
                    // grab the x-y pos.s if browser is IE
                    tempX = event.clientX + document.body.scrollLeft;
                    tempY = event.clientY + document.body.scrollTop;
                } else {
                    // grab the x-y pos.s if browser is NS
                    tempX = e.pageX;
                    tempY = e.pageY;
                }
                // catch possible negative values in NS4
                if (tempX < 0){tempX = 0;}
                if (tempY < 0){tempY = 0;}

                moveDiv(tempX, tempY);

                return true;
            }

            function fillObjectArray() {
                var introDiv = element[0].querySelector('#intro');
                var introX = 0; //position div from half width of the page
                var introY = (scope.windowHeight / 2) - (angular.element(introDiv)[0].clientHeight / 2);
                var introFactor = 0.05; //parallax shift factor, the bigger the value, the more it shift for parallax movement
                var introArray = [];
                introArray.push(introDiv, introX, introY, introFactor);
                objectArray.push(introArray);
            }

            function positionDivs() {
                for (var i=0;i<objectArray.length;i++) {
                    angular.element(objectArray[i][0]).css('left', objectArray[i][1] + 'px');
                    angular.element(objectArray[i][0]).css('top', objectArray[i][2] + 'px');
                }
            }

            $document.on('mousemove', getMouseXY);

            fillObjectArray();
            positionDivs();

            function moveDiv(tempX, tempY) {
               for (var i=0;i<objectArray.length;i++) {
                    var yourDivPositionX = objectArray[i][3] * (0.5 * scope.windowWidth - tempX) + objectArray[i][1];
                    var yourDivPositionY = objectArray[i][3] * (0.5 * scope.windowHeight - tempY) + objectArray[i][2];
                    angular.element(objectArray[i][0]).css('left', yourDivPositionX + 'px');
                    angular.element(objectArray[i][0]).css('top', yourDivPositionY + 'px');
                }
            }

        }
        return {
            // controller: controller,
            restrict: 'A',
            link: link
        };
    }]);
