(function () {
    'use strict';
    angular.module('Faq.view.module')
        .component('faqHeader', {
            bindings: {

            },
            templateUrl: 'views/faq/faq-header/faq-header.html',
            controller: faqHeaderCtrl,
            controllerAs: 'cc'
        })

    faqHeaderCtrl.$inject = ['$log', 'Tours', '$stateParams'];

    function faqHeaderCtrl($log, Tours, $stateParams) {
        var cc = this;

        cc.$onInit = function () {
            cc.faqHeaderContent = Tours($stateParams.tour);
        }
    }
})();