(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('TourStops.view.module')
        .controller('TourStopsCtrl', TourStopsCtrl);

    TourStopsCtrl.$inject = ['$log', '$state', '$rootScope', 'Artists', '$stateParams', 'Tours'];

    function TourStopsCtrl($log, $state, $rootScope, Artists, $stateParams, Tours) {
        var cc = this;

        cc.avatars = Artists($stateParams.tour);
        cc.tour = Tours($stateParams.tour);


        cc.showSchedule = true;
        cc.showViewAll = true;

    }
})();