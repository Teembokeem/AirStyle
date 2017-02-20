(function () {
    'use strict';
    var dir = "views/la-content/"
    angular.module('LaContent.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.la-content', {
                    url: '/la/',
                    views: {
                        'content': {
                            templateUrl: dir + 'la-content.view.html',
                            controller: 'LaContentCtrl',
                            controllerAs: 'cc'
                        }
                    }
                })

        })


        .run(function ($log) {});
})();
