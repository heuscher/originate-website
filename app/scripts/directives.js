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
            var starfield = [];

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

            function fillstarfield() {
                var bgDiv = element[0].querySelector('#starfield-bg');
                var bgX = 0;
                var bgY = 0;
                var bgFactor = 0.25; //parallax shift factor, the bigger the value, the more it shift for parallax movement
                var bgArray = [];
                bgArray.push(bgDiv, bgX, bgY, bgFactor);
                starfield.push(bgArray);

                var introDiv = element[0].querySelector('#intro');
                var introX = 0;
                var introY = (scope.windowHeight / 2) - (angular.element(introDiv)[0].clientHeight / 2);
                var introFactor = 0.05;
                var introArray = [];
                introArray.push(introDiv, introX, introY, introFactor);
                starfield.push(introArray);
            }

            function positionDivs() {
                for (var i=0;i<starfield.length;i++) {
                    angular.element(starfield[i][0]).css('left', starfield[i][1] + 'px');
                    angular.element(starfield[i][0]).css('top', starfield[i][2] + 'px');
                }
            }

            $document.on('mousemove', getMouseXY);

            fillstarfield();
            positionDivs();

            function moveDiv(tempX, tempY) {
               for (var i=0;i<starfield.length;i++) {
                    var yourDivPositionX = starfield[i][3] * (0.5 * scope.windowWidth - tempX) + starfield[i][1];
                    var yourDivPositionY = starfield[i][3] * (0.5 * scope.windowHeight - tempY) + starfield[i][2];
                    angular.element(starfield[i][0]).css('left', yourDivPositionX + 'px');
                    angular.element(starfield[i][0]).css('top', yourDivPositionY + 'px');
                }
            }

        }
        return {
            // controller: controller,
            restrict: 'A',
            link: link
        };
    }]);
