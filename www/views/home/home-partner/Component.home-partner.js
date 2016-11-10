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
                    img: 'img/go90_LOGO.png',
                    // dim: 120,
                    link: 'http://www.go90.com'
                },
                // 'img/partner-2.png',
                {
                    img: 'img/coors-light-mountain-logo.png',
                    // dim: 100,
                    link: 'http://www.coors.com'
                },
                {
                    img: 'img/Stoli.png',
                    // dim: 120,
                    link: 'http://stoli.com/'
                },
                {
                    img: 'img/CLIF.png',
                    // dim: 100,
                    link: 'http://www.clifbar.com'
                },
                {
                    img: 'img/foro_logo-2.png',
                    // dim: 120,
                    link: 'http://www.theforo.com'
                },
                {
                    img: 'img/FLOOD_MAGAZINE_PRESENTS.png',
                    // dim: 120,
                    link: 'http://floodmagazine.com'
                },
                // {
                //     img: 'img/Halfpops-Logo---Horizontal-Reversed.png',
                //     // dim: 120,
                //     link: 'https://www.halfpops.com/'
                // },
            ];
        }
    }
})();