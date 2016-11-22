(function () {
    'use strict';
    var dir = "views/rankings/"
    angular.module('Rankings.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.rankings', {
                    url: '/rankings',
                    views: {
                        'content': {
                            templateUrl: dir + 'rankings.view.html',
                            controller: 'RankingsCtrl',
                            controllerAs: 'cc'
                        }
                    }
                })

        })


        .run(function ($log) {
        });
})();