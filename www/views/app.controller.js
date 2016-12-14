(function () {
    'use strict';

    angular.module('Template')
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope, $state, $rootScope, $log, $ionicScrollDelegate, $window) {

        var ac = this;

        ac.contentTitle = $state.current.contentTitle;
        ac.poop = 'poop bindings'

        $rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams, $state) {
            // $rootScope.contentTitle = ;
            ac.contentTitle = toState.contentTitle;

            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                event.preventDefault();
            });
        });

        var t = $ionicScrollDelegate.$getByHandle('mainScroll');
        ac.getScroll = function () {
            var fromTop = t.getScrollPosition().top;
            if ($window.innerWidth > 600) {
                if (fromTop > 50) {
                    $rootScope.$emit('noNav', true);
                } else {
                    $rootScope.$emit('noNav', false);
                }
            }
        }
    }
})();