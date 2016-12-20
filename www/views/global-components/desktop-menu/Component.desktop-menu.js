(function () {
    'use strict';
    angular.module('Template')
        .component('desktopMenu', {
            templateUrl: 'views/global-components/desktop-menu/desktop-menu.html',
            controller: DesktopMenuCtrl,
            controllerAs: 'cc'
        })

    DesktopMenuCtrl.$inject = ['$log', '$scope', '$rootScope', '$state', '$stateParams', 'Tours'];

    function DesktopMenuCtrl($log, $scope, $rootScope, $state, $stateParams, Tours) {
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



        cc.currentState = $state.current.name
        cc.venue = $stateParams.tour ? Tours($stateParams.tour) : null
        cc.toggleNav = toggleNav;

        $rootScope.$on('tourStopMenuClose', function (e, d) {
            cc.venue = d.tour ? Tours(d.tour) : null
            console.log($state)
            cc.currentState = $state.current.name
            cc.menus[d.menu] = !cc.menus[d.menu];
        })

        function toggleNav() {
            cc.noNav = !cc.noNav;
            $scope.$emit('darkenNav');
        };

        cc.$onInit = function () {
            $scope.$watch(function () {
                return $state.current
            }, function (a, b, c) {
                console.log(a, b, c)
                cc.currentState = $state.current.name
            });

        }
    }
})();
