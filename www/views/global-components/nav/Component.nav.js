(function () {
    'use strict';
    var dir = "/views/global-components/nav/"
    angular.module('Template')
        .component('nav', {
            templateUrl: dir + 'Component.nav.html',
            controller: NavCtrl,
            controllerAs: 'cc'
        });

    NavCtrl.$inject = ['$scope', '$ionicScrollDelegate', '$rootScope', '$window'];

    function NavCtrl($scope, $ionicScrollDelegate, $rootScope, $window) {

        var cc = this;
        if ($window.innerWidth < 420) {
            cc.noNav = true;
            cc.mobile = true;
            cc.darken = false;
        }
        $rootScope.$on('noNav', function (e, d) {
            if ($window.innerWidth < 420) {
                cc.mobile = true;
            } else {
                cc.mobile = false;
                // if (!$scope.$$phase) {
                //     $scope.$apply(function () {
                if (!cc.mobile) {
                    cc.noNav = d;
                }
                // });
                // }
            }
        });

        $rootScope.$on('darkenNav', function (evt, d) {
            cc.darken = !cc.darken;
        })

        cc.toggleNav = function () {
            cc.noNav = !cc.noNav;
        };
        cc.showHams = false;
    }
})();