(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Rider.view.module')
        .controller('RiderCtrl', RiderCtrl);

    RiderCtrl.$inject = ['$log', '$state', '$rootScope'];

    function RiderCtrl($log, $state, $rootScope) {
        var cc = this;
    }
})();