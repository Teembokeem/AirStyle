(function () {
    'use strict';
    var dir = "/views/global-components/nav/"
    angular.module('Template')
        .component('nav', {
            templateUrl: dir + 'Component.nav.html',
            controller: NavCtrl,
            controllerAs: 'cc'
        });

    NavCtrl.$inject = ['$scope', '$rootScope', '$window', '$element'];

    function NavCtrl($scope, $rootScope, $window, $element) {

        var cc = this;
        if ($window.innerWidth <= 600) {
            cc.noNav = true;
            cc.mobile = true;
            cc.darken = false;
        }
        $rootScope.$on('noNav', function (e, d) {
            // console.log(e, d);
            if ($window.innerWidth <= 600) {
                cc.mobile = true;

                cc.toggleNav()
            } else {
                cc.mobile = false;
                // if (!$scope.$$phase) {
                $scope.$apply(function () {
                    // if (!cc.mobile) {
                    cc.noNav = d;
                    // }
                });
                // }
            }
        });

        $rootScope.$on('darkenNav', function (evt, d) {
            cc.darken = !cc.darken;
        })

        cc.toggleNav = function () {
            cc.noNav = !cc.noNav;
            $element[0].style.backgroundColor == 'black' ? $element[0].style.backgroundColor = '' : $element[0].style.backgroundColor = 'black';
        };
        cc.showHams = false;
    }
})();