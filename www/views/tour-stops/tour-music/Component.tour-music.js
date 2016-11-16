(function () {
    'use strict';
    angular.module('TourStops.view.module')
        .component('tourMusic', {
            bindings: {

            },
            templateUrl: 'views/tour-stops/tour-music/tour-music.html',
            controller: tourMusicCtrl,
            controllerAs: 'cc'
        })

    tourMusicCtrl.$inject = ['$log', '$rootScope', '$window', '$scope'];

    function tourMusicCtrl($log, $rootScope, $window, $scope) {
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

            cc.tourMusicContent = [
                {
                    name: 'BIFFY CLYRO',
                    image: '../img/clyro.png',
                    dest: 'clyro'
                },
                {
                    name: 'BEGINNER',
                    image: '../img/beginner.png',
                    dest: 'beginner'
                }
            ]
        }
    }
})();