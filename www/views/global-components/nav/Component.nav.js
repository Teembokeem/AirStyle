var y, _t;
(function () {
    'use strict';
    var dir = "/views/global-components/nav/"
    angular.module('Template')
        .component('nav', {
            templateUrl: dir + 'Component.nav.html',
            controller: NavCtrl,
            controllerAs: 'cc'
        });

    NavCtrl.$inject = ['$scope', '$ionicScrollDelegate', '$rootScope'];

    function NavCtrl($scope, $ionicScrollDelegate, $rootScope) {

        var cc = this;
        $rootScope.$on('noNav', function (e, d) {
            $scope.$apply(function () {
                cc.noNav = d;
            });
        })
        cc.showHams = false;
    }
})();