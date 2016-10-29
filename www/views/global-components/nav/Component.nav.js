(function () {
    'use strict';
    var dir = "/views/global-components/nav/"
    angular.module('Template')
        .component('nav', {
            templateUrl: dir + 'Component.nav.html',
            controller: NavCtrl,
            controllerAs: 'cc'
        });

    function NavCtrl($scope, $state, $rootScope, $log, st18_Auth) {

        var vm = this;
    }
})();