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

    TourFaqCtrl.$inject = ['$log', '$state', '$stateParams'];

    function TourFaqCtrl($log, $state, $stateParams) {
        var cc = this;
        cc.tour = $stateParams.tour;
        cc.showContent = -1;
        cc.stateChange = stateChange;

        function stateChange(state, val) {
            if (state == 'app.faqs') $state.go(state, { tour: val });
            $state.go(state, { avatar: val });
        }

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