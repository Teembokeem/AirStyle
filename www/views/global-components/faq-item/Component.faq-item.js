(function () {
    'use strict';
    angular.module('Template')
        .component('faqItem', {
            bindings: {
                question: '=',
                index: '='
            },
            templateUrl: 'views/global-components/faq-item/faq-item.html',
            controller: FaqItemCtrl,
            controllerAs: 'cc'
        })

    FaqItemCtrl.$inject = ['$log'];

    function FaqItemCtrl($log) {
        var cc = this;
        cc.showContent = -1;

        cc.$onInit = function () {
        }
    }
})();