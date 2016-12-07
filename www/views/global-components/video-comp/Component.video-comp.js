(function() {
    'use strict';
    angular.module('Template')
        .component('videoComp', {
            bindings: {
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
        //     window.location = link;
        // };

        $scope.$watch(function() {
            return $window.innerWidth;
        }, function(a, b, c) {
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

        var videos = {
            beginner: 'https://www.youtube.com/embed/isMx-EISg3E',
            clyro: 'https://www.youtube.com/embed/bpJvP4b5fX8'
        }

        cc.$onInit = function() {
            if ($stateParams.artist) {
                cc.link = $sce.trustAsResourceUrl(videos[$stateParams.artist])
                console.log($stateParams.artist, videos[$stateParams.artist], videos, cc.link)
            }

        }
    }
})();