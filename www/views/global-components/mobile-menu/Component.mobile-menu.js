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
        cc.toggledCities = false;
        cc.toggleCities = toggleCities;
        cc.buyTickets = buyTickets;

        function toggleCities() {
            cc.toggledCities = !cc.toggledCities;
        };

        function buyTickets(val) {
            if (val == 'innsbruck') {
                $state.go('app.ticket');
                $rootScope.$broadcast('noNav', false);
            } else {
                window.open('https://airandstyle.frontgatetickets.com/');
                $rootScope.$broadcast('noNav', false);
            };
        };

        function stateChange(state, param, val) {
            if (val == 'beijing') {
                $rootScope.$broadcast('noNav', false);
                $rootScope.$broadcast('tourStopMenuClose', {
                    menu: null,
                    tour: val
                });
                return $state.go('app.beijing-content');
            } else if (state == 'app.merchandise') {
                return window.open('https://www.air-style.clothing/')
            } else if (state == 'app.livestream') {
                $state.go('app.livestream')
            }
            val ? $state.go(state, {
                tour: val
            }) : $state.go(state);
            $rootScope.$broadcast('noNav', false);
            $rootScope.$broadcast('tourStopMenuClose', {
                menu: null,
                tour: val
            });

        };


        cc.$onInit = function () {
            cc.events = [{
                name: 'beijing',
                date: 'NOV 18 + 19',
                ref: 'beijing'
            }, {
                name: 'innsbruck',
                date: 'FEB 3 + 4',
                ref: 'innsbruck'
            }, {
                name: 'los angeles',
                date: 'FEB 18 + 19',
                ref: 'la'
            }];
        }
    }
})();
