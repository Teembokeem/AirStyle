(function () {
    'use strict';
    var dir = "views/about/"
    angular.module('About.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.about', {
                    url: '/about',
                    views: {
                        'content': {
                            templateUrl: dir + 'about.view.html',
                            controller: 'AboutCtrl',
                            controllerAs: 'cc'
                        }
                    },
                })

        })


        .run(function ($log) {
        });
})();