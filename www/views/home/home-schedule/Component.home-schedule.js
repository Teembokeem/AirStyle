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
            var tours = Tours();
            cc.scheduleContent = [];

            Object.keys(tours).forEach(function(tourKey) {
                cc.scheduleContent.push(tours[tourKey]);
            })
        }
    }
})();