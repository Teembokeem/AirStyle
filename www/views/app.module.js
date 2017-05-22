(function () {
    'use strict';

    var dir = 'views/';
    angular.module('Template', [
            'ionic',
            'Configs',
            'Services',
            'Statics',
            'angularMoment',
            'Mailchimp.module',
            'Tumblr.module',
            'Api.base.module',
            'Directives',
            'Home.view.module',
            'Ticket.view.module',
            'TourStops.view.module',
            'Lineup.view.module',
            'Artist.view.module',
            'Faq.view.module',
            'Rider.view.module',
            'Rankings.view.module',
            'BeijingContent.view.module',
            'InnsbruckContent.view.module',
            'LaContent.view.module',
            'About.view.module',
            'Contact.view.module',
            'Schedule.view.module',
            'LiveStream.view.module',
            'templates'
        ])


        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '^',
                    templateUrl: dir + 'app.foundation.html',
                    controller: 'AppCtrl',
                    controllerAs: 'ac'
                })

            $urlRouterProvider.otherwise('/home');
            // $locationProvider.html5Mode(true);
        })

        .run(function ($rootScope, $window) {
            $window.localStorage.clear()

            // $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, error) {
            //     console.log('$stateChangeStart:');
            //     console.log(arguments);
            // });
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, error) {
                var page;
                if (Object.keys(toParams).length > 0) {
                    page = toState.url.substring(0, toState.url.indexOf(':')) + toParams[Object.keys(toParams)[0]]
                } else {
                    page = toState.url
                }
                ga('set', 'page', page)
                ga('send', 'pageview');
            });
            // $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            //     console.log('$stateChangeError:');
            //     console.log(arguments);
            // });
            // console.log(`.------..------..------..------..------..------..------.\n|H.--. ||I.--. || .--. ||G.--. ||R.--. ||E.--. ||G.--. |\n| :/\\: || (\\/) || :/\\: || :/\\: || :/\\: || (\\/) || (\\/) |\n| :\\/: || :\\/: || (__) || (__) || (__) || :\\/: || :\\/: |\n| '--'H|| '--'I|| '--' || '--'G|| '--'R|| '--'E|| '--'G|\n'------'\`------'\`------'\`------'\`------'\`------'\`------'`)

        });

})();
