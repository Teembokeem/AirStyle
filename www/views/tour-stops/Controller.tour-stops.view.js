(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('TourStops.view.module')
        .controller('TourStopsCtrl', TourStopsCtrl);

    TourStopsCtrl.$inject = ['$log', '$state', '$rootScope'];

    function TourStopsCtrl($log, $state, $rootScope) {
        var cc = this;
    }
})();