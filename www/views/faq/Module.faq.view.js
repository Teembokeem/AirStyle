(function () {
    'use strict';
    var dir = "views/faq/"
    angular.module('Faq.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.content.faq', {
                    url: '/faq',
                    views: {
                        'source': {
                            templateUrl: dir + 'faq.view.html',
                            controller: 'FaqCtrl',
                            controllerAs: 'cc'
                        }
                    },
                })
        })


        .run(function ($log) {
        });
})();