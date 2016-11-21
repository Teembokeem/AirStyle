(function() {
    'use strict';
    var dir = "views/lineup/"
    angular.module('Lineup.view.module', ['Services'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.lineup', {
                    url: '/lineup/:tour',
                    views: {
                        'content': {
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


        .run(function($log) {
        });
})();