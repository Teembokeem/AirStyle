(function () {
    'use strict';
    angular.module('TourStops.view.module')
        .component('tourFaq', {
            bindings: {

            },
            templateUrl: 'views/tour-stops/tour-faq/tour-faq.html',
            controller: TourFaqCtrl,
            controllerAs: 'cc'
        })

    TourFaqCtrl.$inject = ['$log'];

    function TourFaqCtrl($log) {
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