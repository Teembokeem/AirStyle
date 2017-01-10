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
            shifter = 30;
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

            cc.ScheduleContent = cc.tour;
        };
    };
})();