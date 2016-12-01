(function() {
    'use strict';
    angular.module('Home.view.module')
        .component('homeCarousel', {
            bindings: {

            },
            templateUrl: 'views/home/home-carousel/home-carousel.html',
            controller: HomeCarouselCtrl,
            controllerAs: 'cc'
        })

    HomeCarouselCtrl.$inject = ['$log', '$rootScope', '$window', '$scope', '$ionicSlideBoxDelegate'];

    function HomeCarouselCtrl($log, $rootScope, $window, $scope, $ionicSlideBoxDelegate) {
        var cc = this;
        $scope.$watch(function() {
            return $window.innerWidth;
        }, function(a, b, c) {
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

        cc.go = go;
        cc.moveSlide = moveSlide;

        function go(link) {
            window.location = link;
        };

        function moveSlide(index) {
            $ionicSlideBoxDelegate.$getByHandle('carousel').slide(index, 500);
            setTimeout(function() {
                $ionicSlideBoxDelegate.$getByHandle('carousel').stop();
                setTimeout(function() {

                    $ionicSlideBoxDelegate.$getByHandle('carousel').start();
                }, 4000);
            }, 600);

        }



        cc.$onInit = function() {

            cc.slideContent = [
                {
                    title: 'LOS ANGELES TICKETS',
                    content: 'ON SALE NOW',
                    buttons: [
                        {
                            label: 'Learn More',
                            dest: 'http://www.air-style.at'
                        },
                        {
                            label: 'Buy Now',
                            dest: 'https://airandstyle.frontgatetickets.com/'
                        }
                    ],
                    image: 'img/slide2.jpg'
                },
                {
                    title: 'INNSBRUCK -TIROL TICKETS',
                    content: 'ON SALE NOW',
                    buttons: [
                        {
                            label: 'Learn More',
                            dest: 'http://www.air-style.at'
                        },
                        {
                            label: 'Buy Now',
                            dest: 'http://air-style.at/innsbruck2017/ticket-info-2017/'
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
                    ['MARIAN HILL', 'THE SHELTERS', 'XYL0'],
                    ['PHANTOMS', 'POWERS', 'RKCB', '070 SHAKE'],
                ],
                plus: '../img/plus.png',
                content: "THE WORLD’S BEST SNOWBOARDERS COMPETING ON A 16-STORY JUMP",
                date: 'Feb 10 + 14 Expo Park DTLA'
            }
        }
    }
})();