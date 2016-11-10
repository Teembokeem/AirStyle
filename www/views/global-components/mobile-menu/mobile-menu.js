(function () {
    'use strict';
    angular.module('Template')
        .component('mobileMenu', {
            templateUrl: 'views/global-components/mobile-menu/mobile-menu.html',
            controller: MobileMenuCtrl,
            controllerAs: 'cc'
        })

    MobileMenuCtrl.$inject = ['$log', '$scope', '$state', '$rootScope'];

    function MobileMenuCtrl($log, $scope, $state, $rootScope) {
        var cc = this;
        // cc.noNav = true;
        // cc.toggleNav = function () {
        //     cc.noNav = !cc.noNav;
        //     $scope.$emit('darkenNav');
        // };

        cc.stateChange = stateChange;

        function stateChange(state, param, val) {
            $state.go(state, { param: val });
            $rootScope.$broadcast('noNav', false);
        }


        cc.$onInit = function () {
            cc.events = [
                {
                    name: 'beijing',
                    date: 'NOV 18 + 19'
                },
                {
                    name: 'innsbruck',
                    date: 'FEB 3 + 4'
                },
                {
                    name: 'los angeles',
                    date: 'FEB 10 + 14'
                }
            ];
        }
    }
})();