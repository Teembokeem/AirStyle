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
            console.log('GOING TO ', link)
            window.location = link;
        };

        cc.$onInit = function () {

            cc.slideContent = [
                {
                    title: 'INNSBRUCK-TIROL TICKETS',
                    content: 'ON SALE NOW',
                    buttons: [
                        {
                            label: 'LEARN MORE',
                            dest: 'app.here'
                        },
                        {
                            label: 'BUY NOW',
                            dest: 'https://frontoffice.paylogic.nl/flows/MTAuMTAwLjIuMyw1Niw3MTU3ZjZlNGQzNDA0YjlmOGIzZmI2NDFjMmQ4MmJjMyxlYTVhNzBiNGEzMzIyNWRkZmU3ZjZhYmI0M2Q5YmFjZg/Tickets/'
                        }
                    ],
                    image: 'img/slide1.jpg'
                },
                {
                    title: 'AIR + STYLE LOS ANGELES FEBRUARY 18 + 19',
                    content: 'SIGN UP FOR PRESALE TICKETS',
                    buttons: [
                        {
                            label: 'LEARN MORE',
                            dest: 'app.here'
                        },
                        {
                            label: 'BUY NOW',
                            dest: 'https://airandstyle.frontgatetickets.com/'
                        }
                    ],
                    image: 'img/slide2.jpg'
                }
            ]
        }
    }
})();