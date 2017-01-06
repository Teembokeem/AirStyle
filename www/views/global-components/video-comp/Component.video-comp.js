(function () {
    'use strict';
    angular.module('Template')
        .component('videoComp', {
            bindings: {
                video: '='
            },
            templateUrl: 'views/global-components/video-comp/video-comp.html',
            controller: videoCompCtrl,
            controllerAs: 'cc'
        })

    videoCompCtrl.$inject = ['$log', '$rootScope', '$window', '$scope', '$stateParams', '$sce'];

    function videoCompCtrl($log, $rootScope, $window, $scope, $stateParams, $sce) {
        var cc = this;

        cc.link = 0;
        // cc.go = function (link) {
        //     window.open(link;
        // };

        $scope.$watch(function () {
            return $window.innerWidth;
        }, function (a, b, c) {
            cc.width = 0.80 * $window.innerWidth;
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
            console.log(cc.video)
            cc.video = $sce.trustAsResourceUrl(cc.video);

        }
    }
})();