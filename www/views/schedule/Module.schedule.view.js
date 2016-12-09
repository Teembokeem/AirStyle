(function () {
    'use strict';
    var dir = "views/schedule/"
    angular.module('Schedule.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.schedule', {
                    url: '/schedule/:tour',
                    views: {
                        'content': {
                            templateUrl: dir + 'schedule.view.html',
                            controller: 'ScheduleCtrl',
                            controllerAs: 'cc'
                        }
                    },
                    params: {
                        tour: { value: 'innsbruck' }
                    }
                })

        })


        .run(function ($log) {
        });
})();