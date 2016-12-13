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
        cc.menus = {
            tours: false,
            lineup: false,
            riders: false,
            tickets: false,
            merch: false
        }
        cc.toggleNav = toggleNav;

        $rootScope.$on('tourStopMenuClose', function (e, d) {
            cc.menus[d.menu] = !cc.menus[d.menu];
        })
        function toggleNav() {
            cc.noNav = !cc.noNav;
            $scope.$emit('darkenNav');
        };

        cc.$onInit = function () {
        }
    }
})();