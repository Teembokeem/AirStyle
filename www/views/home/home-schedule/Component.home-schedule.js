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

    homeScheduleCtrl.$inject = ['$log', 'Tours'];

    function homeScheduleCtrl($log, Tours) {
        var cc = this;

        cc.$onInit = function () {
            cc.scheduleContent = Tours();
        }
    }
})();