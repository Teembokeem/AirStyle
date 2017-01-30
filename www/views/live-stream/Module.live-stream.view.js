(function () {
    'use strict';
    var dir = "views/live-stream/"
    angular.module('LiveStream.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.livestream', {
                    url: '/live-stream',
                    views: {
                        'content': {
                            templateUrl: dir + 'live-stream.view.html',
                            controller: 'LiveStreamCtrl',
                            controllerAs: 'cc'
                        }
                    }
                })

        })
})();