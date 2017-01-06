(function () {
    'use strict';
    angular.module('Faq.view.module')
        .component('faqBanlist', {
            bindings: {

            },
            templateUrl: 'views/faq/faq-banlist/faq-banlist.html',
            controller: faqBanlistCtrl,
            controllerAs: 'cc'
        })

    faqBanlistCtrl.$inject = ['$log', 'Tours', '$stateParams'];

    function faqBanlistCtrl($log, Tours, $stateParams) {
        var cc = this;

        cc.$onInit = function () {
            cc.faqBanlistContent = Tours($stateParams.tour).faq_banlist;
        }
    }
})();