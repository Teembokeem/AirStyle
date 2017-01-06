(function () {
    'use strict';
    var dir = "views/faq/"
    angular.module('Faq.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.faqs', {
                    url: '/faqs/:tour',
                    views: {
                        'content': {
                            templateUrl: dir + 'faq.view.html',
                            controller: 'FaqCtrl',
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