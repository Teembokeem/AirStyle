(function () {
    'use strict';
    angular.module('Template')
        .component('footer', {
            bindings: {

            },
            templateUrl: 'views/global-components/footer/footer.html',
            controller: FooterCtrl,
            controllerAs: 'cc'
        })

    FooterCtrl.$inject = ['$log'];

    function FooterCtrl($log) {
        var cc = this;

        cc.$onInit = function () {
        }
    }
})();