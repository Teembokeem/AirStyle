(function() {
    'use strict';
    var dir = "views/tour-stops/"
    angular.module('TourStops.view.module', ['Services'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.tour-stops', {
                    url: '/tour-stops/:tour',
                    views: {
                        'content': {
                            templateUrl: dir + 'tour-stops.view.html',
                            controller: 'TourStopsCtrl',
                            controllerAs: 'cc'
                        }
                    },
                    params: {
                        tour: {
                            value: 'innsbruck'
                        }
                    },
                    resolve: {
                        TOUR: function(tourService, $stateParams) {
                            return tourService.getTourStop($stateParams.tour).then(function(res) {
                                return res.data.data;
                            })
                        }
                    }
                })

        })


        .run(function($log) {});
})();
