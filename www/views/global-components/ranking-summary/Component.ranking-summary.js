(function () {
    'use strict';
    angular.module('Template')
        .component('rankingSummary', {
            bindings: {

            },
            templateUrl: 'views/global-components/ranking-summary/ranking-summary.html',
            controller: RankingSummaryCtrl,
            controllerAs: 'cc'
        })

    RankingSummaryCtrl.$inject = ['$log', 'Riders'];

    function RankingSummaryCtrl($log, Riders) {
        var cc = this;

        cc.$onInit = function () {
            var riders = Riders();

            cc.riders = riders;
        }
    }
})();