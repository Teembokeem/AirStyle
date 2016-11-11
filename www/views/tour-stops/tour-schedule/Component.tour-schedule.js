(function () {
    'use strict';
    angular.module('TourStops.view.module')
        .component('tourSchedule', {
            bindings: {

            },
            templateUrl: 'views/tour-stops/tour-schedule/tour-schedule.html',
            controller: TourScheduleCtrl,
            controllerAs: 'cc'
        })

    TourScheduleCtrl.$inject = ['$log', '$rootScope', '$window', '$scope'];

    function TourScheduleCtrl($log, $rootScope, $window, $scope) {
        var cc = this;

        cc.$onInit = function () {

            cc.tourScheduleContent = {
                tag: 'Air + Style Innsbruck-Tirol returns to Olympiaworld for two days of music and killer riding.',
                schedule: [
                    {
                        date: 'FRI FEB 3',
                        ramp: 'Snowboard qualification',
                        main: 'Bilderbuch + 2 more',
                        indoor: '5 live bands'
                    },
                    {
                        date: 'SAT FEB 4',
                        ramp: 'Snowboard Main Contest',
                        main: 'Beginner - Biffy Clyro - The Naked And Famous + 1 more',
                        indoor: 'F\xFCnf Sterne deluxe - Lucky Chops + 2 more'
                    }
                ]
            }

        }
    }
})();