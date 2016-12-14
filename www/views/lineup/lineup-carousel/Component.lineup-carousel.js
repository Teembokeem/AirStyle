(function () {
    'use strict';
    angular.module('Lineup.view.module')
        .component('lineupCarousel', {
            bindings: {

            },
            templateUrl: 'views/lineup/lineup-carousel/lineup-carousel.html',
            controller: lineupCarouselCtrl,
            controllerAs: 'cc'
        })

    lineupCarouselCtrl.$inject = ['$log', '$rootScope', '$window', '$scope', 'Carousel', '$stateParams'];

    function lineupCarouselCtrl($log, $rootScope, $window, $scope, Carousel, $stateParams) {
        var cc = this;

        cc.go = go;
        cc.stateChange = stateChange;

        function go(link) {
            window.location = link;
        };

        function stateChange(state, val) {
            val ? $state.go(state, { tour: val }) : $state.go(state);
        };
        

        $scope.$watch(function () {
            return $window.innerWidth;
        }, function (a, b, c) {
            // console.log(a, b, c)
            if (a < 1024) {
                cc.mobile = true;
            } else {
                cc.mobile = false;
                // if (!$scope.$$phase) {
                //     $scope.$apply(function () {
                // if (!cc.mobile) {
                // cc.noNav = ;
                // }
                //     });
                // }
            }

        })

        cc.$onInit = function () {

           var carousel = Carousel($stateParams.tour);
            cc.slideContent = carousel.hero;

            console.log(cc.slideContent)
        }
    }
})();