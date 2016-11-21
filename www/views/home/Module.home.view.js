(function () {
    'use strict';
    var dir = "views/home/"
    angular.module('Home.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.home', {
                    url: '/home',
                    views: {
                        'content': {
                            templateUrl: dir + 'home.view.html',
                            controller: 'HomeCtrl',
                            controllerAs: 'cc'
                        }
                    }
                })

        })


        .run(function ($log) {
        });
})();