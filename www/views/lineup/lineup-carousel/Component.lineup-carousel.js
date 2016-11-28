(function () {
    'use strict';
    angular.module('Lineup.view.module')
        .component('lineupCarousel', {
            bindings: {

            },
            templateUrl: 'views/lineup/lineup-carousel/lineup-carousel.html',
            controller: lineupCarouselCtrl,
            controllerAs: 'cc'
        })

    lineupCarouselCtrl.$inject = ['$log', '$rootScope', '$window', '$scope'];

    function lineupCarouselCtrl($log, $rootScope, $window, $scope) {
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
                    logistics: 'FRI 3 + SAT 4 FEBRUARY 2017 - OLYMPIAWORLD INNSBRUCK',
                    buttons: [
                        {
                            label: 'BUY NOW',
                            dest: 'http://air-style.at/innsbruck2017/ticket-info-2017/'
                        },
                        {
                            label: 'SCHEDULE',
                            dest: ''
                        }
                    ]
                }
            ]
        }
    }
})();