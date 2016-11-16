(function () {
    'use strict';
    angular.module('Template')
        .component('tourStopsMenu', {
            templateUrl: 'views/global-components/tour-stops-menu/tour-stops-menu.html',
            controller: TourStopsMenuCtrl,
            controllerAs: 'cc',
        })

    TourStopsMenuCtrl.$inject = ['$log', '$scope', '$rootScope', '$state'];

    function TourStopsMenuCtrl($log, $scope, $rootScope, $state) {
        // console.log('TourStops')
        var cc = this;
        cc.stateChange = stateChange;
        cc.tourStopMenuClose = tourStopMenuClose;


        function stateChange(state, param, val) {
            $state.go(state, { param: val });
            $rootScope.$broadcast('tourStopMenuClose');
        }
        function tourStopMenuClose() {
            $rootScope.$broadcast('tourStopMenuClose')
        }

        cc.$onInit = function () {
        }
    }
})();