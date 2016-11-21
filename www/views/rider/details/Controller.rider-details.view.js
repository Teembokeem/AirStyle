(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Rider.view.module')
        .controller('RiderSingleCtrl', RiderSingleCtrl);

    RiderSingleCtrl.$inject = ['$log', '$state', '$rootScope'];

    function RiderSingleCtrl($log, $state, $rootScope) {
        var cc = this;
    }
})();