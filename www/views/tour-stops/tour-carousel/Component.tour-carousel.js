(function () {
    'use strict';
    angular.module('TourStops.view.module')
        .component('tourCarousel', {
            bindings: {

            },
            templateUrl: 'views/tour-stops/tour-carousel/tour-carousel.html',
            controller: TourCarouselCtrl,
            controllerAs: 'cc'
        })

    TourCarouselCtrl.$inject = ['$log', '$rootScope', '$window', '$scope'];

    function TourCarouselCtrl($log, $rootScope, $window, $scope) {
        var cc = this;

        cc.go = function (link) {
            window.location = link;
        };

        $scope.$watch(function () {
            return $window.innerWidth;
        }, function (a, b, c) {
            // console.log(a, b, c)
            if (a < 1024) {
                cc.mobile = true;
            } else {
                cc.mobile = false;
                // if (!$scope.$$phase) {
                //     $scope.$apply(function () {
                // if (!cc.mobile) {
                // cc.noNav = ;
                // }
                //     });
                // }
            }

        })

        cc.$onInit = function () {

            cc.slideContent = [
                {
                    lineup: [
                        ['BEGINNER', 'BIFFY CLYRO'],
                        ['BILDERBUCH', 'THE NAKED AND FAMOUS'],
                        ['FUNF STERNE DELUXE', 'LUCKY CHOPS'],
                        ['FAMOUSE DECK TEAM', 'WAX WRECKAZ', 'ND MANY MORE']
                    ],
                    logistics: 'FRI + SAT 4 FEBRUARY 2017 - OLYMPIAWORLD INNSBRUCK',
                    buttons: [
                        {
                            label: 'LEARN MORE',
                            dest: 'http://www.air-style.at'
                        },
                        {
                            label: 'BUY NOW',
                            dest: 'http://air-style.at/innsbruck2017/ticket-info-2017/innsbruck2017/ticket-info-2017/'
                        }
                    ]
                }
            ]
        }
    }
})();