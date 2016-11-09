(function () {
    'use strict';
    angular.module('Template')
        .component('desktopMenu', {
            templateUrl: 'views/global-components/desktop-menu/desktop-menu.html',
            controller: DesktopMenuCtrl,
            controllerAs: 'cc'
        })

    DesktopMenuCtrl.$inject = ['$log', '$scope'];

    function DesktopMenuCtrl($log, $scope) {
        // console.log('Desktop')
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