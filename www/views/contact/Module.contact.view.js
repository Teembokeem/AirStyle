(function () {
    'use strict';
    var dir = "views/contact/"
    angular.module('Contact.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.contact', {
                    url: '/contact',
                    views: {
                        'content': {
                            templateUrl: dir + 'contact.view.html',
                            controller: 'ContactCtrl',
                            controllerAs: 'cc'
                        }
                    }
                })

        })


        .run(function ($log) {
        });
})();