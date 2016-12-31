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

    homeScheduleCtrl.$inject = ['$log', '$state', 'Tours', '$rootScope'];

    function homeScheduleCtrl($log, $state, Tours, $rootScope) {
        var cc = this;

        cc.stateChange = stateChange;

        function stateChange(state, val) {
            console.log("your val", val);
            if (val == 'beijing') {
                $rootScope.$broadcast('tourStopMenuClose', {
                    menu: null,
                    tour: val
                });
                return $state.go('app.beijing-content');
            }
            $state.go(state, { tour: val });
            $rootScope.$broadcast('tourStopMenuClose', {
                menu: null,
                tour: val
            });

        }

        cc.$onInit = function () {
            cc.scheduleContent = Tours('all');
        }
    }
})();