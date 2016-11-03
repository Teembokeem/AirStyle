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

    homeScheduleCtrl.$inject = ['$log'];

    function homeScheduleCtrl($log) {
        var cc = this;

        cc.$onInit = function () {

            cc.scheduleContent = [
                {
                    title: 'BEIJING',
                    date: 'NOV 18 + 19',
                    dest: 'app.here'
                },
                {
                    title: 'INNSBRUCK',
                    date: 'FEB 3 + 4',
                    dest: 'app.there'
                },
                {
                    title: 'LOS ANGELES',
                    date: 'FEB 18 + 19',
                    dest: 'app.anywhere'
                },
            ]
        }
    }
})();