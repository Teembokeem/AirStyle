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

    beijingRankingsCtrl.$inject = ['$log', '$stateParams', 'Riders'];

    function beijingRankingsCtrl($log, $stateParams, Riders) {
        var cc = this;

        cc.$onInit = function () {
            var riders = Riders('all');
            var sortedRiders = riders.sort(function (a, b) {
                return b.scores['2016'].beijing.score - a.scores['2016'].beijing.score
            });

            _riders = cc.riders;
            cc.beijingRankingsList = sortedRiders[0, 2];
        }
    }
})();