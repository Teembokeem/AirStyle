(function () {
    'use strict';
    angular.module('Home.view.module')
        .component('homeSchedule', {
            bindings: {

            },
            templateUrl: 'views/home/home-schedule/home-schedule.html',
            controller: homeScheduleCtrl,
            controllerAs: 'cc'
        })

    homeScheduleCtrl.$inject = ['$log', '$state', 'Tours'];

    function homeScheduleCtrl($log, $state, Tours) {
        var cc = this;

        cc.stateChange = stateChange;

        function stateChange(state, val) {
            console.log("your val", val)
            $state.go(state, { tour: val });
        }

        cc.$onInit = function () {
            cc.scheduleContent = Tours('all');
        }
    }
})();