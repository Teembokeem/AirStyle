(function () {
    'use strict';
    angular.module('Template')
        .component('branding', {
            bindings: {

            },
            templateUrl: 'views/global-components/branding/branding.html',
            controller: brandingCtrl,
            controllerAs: 'cc'
        })

    brandingCtrl.$inject = ['$log'];

    function brandingCtrl($log) {
        var cc = this;

        cc.$onInit = function () {
        }
    }
})();