(function () {
    'use strict';
    angular.module('TourStops.view.module')
        .component('tourVideo', {
            bindings: {

            },
            templateUrl: 'views/tour-stops/tour-video/tour-video.html',
            controller: tourVideoCtrl,
            controllerAs: 'cc'
        })

    tourVideoCtrl.$inject = ['$log', '$rootScope', '$window', '$scope'];

    function tourVideoCtrl($log, $rootScope, $window, $scope) {
        var cc = this;

        // cc.go = function (link) {
        //     window.location = link;
        // };

        // $scope.$watch(function () {
        //     return $window.innerWidth;
        // }, function (a, b, c) {
        //     // console.log(a, b, c)
        //     if (a < 1024) {
        //         cc.mobile = true;
        //     } else {
        //         cc.mobile = false;
        //         // if (!$scope.$$phase) {
        //         //     $scope.$apply(function () {
        //         // if (!cc.mobile) {
        //         // cc.noNav = ;
        //         // }
        //         //     });
        //         // }
        //     }

        // })

        cc.$onInit = function () {
        }
    }
})();