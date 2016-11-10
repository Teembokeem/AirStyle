(function () {
    'use strict';

    var dir = "views/global-components/content/"
    angular.module('Content.view.module',
        [
            'Services',
            'Home.view.module',
            'TourStops.view.module',
        ])

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.content', {
                    abstract: true,
                    url: '',
                    views: {
                        'content': {
                            templateUrl: dir + 'content.view.html',
                            controller: 'ContentCtrl',
                            controlleras: 'vc'
                        }
                    }
                })

        })

        .run(function ($log) {
        });
})();