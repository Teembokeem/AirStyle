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
        }
    }
})();