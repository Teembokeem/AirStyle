var _riders;
(function () {
    'use strict';
    angular.module('BeijingContent.view.module')
        .component('beijingRankings', {
            bindings: {

            },
            templateUrl: 'views/beijing-content/beijing-rankings/beijing-rankings.html',
            controller: beijingRankingsCtrl,
            controllerAs: 'cc'
        })

    beijingRankingsCtrl.$inject = ['$log', '$state', '$stateParams', 'Riders'];

    function beijingRankingsCtrl($log, $state, $stateParams, Riders) {
        var cc = this;

        cc.borderButtonHover = false;
        cc.stateChange = stateChange;

        function stateChange(state, val) {
            val ? $state.go(state, { avatar: val }) : $state.go(state);
        }

        cc.$onInit = function () {
            var riders = Riders('all');
            var sortedRiders = riders.filter(function (rider) {
                return rider.scores['2016'].beijing.score != 'N/A'
            });
            sortedRiders = sortedRiders.sort(function (a, b) {
                return b.scores['2016'].beijing.score - a.scores['2016'].beijing.score
            });


            _riders = cc.riders;
            cc.beijingRankingsList = [sortedRiders[0], sortedRiders[1], sortedRiders[2]];
        }
    }
})();