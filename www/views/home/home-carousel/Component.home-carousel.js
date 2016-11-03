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

    HomeCarouselCtrl.$inject = ['$log'];

    function HomeCarouselCtrl($log) {
        var cc = this;

        cc.go = function (link) {
            window.location = link;
        };

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
                }
            ]
        }
    }
})();