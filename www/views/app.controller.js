(function () {
    'use strict';

    angular.module('Template')
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope, $state, $rootScope, $log, st18_Auth) {

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

        vm.logout = function () {
            st18_Auth.logout();
            $state.go('login');
        }
    }
})();