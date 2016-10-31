(function () {
    'use strict';
    angular.module('Home.view.module')
        .component('homeBranding', {
            bindings: {

            },
            templateUrl: 'views/home/home-branding/home-branding.html',
            controller: HomeBrandingCtrl,
            controllerAs: 'cc'
        })

    HomeBrandingCtrl.$inject = ['$log'];

    function HomeBrandingCtrl($log) {
        var cc = this;

        cc.$onInit = function () {
            $log.instantiate('Home Branding', 'Component Controller');
        }
    }
})();