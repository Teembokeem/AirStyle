(function () {
    'use strict';
    angular.module('Template')
        .component('tourStopsMenu', {
            templateUrl: 'views/global-components/tour-stops-menu/tour-stops-menu.html',
            controller: TourStopsMenuCtrl,
            controllerAs: 'cc',
        })

    TourStopsMenuCtrl.$inject = ['$log', '$scope', '$rootScope'];

    function TourStopsMenuCtrl($log, $scope, $rootScope) {
        // console.log('TourStops')
        var cc = this;
        cc.noNav = true;
        cc.toggleNav = function () {
            cc.noNav = !cc.noNav;
            $scope.$emit('darkenNav');
        };

        cc.tourStopMenuClose = tourStopMenuClose;

        function tourStopMenuClose() {
            $rootScope.$broadcast('tourStopMenuClose')
        }

        cc.$onInit = function () {
        }
    }
})();