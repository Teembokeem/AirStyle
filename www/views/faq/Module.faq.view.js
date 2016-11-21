(function () {
    'use strict';
    var dir = "views/faq/"
    angular.module('Faq.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.faq', {
                    url: '/faq',
                    views: {
                        'content': {
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