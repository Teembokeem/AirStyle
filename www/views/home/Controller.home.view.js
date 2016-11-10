(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Home.view.module')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$log', '$state', '$rootScope', '$ionicScrollDelegate', '$window'];

    function HomeCtrl($log, $state, $rootScope, $ionicScrollDelegate, $window) {
        var cc = this;
    }
})();