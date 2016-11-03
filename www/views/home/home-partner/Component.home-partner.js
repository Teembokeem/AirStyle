(function () {
    'use strict';
    angular.module('Home.view.module')
        .component('homePartner', {
            bindings: {

            },
            templateUrl: 'views/home/home-partner/home-partner.html',
            controller: HomePartnerCtrl,
            controllerAs: 'cc'
        })

    HomePartnerCtrl.$inject = ['$log'];

    function HomePartnerCtrl($log) {
        var cc = this;

        cc.$onInit = function () {

            cc.partnerContent = [
                {
                    img: 'img/go90_LOGO.jpg',
                    dim: 120
                },
                // 'img/partner-2.png',
                {
                    img: 'img/coors-light-mountain-logo.png',
                    dim: 100
                },
                {
                    img: 'img/Stoli.jpg',
                    dim: 120
                },
                {
                    img: 'img/CLIF.JPG',
                    dim: 100
                },
                {
                    img: 'img/foro_logo-2.png',
                    dim: 120
                },
                {
                    img: 'img/FLOOD_MAGAZINE_PRESENTS.png',
                    dim: 120
                },
            ];
        }
    }
})();