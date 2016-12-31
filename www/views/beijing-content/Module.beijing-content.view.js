(function () {
    'use strict';
    var dir = "views/beijing-content/"
    angular.module('BeijingContent.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.beijing-content', {
                    url: '/beijing/',
                    views: {
                        'content': {
                            templateUrl: dir + 'beijing-content.view.html',
                            controller: 'BeijingContentCtrl',
                            controllerAs: 'cc'
                        }
                    }
                })

        })


        .run(function ($log) {
        });
})();