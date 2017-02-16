var _riders;
(function () {
    'use strict';
    angular.module('InnsbruckContent.view.module')
        .component('innsbruckRankings', {
            bindings: {

            },
            templateUrl: 'views/innsbruck-content/innsbruck-rankings/innsbruck-rankings.html',
            controller: innsbruckRankingsCtrl,
            controllerAs: 'cc'
        })

    innsbruckRankingsCtrl.$inject = ['$log', '$state', '$stateParams', 'Riders'];

    function innsbruckRankingsCtrl($log, $state, $stateParams, Riders) {
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
                console.log(rider.scores['2017'].innsbruck.score_trick)
                return rider.scores['2017'] ? rider.scores['2017'].innsbruck.score_trick != null || undefined : false;
            });

            console.log(sortedRiders)
            sortedRiders = sortedRiders.sort(function (a, b) {
                return b.scores['2017'].innsbruck.score_trick - a.scores['2017'].innsbruck.score_trick
            });


            _riders = cc.riders;
            cc.innsbruckRankingsList = sortedRiders;
        }
    }
})();
