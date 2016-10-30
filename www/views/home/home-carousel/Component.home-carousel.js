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

        cc.$onInit = function () {
            $log.instantiate('Home Carousel', 'Component Controller');

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
                            dest: 'app.there'
                        }
                    ],
                    image: 'img/slide1.jpeg'
                },
                {
                    title: 'AIR + STYLE LOS ANGELES FEBRUARY 18 + 19',
                    content: 'SIGN UP FOR PRESALE TICKETS',
                    buttons: [
                        {
                            label: '+ SIGN UP +',
                            dest: 'app.another'
                        }
                    ],
                    image: 'img/slide2.jpeg'
                }
            ]
        }
    }
})();