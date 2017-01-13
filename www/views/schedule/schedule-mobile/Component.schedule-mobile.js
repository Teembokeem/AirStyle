(function () {
    'use strict';
    angular.module('Schedule.view.module')
        .component('scheduleMobile', {
            bindings: {

            },
            templateUrl: 'views/schedule/schedule-mobile/schedule-mobile.html',
            controller: scheduleMobileCtrl,
            controllerAs: 'cc'
        })

    scheduleMobileCtrl.$inject = ['$log', '$rootScope', '$window', '$scope', 'Tours', '$stateParams'];

    function scheduleMobileCtrl($log, $rootScope, $window, $scope, Tours, $stateParams) {
        var cc = this;

        cc.timeSlots = ['1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']
        cc.currentChange;

        cc.go = function (link) {
            window.open(link);
        };

        cc.changeStage = function () {
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
            };

        });

        cc.$onInit = function () {
            // console.log('schedule mobile')
            cc.tour = Tours($stateParams.tour);
            cc.ScheduleContent = cc.tour.schedule
            cc.activeDay = cc.ScheduleContent[0];
            cc.currentStage = cc.activeDay.stages[0]
        };
    }
})();