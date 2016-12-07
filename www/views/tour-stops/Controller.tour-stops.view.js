(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('TourStops.view.module')
        .controller('TourStopsCtrl', TourStopsCtrl);

    TourStopsCtrl.$inject = ['$log', '$state', '$rootScope', 'Artists', '$stateParams'];

    function TourStopsCtrl($log, $state, $rootScope, Artists, $stateParams) {
        var cc = this;

        cc.avatars = Artists($stateParams.tour);
        cc.showSchedule = true;
        cc.showViewAll = true;

            console.log($stateParams.tour);
            console.log(Artists(), 'hello');

    }
})();