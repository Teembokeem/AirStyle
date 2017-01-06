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

    TourFaqCtrl.$inject = ['$log', '$state', '$stateParams', 'Tours'];

    function TourFaqCtrl($log, $state, $stateParams, Tours) {
        var cc = this;
        cc.tour = $stateParams.tour;
        cc.showContent = -1;
        cc.stateChange = stateChange;

        function stateChange(state, val) {
            $state.go(state, { tour: val });
        }

        cc.$onInit = function () {
            var tourFaq = Tours(cc.tour).faq_general;
            cc.faqContent = tourFaq.filter(function (faq) {
                return faq.main ? true : false
            })
        }
    }
})();