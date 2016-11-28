(function () {
    'use strict';
    var dir = "views/artist/"
    angular.module('Artist.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.artist', {
                    url: '/artist/:avatar',
                    views: {
                        'content': {
                            templateUrl: dir + 'artist.view.html',
                            controller: 'ArtistCtrl',
                            controllerAs: 'cc'
                        }
                    },
                    params: {
                        avatar: { value: 'Beginner' }
                    }
                })

        })


        .run(function ($log) {
        });
})();