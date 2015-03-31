'use strict';

/**
 * @ngdoc function
 * @name originateApp.directives
 * @description
 * # OriginateApp.directives
 * Directives used in originateApp
 */

angular.module('originateApp.directives', [])
    .directive('starfield', ['$rootScope', '$document', 'ParallaxService', function($rootScope, $document, ParallaxService) {
        function link(scope, element) {

            scope.parallaxObj = ParallaxService.get();
            ParallaxService.add(element, -200, -200, 0.05);

            // $rootScope.$watch('person.id', function (newValue) {
            //     if (newValue !== undefined && newValue !== null) {
            //         $scope.products = [];
            //         AzureAPI.product.query({
            //             person: $rootScope.person.id,
            //             limit: 9,
            //         }).$promise.then(function(products) {
            //             products.forEach(function(product) {
            //                 $scope.products.push(new AzureProduct(product.code));
            //             });
            //         }, function(error) {
            //             alertService.add('warning', 'Failed to ' + error.config.method + ' products (' + error.status + ': ' + error.statusText + ')');
            //         });
            //     }
            // });

            // Detect if the browser is IE or not.
            // If it is not IE, we assume that the browser is NS.
            var IE = document.all ? true : false;

            // If NS -- that is, !IE -- then set up for mouse capture
            if (!IE) { document.captureEvents(Event.MOUSEMOVE); }

            // Temporary variables to hold mouse x-y pos.s
            var tempX = 0;
            var tempY = 0;

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

            // function fillstarfield() {
            //     var bgDiv = element[0].querySelector('#starfield-bg');
            //     var bgX = 0;
            //     var bgY = 0;
            //     var bgFactor = 0.25; //parallax shift factor, the bigger the value, the more it shift for parallax movement
            //     var bgArray = [];
            //     bgArray.push(bgDiv, bgX, bgY, bgFactor);
            //     scope.parallaxObject.push(bgArray);

            //     var introDiv = element[0].querySelector('#intro');
            //     var introX = 0;
            //     var introY = (scope.windowHeight / 2) - (angular.element(introDiv)[0].clientHeight / 2);
            //     var introFactor = 0.05;
            //     var introArray = [];
            //     introArray.push(introDiv, introX, introY, introFactor);
            //     scope.parallaxObject.push(introArray);
            // }

            // function positionDivs() {
            //     for (var i=0;i<scope.parallaxObject.length;i++) {
            //         angular.element(scope.parallaxObject[i][0]).css('left', scope.parallaxObject[i][1] + 'px');
            //         angular.element(scope.parallaxObject[i][0]).css('top', scope.parallaxObject[i][2] + 'px');
            //     }
            // }

            $document.on('mousemove', getMouseXY);

            // fillstarfield();
            // positionDivs();

            function moveDiv(tempX, tempY) {
                for (var i=0;i<scope.parallaxObj.length;i++) {
                    var newPosX = scope.parallaxObj[i][3] * (0.5 * scope.windowWidth - (tempX * -1)) + scope.parallaxObj[i][1];
                    var newPosY = scope.parallaxObj[i][3] * (0.5 * scope.windowHeight - (tempY * -1)) + scope.parallaxObj[i][2];
                    // angular.element(scope.parallaxObj[i][0]).css('left', newPosX + 'px');
                    // angular.element(scope.parallaxObj[i][0]).css('top', newPosY + 'px');
                    angular.element(scope.parallaxObj[i][0]).css('background-position', newPosX + 'px ' + newPosY + 'px');
                }
            }

        }
        return {
            // controller: controller,
            restrict: 'A',
            link: link
        };
    }])

    .directive('intro', ['$rootScope', '$document', 'ParallaxService', function($rootScope, $document, ParallaxService) {
        function link(scope, element) {

            var introHeight = (scope.windowHeight / 2) - (angular.element(element)[0].clientHeight / 2);
            console.info(introHeight);

            scope.parallaxObj = ParallaxService.get();
            ParallaxService.add(element, 0, introHeight, 0.05);

            // $rootScope.$watch('person.id', function (newValue) {
            //     if (newValue !== undefined && newValue !== null) {
            //         $scope.products = [];
            //         AzureAPI.product.query({
            //             person: $rootScope.person.id,
            //             limit: 9,
            //         }).$promise.then(function(products) {
            //             products.forEach(function(product) {
            //                 $scope.products.push(new AzureProduct(product.code));
            //             });
            //         }, function(error) {
            //             alertService.add('warning', 'Failed to ' + error.config.method + ' products (' + error.status + ': ' + error.statusText + ')');
            //         });
            //     }
            // });

            // Detect if the browser is IE or not.
            // If it is not IE, we assume that the browser is NS.
            var IE = document.all ? true : false;

            // If NS -- that is, !IE -- then set up for mouse capture
            if (!IE) { document.captureEvents(Event.MOUSEMOVE); }

            // Temporary variables to hold mouse x-y pos.s
            var tempX = 0;
            var tempY = 0;

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

            // function fillstarfield() {
            //     var bgDiv = element[0].querySelector('#starfield-bg');
            //     var bgX = 0;
            //     var bgY = 0;
            //     var bgFactor = 0.25; //parallax shift factor, the bigger the value, the more it shift for parallax movement
            //     var bgArray = [];
            //     bgArray.push(bgDiv, bgX, bgY, bgFactor);
            //     scope.parallaxObject.push(bgArray);

            //     var introDiv = element[0].querySelector('#intro');
            //     var introX = 0;
            //     var introY = (scope.windowHeight / 2) - (angular.element(introDiv)[0].clientHeight / 2);
            //     var introFactor = 0.05;
            //     var introArray = [];
            //     introArray.push(introDiv, introX, introY, introFactor);
            //     scope.parallaxObject.push(introArray);
            // }

            // function positionDivs() {
            //     for (var i=0;i<scope.parallaxObject.length;i++) {
            //         angular.element(scope.parallaxObject[i][0]).css('left', scope.parallaxObject[i][1] + 'px');
            //         angular.element(scope.parallaxObject[i][0]).css('top', scope.parallaxObject[i][2] + 'px');
            //     }
            // }

            $document.on('mousemove', getMouseXY);

            // fillstarfield();
            // positionDivs();

            function moveDiv(tempX, tempY) {
                for (var i=0;i<scope.parallaxObj.length;i++) {
                    var newPosX = scope.parallaxObj[i][3] * (0.5 * scope.windowWidth - tempX) + scope.parallaxObj[i][1];
                    var newPosY = scope.parallaxObj[i][3] * (0.5 * scope.windowHeight - tempY) + scope.parallaxObj[i][2];
                    angular.element(scope.parallaxObj[i][0]).css('left', newPosX + 'px');
                    angular.element(scope.parallaxObj[i][0]).css('top', newPosY + 'px');
                }
            }

        }
        return {
            // controller: controller,
            restrict: 'A',
            link: link
        };
    }]);
