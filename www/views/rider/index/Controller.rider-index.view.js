(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Rider.view.module')
        .controller('RiderIndexCtrl', RiderIndexCtrl);

    RiderIndexCtrl.$inject = ['$log', '$state', '$rootScope'];

    function RiderIndexCtrl($log, $state, $rootScope) {
        var cc = this;
    }
})();