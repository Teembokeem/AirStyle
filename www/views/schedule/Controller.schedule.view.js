(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Schedule.view.module')
        .controller('ScheduleCtrl', ScheduleCtrl);

    ScheduleCtrl.$inject = ['$log', '$state', '$rootScope', '$stateParams', '$window', '$scope'];

    function ScheduleCtrl($log, $state, $rootScope, $stateParams, $window, $scope) {
        var cc = this;

        cc.codex = {
            la: 'Los Angeles',
            beijing: 'Beijing',
            innsbruck: 'Innsbruck'
        };
        cc.mobile = false;
        cc.backState = $stateParams.tour;
        cc.backRef = cc.codex[cc.backState];
        cc.stateChange = stateChange;

        $window.innerWidth < 800 ? cc.mobile = true : cc.mobile = false;

        function stateChange(state, val) {
            val ? $state.go(state, { tour: val }) : $state.go(state);
        };

        cc.avatars;
    }
})();