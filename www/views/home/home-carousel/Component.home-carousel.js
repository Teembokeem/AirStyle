(function () {
    'use strict';
    angular.module('Home.view.module')
        .component('homeCarousel', {
            bindings: {

            },
            templateUrl: 'views/home/home-carousel/home-carousel.html',
            controller: HomeCarouselCtrl,
            controllerAs: 'cc'
        })

    HomeCarouselCtrl.$inject = ['$log', '$rootScope', '$window', '$scope'];

    function HomeCarouselCtrl($log, $rootScope, $window, $scope) {
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
                    title: 'LOS ANGELES TICKETS',
                    content: 'ON SALE NOW',
                    buttons: [
                        {
                            label: 'LEARN MORE',
                            dest: 'http://www.air-style.at'
                        },
                        {
                            label: 'BUY NOW',
                            dest: 'https://airandstyle.frontgatetickets.com/'
                        }
                    ],
                    image: 'img/slide2.jpg'
                },
                {
                    title: 'INNSBRUCK-TIROL TICKETS',
                    content: 'ON SALE NOW',
                    buttons: [
                        {
                            label: 'LEARN MORE',
                            dest: 'http://www.air-style.at'
                        },
                        {
                            label: 'BUY NOW',
                            dest: 'https://frontoffice.paylogic.nl/flows/MTAuMTAwLjIuMyw1Niw3MTU3ZjZlNGQzNDA0YjlmOGIzZmI2NDFjMmQ4MmJjMyxlYTVhNzBiNGEzMzIyNWRkZmU3ZjZhYmI0M2Q5YmFjZg/Tickets/'
                        }
                    ],
                    image: 'img/slide1.jpg'
                },
            ]

            cc.customSlide = {

                title: [
                    ['MAJOR LAZER', 'FLUME'],
                    ['ZHU', 'CHROMEO', 'ATMOSPHERE', 'YG'],
                    ['TV ON THE RADIO', 'VINCE STAPLES', 'RUSS'],
                    ['LOUIS THE CHILD', 'VIC MENSA', 'ST. LUCIA'],
                    ['MARIAN HILL', 'THE SHELTERS', 'XYL0', 'PHANTOMS'],
                    ['POWERS', 'RKCB', '070 SHAKE'],
                ],
                plus: '../img/plus.png',
                content: "THE WORLD’S BEST SNOWBOARDERS COMPETING ON A 16-STORY JUMP",
                date: 'FEB 18 + 19 Expo Park DTLA'
            }
        }
    }
})();