(function () {
    'use strict';
    angular.module('Schedule.view.module')
        .component('scheduleDesktop', {
            bindings: {

            },
            templateUrl: 'views/schedule/schedule-desktop/schedule-desktop.html',
            controller: scheduleDesktopCtrl,
            controllerAs: 'cc'
        })

    scheduleDesktopCtrl.$inject = ['$log', '$rootScope', '$window', '$scope'];

    function scheduleDesktopCtrl($log, $rootScope, $window, $scope) {
        var cc = this;

        cc.timeSlots = ['1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']

        cc.go = function (link) {
            window.location = link;
        };

        $scope.$watch(function () {
            return $window.innerWidth;
        }, function (a, b, c) {
            // console.log(a, b, c)
            if (a < 1024) {
                cc.mobile = true;
            } else {
                cc.mobile = false;
                // if (!$scope.$$phase) {
                //     $scope.$apply(function () {
                // if (!cc.mobile) {
                // cc.noNav = ;
                // }
                //     });
                // }
            }

        })

        cc.$onInit = function () {
            console.log('schedule desktop')

            cc.ScheduleContent = [
                {
                    date: 'Fri Feb 3',
                    stages: [
                        {
                            name: 'Indoor Stage',
                            lineup: [
                                {
                                    name: 'Bilderbuch',
                                    ref: 'bilderbuch',
                                    time_mult: 2,
                                    time_dur: 6,
                                    time_semantic: '1:30pm'
                                },
                                {
                                    name: 'Funf Sterne Deluxe',
                                    ref: 'funf-sterne-deluxe',
                                    time_mult: 13,
                                    time_dur: 7,
                                    time_semantic: '4:15pm'
                                },
                                {
                                    name: 'The Naked and Famous',
                                    ref: 'the-naked-and-famous',
                                    time_mult: 20,
                                    time_dur: 6,
                                    time_semantic: '6pm'
                                },
                                {
                                    name: 'Biffy Clyro',
                                    ref: 'biffy-clyro',
                                    time_mult: 28,
                                    time_dur: 6,
                                    time_semantic: '8pm'
                                }
                            ]
                        },
                        {
                            name: 'Main Stage',
                            lineup: [
                                {
                                    name: 'Wax Wreckaz',
                                    ref: 'wax-wreckaz',
                                    time_mult: 4,
                                    time_dur: 4,
                                    time_semantic: '2:15pm'
                                },
                                {
                                    name: 'Famouse Deck Team',
                                    ref: 'famouse-deck-team',
                                    time_mult: 11,
                                    time_dur: 7,
                                    time_semantic: '3:45pm'
                                },
                                {
                                    name: 'Lucky Chops',
                                    ref: 'lucky-chops',
                                    time_mult: 20,
                                    time_dur: 6,
                                    time_semantic: '6pm'
                                },
                                {
                                    name: 'Beginner',
                                    ref: 'beginner',
                                    time_mult: 32,
                                    time_dur: 8,
                                    time_semantic: '9pm'
                                }
                            ]
                        },
                        {
                            name: 'Ramp',
                            lineup: [
                                {
                                    name: 'Qualification Round 1',
                                    ref: '',
                                    time_mult: 4,
                                    time_dur: 6,
                                    time_semantic: '2:15pm'
                                },
                                {
                                    name: 'Qualification Round 2',
                                    ref: '',
                                    time_mult: 12,
                                    time_dur: 6,
                                    time_semantic: '4:15pm'
                                },
                                {
                                    name: 'Qualification Round 3',
                                    ref: '',
                                    time_mult: 20,
                                    time_dur: 6,
                                    time_semantic: '6pm'
                                },
                            ]
                        }
                    ]
                }

            ]
        }
    }
})();