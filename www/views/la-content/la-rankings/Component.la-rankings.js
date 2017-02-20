var _riders;
(function () {
    'use strict';
    angular.module('LaContent.view.module')
        .component('laRankings', {
            bindings: {

            },
            templateUrl: 'views/la-content/la-rankings/la-rankings.html',
            controller: laRankingsCtrl,
            controllerAs: 'cc'
        })

    laRankingsCtrl.$inject = ['$log', '$state', '$stateParams', 'Riders'];

    function laRankingsCtrl($log, $state, $stateParams, Riders) {
        var cc = this;

        cc.borderButtonHover = false;
        cc.stateChange = stateChange;

        function stateChange(state, val) {
            val ? $state.go(state, {
                avatar: val
            }) : $state.go(state);
        }

        cc.$onInit = function () {
            var riders = Riders('all');
            var sortedRiders = riders.filter(function (rider) {
                console.log(rider.scores['2017'].la.score_trick)
                return rider.scores['2017'] ? rider.scores['2017'].la.score_trick != null || undefined : false;
            });

            console.log(sortedRiders)
            sortedRiders = sortedRiders.sort(function (a, b) {
                return b.scores['2017'].la.score_trick - a.scores['2017'].la.score_trick
            });

            // var sortedRiders = riders.filter(function (rider) {
            //     return rider.scores['2017'] ? rider.scores['2017'].innsbruck.score != 'N/A' : false;
            // });

            // sortedRiders = sortedRiders.sort(function (a, b) {
            //     return b.scores['2017'].innsbruck.score - a.scores['2017'].innsbruck.score
            // });


            _riders = cc.riders;
            cc.laRankingsList = sortedRiders;
        }
    }
})();
