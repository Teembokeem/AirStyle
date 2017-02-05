(function () {
    'use strict';
    var dir = "views/innsbruck-content/"
    angular.module('InnsbruckContent.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.innsbruck-content', {
                    url: '/innsbruck/',
                    views: {
                        'content': {
                            templateUrl: dir + 'innsbruck-content.view.html',
                            controller: 'InnsbruckContentCtrl',
                            controllerAs: 'cc'
                        }
                    }
                })

        })


    .run(function ($log) {});
})();
