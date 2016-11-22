(function () {
    'use strict';

    var dir = 'views/';
    angular.module('Template',
        [
            'Configs',
            'ionic',
            'Services',
            'Api.base.module',
            'Directives',
            'Home.view.module',
            'TourStops.view.module',
            'Lineup.view.module',
            'Artist.view.module',
            'Faq.view.module',
            'Rider.view.module',
            'Rankings.view.module'
        ])


        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: dir + 'app.foundation.html',
                    controller: 'AppCtrl',
                    controllerAs: 'ac'
                })

            $urlRouterProvider.otherwise('/app/home')
        })

        .run(function ($rootScope) {

            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                console.log('$stateChangeError:');
                console.log(arguments);
            });
            console.log(`.------..------..------..------..------..------..------.\n|H.--. ||I.--. || .--. ||G.--. ||R.--. ||E.--. ||G.--. |\n| :/\\: || (\\/) || :/\\: || :/\\: || :/\\: || (\\/) || (\\/) |\n| :\\/: || :\\/: || (__) || (__) || (__) || :\\/: || :\\/: |\n| '--'H|| '--'I|| '--' || '--'G|| '--'R|| '--'E|| '--'G|\n'------'\`------'\`------'\`------'\`------'\`------'\`------'`)
        });

})();
