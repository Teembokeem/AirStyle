(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Home.view.module')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$log', '$state', '$rootScope', '$ionicScrollDelegate', '$window'];

    function HomeCtrl($log, $state, $rootScope, $ionicScrollDelegate, $window) {
        var cc = this;
        var t = $ionicScrollDelegate.$getByHandle('mainScroll');
        cc.getScroll = function () {
            var fromTop = t.getScrollPosition().top;
            if (fromTop > 50) {
                $rootScope.$broadcast('noNav', true);
            } else {
                $rootScope.$broadcast('noNav', false);
            }

        }
    }
})();