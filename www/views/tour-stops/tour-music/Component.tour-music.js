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

    tourMusicCtrl.$inject = ['$log', '$rootScope', '$window', '$scope', 'Artists', '$stateParams', '$state'];

    function tourMusicCtrl($log, $rootScope, $window, $scope, Artists, $stateParams, $state) {
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

        cc.stateChange = stateChange;

        function stateChange(state, val) {
            val ? $state.go(state, {avatar: val}) : $state.go(state);
        }

        cc.$onInit = function () {
            var artists = Artists($stateParams.tour);
            cc.artists = [];
            for (var artist in artists) {
                var query = artists[artist]
                if (query.img_yellow) {
                    cc.artists.push(query);
                }
            }

            console.log(cc.artists)
        }
    }
})();