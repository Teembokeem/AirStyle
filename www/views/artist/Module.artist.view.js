(function() {
    'use strict';
    var dir = "views/artist/"
    angular.module('Artist.view.module', ['Services'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.artist', {
                    url: '/artist/:artist/',
                    views: {
                        'content': {
                            templateUrl: dir + 'artist.view.html',
                            controller: 'ArtistCtrl',
                            controllerAs: 'cc'
                        }
                    },
                    params: {
                        artist: { value: 'Beginner' }
                    }
                })

        })


        .run(function($log) {
        });
})();