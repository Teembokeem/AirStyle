(function () {
    'use strict';
    var dir = "views/lineup/"
    angular.module('Lineup.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.content.lineup', {
                    url: '/lineup/:tour',
                    views: {
                        'source': {
                            templateUrl: dir + 'lineup.view.html',
                            controller: 'LineupCtrl',
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