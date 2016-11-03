(function () {
    'use strict';
    angular.module('Template')
        .component('mobileMenu', {
            templateUrl: 'views/global-components/mobile-menu/mobile-menu.html',
            controller: MobileMenuCtrl,
            controllerAs: 'cc'
        })

    MobileMenuCtrl.$inject = ['$log'];

    function MobileMenuCtrl($log) {
        var cc = this;
        cc.noNav = true;
        cc.toggleNav = function () {
            cc.noNav = !cc.noNav;
        };

        cc.$onInit = function () {
            cc.events = [
                {
                    name: 'BEIJING',
                    color: '#62ff00',
                    date: 'NOV 18 + 19'
                },
                {
                    name: 'INNSBRUCK',
                    color: '#f9fe17',
                    date: 'FEB 3 + 4'
                },
                {
                    name: 'LOS ANGELES',
                    color: '#40caff',
                    date: 'FEB 10 + 14'
                }
            ];
        }
    }
})();