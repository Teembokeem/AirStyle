(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Lineup.view.module')
        .controller('LineupCtrl', LineupCtrl);

    LineupCtrl.$inject = ['$log', '$state', '$rootScope', '$stateParams', 'Artists', 'Tours'];

    function LineupCtrl($log, $state, $rootScope, $stateParams, Artists, Tours) {
        var cc = this;

        cc.codex = {
            la: 'Los Angeles',
            beijing: 'Beijing',
            innsbruck: 'Innsbruck'
        }
        cc.backState = $stateParams.tour;
        cc.backRef = cc.codex[cc.backState];

        cc.stateChange = stateChange;

        function stateChange(state, val) {
            val ? $state.go(state, { tour: val }) : $state.go(state);
        };

        cc.avatars = Artists($stateParams.tour);
        cc.tour = Tours($stateParams.tour);
    }
})();