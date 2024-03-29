(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('TourStops.view.module')
        .controller('TourStopsCtrl', TourStopsCtrl);

    TourStopsCtrl.$inject = ['$log', '$state', '$rootScope', 'Artists', '$stateParams', 'Tours','tourService','TOUR'];

    function TourStopsCtrl($log, $state, $rootScope, Artists, $stateParams, Tours,tourService,TOUR) {
        var cc = this;

        cc.avatars = Artists($stateParams.tour);
        cc.tour = Tours($stateParams.tour);
        cc.showSchedule = true;
        cc.showViewAll = true;
        TOUR = _.sortBy(TOUR, 'year').reverse();
        console.log(TOUR[0]);

        //From Api Tour Fetched
        cc.TOUR=TOUR[0];
    }
})();
