(function () {
    'use strict';
    angular.module('Template')
        .component('videoComp', {
            bindings: {

            },
            templateUrl: 'views/global-components/video-comp/video-comp.html',
            controller: videoCompCtrl,
            controllerAs: 'cc'
        })

    videoCompCtrl.$inject = ['$log', '$rootScope', '$window', '$scope'];

    function videoCompCtrl($log, $rootScope, $window, $scope) {
        var cc = this;

        // cc.go = function (link) {
        //     window.location = link;
        // };

        $scope.$watch(function () {
            return $window.innerWidth;
        }, function (a, b, c) {
            cc.width = 0.90 * $window.innerWidth;
            cc.length = 315 / 560 * cc.width;
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

        })

        cc.$onInit = function () {
        }
    }
})();