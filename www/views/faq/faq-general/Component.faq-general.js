(function () {
    'use strict';
    angular.module('Faq.view.module')
        .component('faqGeneral', {
            bindings: {

            },
            templateUrl: 'views/faq/faq-general/faq-general.html',
            controller: faqGeneralCtrl,
            controllerAs: 'cc'
        })

    faqGeneralCtrl.$inject = ['$log', 'Tours', '$stateParams'];

    function faqGeneralCtrl($log, Tours, $stateParams) {
        var cc = this;

        cc.$onInit = function () {
            cc.faqGeneralContent = Tours($stateParams.tour).faq_general;
        }
    }
})();