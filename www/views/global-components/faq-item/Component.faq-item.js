var _pdf;
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

    FaqItemCtrl.$inject = ['$log', '$scope', '$rootScope'];

    function FaqItemCtrl($log, $scope, $rootScope) {
        var cc = this;
        cc.showContent = -1;

        cc.$onInit = function () {

        }
    }
})();