(function () {
    'use strict';
    angular.module('Faq.view.module')
        .component('faqFooter', {
            bindings: {

            },
            templateUrl: 'views/faq/faq-footer/faq-footer.html',
            controller: faqFooterCtrl,
            controllerAs: 'cc'
        })

    faqFooterCtrl.$inject = ['$log'];

    function faqFooterCtrl($log) {
        var cc = this;

        cc.$onInit = function () {
        }
    }
})();