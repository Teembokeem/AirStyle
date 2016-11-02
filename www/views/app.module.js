(function () {
    'use strict';

    var dir = 'views/';
    angular.module('Template',
        [
            'Configs',
            'ionic',
            'ngCordova',
            'Services',
            'Api.base.module',
            'Directives',
            'Content.view.module',
        ])


        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: dir + 'app.foundation.html',
                    controller: 'AppCtrl',
                    controllerAs: 'ac'
                })

            $urlRouterProvider.otherwise('/app/home')
        })

        .run(function ($ionicPlatform) {
            // $ionicPlatform.ready(function () {
            //     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            //     // for form inputs)
            //     if (window.cordova && window.cordova.plugins.Keyboard) {
            //         cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            //         cordova.plugins.Keyboard.disableScroll(true);

            //     }
            //     if (window.StatusBar) {
            //         // org.apache.cordova.statusbar required
            //         StatusBar.styleDefault();
            //     }
            // });
            console.log(`.------..------..------..------..------..------..------.\n|H.--. ||I.--. || .--. ||G.--. ||R.--. ||E.--. ||G.--. |\n| :/\\: || (\\/) || :/\\: || :/\\: || :/\\: || (\\/) || (\\/) |\n| :\\/: || :\\/: || (__) || (__) || (__) || :\\/: || :\\/: |\n| '--'H|| '--'I|| '--' || '--'G|| '--'R|| '--'E|| '--'G|\n'------'\`------'\`------'\`------'\`------'\`------'\`------'`)
        });

})();
