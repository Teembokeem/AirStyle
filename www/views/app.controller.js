(function () {
    'use strict';

    angular.module('Template')
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope, $state, $rootScope, $log) {
        $log.instantiate('App', 'Controller');

        var vm = this;

        vm.contentTitle = $state.current.contentTitle;
        vm.poop = 'poop bindings'

        $rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams, $state) {
            $log.info('Traveling to ' + toState.url, toState);
            // $rootScope.contentTitle = ;
            vm.contentTitle = toState.contentTitle;

            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                event.preventDefault();
                $log.error("your state error", error);
            });
        });
    }
})();