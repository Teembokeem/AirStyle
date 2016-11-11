(function () {
    'use strict';

    angular.module('Template')
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope, $state, $rootScope, $log, $ionicScrollDelegate, $window) {

        var vm = this;

        vm.contentTitle = $state.current.contentTitle;
        vm.poop = 'poop bindings'

        $rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams, $state) {
            // $rootScope.contentTitle = ;
            vm.contentTitle = toState.contentTitle;

            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                event.preventDefault();
            });
        });

        var t = $ionicScrollDelegate.$getByHandle('mainScroll');
        vm.getScroll = function () {
            var fromTop = t.getScrollPosition().top;
            if ($window.innerWidth > 420) {
                if (fromTop > 50) {
                    $rootScope.$emit('noNav', true);
                } else {
                    $rootScope.$emit('noNav', false);
                }
            }
        }
    }
})();