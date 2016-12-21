(function () {
    'use strict';
    angular.module('Template')
        .component('partners', {
            bindings: {

            },
            templateUrl: 'views/global-components/partners/partners.html',
            controller: partnersCtrl,
            controllerAs: 'cc'
        })

    partnersCtrl.$inject = ['$log', '$window'];

    function partnersCtrl($log, $window) {
        var cc = this;
        cc.touchScreen;

        cc.$onInit = function () {
            $window.innerWidth < 1024 ? cc.touchScreen = true : cc.touchScreen = false;
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
                }
            ];
        }
    }
})();