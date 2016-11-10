(function () {
    'use strict';
    angular.module('Template')
        .component('tourStopsMenu', {
            templateUrl: 'views/global-components/tour-stops-menu/tour-stops-menu.html',
            controller: TourStopsMenuCtrl,
            controllerAs: 'cc',
        })

    TourStopsMenuCtrl.$inject = ['$log', '$scope'];

    function TourStopsMenuCtrl($log, $scope) {
        // console.log('TourStops')
        var cc = this;
        cc.noNav = true;
        cc.toggleNav = function () {
            cc.noNav = !cc.noNav;
            $scope.$emit('darkenNav');
        };

        cc.$onInit = function () {
        }
    }
})();