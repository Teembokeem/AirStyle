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

    scheduleMobileCtrl.$inject = ['$log', '$rootScope', '$window', '$scope', 'Tours', '$stateParams', '$state'];

    function scheduleMobileCtrl($log, $rootScope, $window, $scope, Tours, $stateParams, $state) {
        var cc = this;

        cc.timeSlots = ['1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];
        cc.currentChange;
        $stateParams.tour == 'la' ? cc.doorsOpen = '2pm' : cc.doorsOpen = '1pm';

        cc.go = function (link) {
            window.open(link);
        };

        cc.stateChange = stateChange;

        function stateChange(ref) {
            if (ref) {
                return $state.go('app.artist', {
                    avatar: ref
                });
            };
            $state.go('app.rider.all');
        }

        cc.changeStage = function () {};

        cc.$onInit = function () {
            // console.log('schedule mobile')
            cc.tour = Tours($stateParams.tour);
            cc.ScheduleContent = cc.tour.schedule
            cc.activeDay = cc.ScheduleContent[0];
            cc.currentStage = cc.activeDay.stages[0]
        };
    }
})();
