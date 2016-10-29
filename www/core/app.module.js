
angular.module('app', ['ionic', 'Services', 'Directives'])


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
  .state('app', {
    url: '/',
    abstract: true,
    templateUrl: '/core-modules/app.abstract.html',
    controller: 'AppCtrl',
    controllerAs: 'ac'
    // abstract: true;
  })

  // Each tab has its own nav history stack:


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

})

.run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
            console.log(`.------..------..------..------..------..------..------.\n|H.--. ||I.--. || .--. ||G.--. ||R.--. ||E.--. ||G.--. |\n| :/\\: || (\\/) || :/\\: || :/\\: || :/\\: || (\\/) || (\\/) |\n| :\\/: || :\\/: || (__) || (__) || (__) || :\\/: || :\\/: |\n| '--'H|| '--'I|| '--' || '--'G|| '--'R|| '--'E|| '--'G|\n'------'\`------'\`------'\`------'\`------'\`------'\`------'`)
        });
