(function () {
    'use strict';
    var dir = "views/rider/"
    angular.module('Rider.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.rider', {
                    url: '/rider',
                    abstract: true,
                    views: {
                        'content': {
                            templateUrl: dir + 'rider.abstract.view.html',
                            controller: 'RiderCtrl',
                            controllerAs: 'cc'
                        }
                    },
                })
                .state('app.rider.all', {
                    url: '/',
                    views: {
                        'rider': {
                            templateUrl: dir + 'index/rider-index.view.html',
                            controller: 'RiderIndexCtrl',
                            controllerAs: 'cc'
                        }
                    },
                })
                .state('app.rider.details', {
                    url: '/:rider',
                    views: {
                        'rider': {
                            templateUrl: dir + 'details/rider-details.view.html',
                            controller: 'RiderDetailsCtrl',
                            controllerAs: 'cc'
                        }
                    },
                })

        })


        .run(function ($log) {
        });
})();