(function () {
    'use strict';
    var dir = "views/home/"
    angular.module('Home.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.content.home', {
                    url: '/home',
                    views: {
                        'source': {
                            templateUrl: dir + 'home.view.html',
                            controller: 'HomeCtrl',
                            controllerAs: 'cc'
                        }
                    }
                })

            console.log($stateProvider, "wtf")
        })


        .run(function ($log) {
            $log.instantiate('Home', 'View Module');
        });
})();