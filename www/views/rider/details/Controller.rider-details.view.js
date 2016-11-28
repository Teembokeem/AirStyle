(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Rider.view.module')
        .controller('RiderDetailsCtrl', RiderDetailsCtrl);

    RiderDetailsCtrl.$inject = ['$log', '$state', '$rootScope', '$stateParams'];

    function RiderDetailsCtrl($log, $state, $rootScope, $stateParams) {
        var cc = this;

        console.log('params', $stateParams);
    }
})();