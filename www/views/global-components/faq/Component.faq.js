(function () {
    'use strict';
    angular.module('Template')
        .component('faq', {
            bindings: {

            },
            templateUrl: 'views/global-components/faq/faq.html',
            controller: FaqCtrl,
            controllerAs: 'cc'
        })

    FaqCtrl.$inject = ['$log'];

    function FaqCtrl($log) {
        var cc = this;
        cc.showContent = -1;

        cc.$onInit = function () {

            cc.faqContent = [
                {
                    question: 'AT WHAT TIME DO THE DOORS OPEN?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'IS THE FESTIVAL FOR ALL AGES?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'WHERE DO I ENTER?',
                    answer: '- - - - - - - - - - - - - -'
                },
            ]
        }
    }
})();