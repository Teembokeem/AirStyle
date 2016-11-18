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

    faqGeneralCtrl.$inject = ['$log'];

    function faqGeneralCtrl($log) {
        var cc = this;

        cc.$onInit = function () {
            cc.faqGeneralContent = [
                {
                    question: 'Where is the Air+Style Los Angeles Festival located?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'What are the festival hours?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'What are the box office hours?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'Can any age guest attend this festival?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'Will there be lockers at the festival?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'Is the festival handicap accessible?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'Will there be food at the festival?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'Do vendors accept debit/credit cards?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'What does the "cashless" option mean and how do I add funds?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'Where can I get a program guide?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'Where can I find a festival map?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'Is there parking available at the festival?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'What is the nearest metro stop/bus stop to the festival entrance?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'Will the festival stay open if there is rain?',
                    answer: '- - - - - - - - - - - - - -'
                },
                {
                    question: 'I lost something inside, what do I do?',
                    answer: '- - - - - - - - - - - - - -'
                },
            ]
        }
    }
})();