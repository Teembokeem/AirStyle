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

    scheduleDesktopCtrl.$inject = ['$log', '$rootScope', '$window', '$scope', 'Tours', '$stateParams', '$state'];

    function scheduleDesktopCtrl($log, $rootScope, $window, $scope, Tours, $stateParams, $state) {
        var cc = this,
            shifter = 38;
        cc.timeSlots = ['1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];
        cc.topMult = topMult;
        cc.stateChange = stateChange;

        function stateChange(ref) {
            if (ref) {
                return $state.go('app.artist', { avatar: ref });
            };
            $state.go('app.rider.all');
        }


        function topMult(val) {
            return val * 15 + shifter;
        }

        cc.go = function (link) {
            window.open(link);
        };

        $scope.$watch(function () {
            return $window.innerWidth;
        }, function (a, b, c) {
            if (800 < a < 850) {
                // shifter = 70;
            } else if (850 < a < 900) {
            }

        })

        cc.$onInit = function () {

            cc.tour = Tours($stateParams.tour);

            cc.ScheduleContent = [
                {
                    date: 'Fri Feb 3',
                    stages: [
                        // {
                        //     name: 'Indoor Stage',
                        //     lineup: [
                        //         {
                        //             name: 'Bilderbuch',
                        //             ref: 'bilderbuch',
                        //             time_mult: 2,
                        //             time_dur: 6,
                        //             time_semantic: '1:30pm'
                        //         },
                        //         {
                        //             name: 'Funf Sterne Deluxe',
                        //             ref: 'funf-sterne-deluxe',
                        //             time_mult: 13,
                        //             time_dur: 7,
                        //             time_semantic: '4:15pm'
                        //         },
                        //         {
                        //             name: 'The Naked and Famous',
                        //             ref: 'the-naked-and-famous',
                        //             time_mult: 20,
                        //             time_dur: 6,
                        //             time_semantic: '6pm'
                        //         },
                        //         {
                        //             name: 'Biffy Clyro',
                        //             ref: 'biffy-clyro',
                        //             time_mult: 28,
                        //             time_dur: 6,
                        //             time_semantic: '8pm'
                        //         }
                        //     ]
                        // },
                        {
                            name: 'Ramp',
                            lineup: [
                                {
                                    name: 'Qualification Round 1',
                                    ref: '',
                                    time_mult: 20,
                                    time_dur: 4,
                                    time_semantic: '6:00pm'
                                },
                                {
                                    name: 'Qualification Round 2',
                                    ref: '',
                                    time_mult: 28,
                                    time_dur: 4,
                                    time_semantic: '8:00pm'
                                },
                            ]
                        },
                        {
                            name: 'Main Stage',
                            lineup: [
                                {
                                    name: 'The Hunna',
                                    ref: 'the-hunna',
                                    time_mult: 16,
                                    time_dur: 2,
                                    time_semantic: '5:00pm'
                                },
                                {
                                    name: 'Millencolin',
                                    ref: 'millencolin',
                                    time_mult: 23,
                                    time_dur: 3,
                                    time_semantic: '6:45pm'
                                },
                                {
                                    name: 'Bilderbuch',
                                    ref: 'bilderbuch',
                                    time_mult: 31,
                                    time_dur: 5,
                                    time_semantic: '8:45pm'
                                }
                            ]
                        },
                    ]
                },
                {
                    date: 'Sat Feb 4',
                    stages: [
                        {
                            name: 'Ramp',
                            lineup: [
                                {
                                    name: 'Qualification Round 1',
                                    ref: '',
                                    time_mult: 20,
                                    time_dur: 4,
                                    time_semantic: '6:00pm'
                                },
                                {
                                    name: 'Qualification Round 2',
                                    ref: '',
                                    time_mult: 28,
                                    time_dur: 4,
                                    time_semantic: '8:00pm'
                                },
                            ]
                        },
                        {
                            name: 'Main Stage',
                            lineup: [
                                {
                                    name: 'The Hunna',
                                    ref: 'the-hunna',
                                    time_mult: 16,
                                    time_dur: 2,
                                    time_semantic: '5:00pm'
                                },
                                {
                                    name: 'Millencolin',
                                    ref: 'millencolin',
                                    time_mult: 23,
                                    time_dur: 3,
                                    time_semantic: '6:45pm'
                                },
                                {
                                    name: 'Bilderbuch',
                                    ref: 'bilderbuch',
                                    time_mult: 31,
                                    time_dur: 5,
                                    time_semantic: '8:45pm'
                                }
                            ]
                        },
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
                    ]
                }

            ]
        }
    }
})();