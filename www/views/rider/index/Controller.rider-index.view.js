(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Rider.view.module')
        .controller('RiderIndexCtrl', RiderIndexCtrl);

    RiderIndexCtrl.$inject = ['$log', '$state', '$rootScope', 'Riders'];

    function RiderIndexCtrl($log, $state, $rootScope, Riders) {
        var cc = this;

        cc.riders = Riders('all');
    }
})();