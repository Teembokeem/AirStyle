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

    RankingSummaryCtrl.$inject = ['$log', 'Riders', '$state'];

    function RankingSummaryCtrl($log, Riders, $state) {
        var cc = this;


        cc.stateChange = stateChange;
        cc.darkenRider = -1;
        cc.borderButtonHover = false;

        function stateChange(state, val) {
            val ? $state.go(state, { avatar: val }) : $state.go(state);
        }



        cc.$onInit = function () {
            var riders = Riders('all');

            cc.riders = riders;
        }
    }
})();