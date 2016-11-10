(function () {
    'use strict';
    var dir = "views/tour-stops/"
    angular.module('TourStops.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.content.tour-stops', {
                    url: '/tour-stops/:tour',
                    views: {
                        'source': {
                            templateUrl: dir + 'tour-stops.view.html',
                            controller: 'TourStopsCtrl',
                            controllerAs: 'cc'
                        }
                    },
                    params: {
                        tour: { value: 'innsbruck' }
                    }
                })

        })


        .run(function ($log) {
        });
})();