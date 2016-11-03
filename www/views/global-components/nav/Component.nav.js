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
        $scope.width = angular.element(document.querySelectorAll('.scroll')[0])[0].clientWidth


        angular.element(document).ready(function () {
            $scope.$watch('width', function (thing) {
                console.log("Fdsafdsfassd")
                if (thing <= 780) {
                    vm.showHams = !vm.showHams;
                } else {
                    vm.showHams = !vm.showHams;
                }
            })
            // console.log("fdsajfodsaofjsdaoas", $scope.width <= 780)
            // vm.showHams = !vm.showHams;
        })
    }
})();