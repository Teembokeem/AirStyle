var y;
(function () {
    'use strict';
    var dir = "/views/global-components/nav/"
    angular.module('Template')
        .component('nav', {
            templateUrl: dir + 'Component.nav.html',
            controller: NavCtrl,
            controllerAs: 'cc'
        });

    NavCtrl.$inject = ['$scope', '$ionicScrollDelegate'];

    function NavCtrl($scope, $ionicScrollDelegate) {

        var vm = this;

        vm.showHams = false;

        angular.element(document).ready(function () {
            console.log("elements", angular.element(document.querySelectorAll('.scroll')[0])[0].clientWidth)

            if (angular.element(document.querySelectorAll('.scroll')[0])[0].clientWidth <= 780) {
                vm.showHams = !vm.showHams;
            }
        })
    }
})();