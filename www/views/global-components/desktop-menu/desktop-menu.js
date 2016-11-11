(function () {
    'use strict';
    angular.module('Template')
        .component('desktopMenu', {
            templateUrl: 'views/global-components/desktop-menu/desktop-menu.html',
            controller: DesktopMenuCtrl,
            controllerAs: 'cc'
        })

    DesktopMenuCtrl.$inject = ['$log', '$scope', '$rootScope'];

    function DesktopMenuCtrl($log, $scope, $rootScope) {
        // console.log('Desktop')
        var cc = this;
        cc.noNav = true;
        cc.showTourStops = false;
        cc.toggleNav = toggleNav;

        $rootScope.$on('tourStopMenuClose', function (e, d) {
            cc.showTourStops = !cc.showTourStops;
        })
        function toggleNav() {
            cc.noNav = !cc.noNav;
            $scope.$emit('darkenNav');
        };

        cc.$onInit = function () {
        }
    }
})();