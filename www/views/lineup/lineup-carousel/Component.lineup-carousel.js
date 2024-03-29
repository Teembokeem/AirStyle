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

    lineupCarouselCtrl.$inject = ['$log', '$rootScope', '$window', '$scope', 'Carousel', '$stateParams', '$state'];

    function lineupCarouselCtrl($log, $rootScope, $window, $scope, Carousel, $stateParams, $state) {
        var cc = this;

        cc.go = go;
        cc.stateChange = stateChange;
        cc.tourRef = $stateParams.tour;

        function go(link) {
            window.open(link);
        };

        function stateChange(state, val) {
            if (state == 'app.schedule' && !Carousel($stateParams.tour).schedule) return swal({ title: '', text: 'Hang tight! Schedule coming soon.', type: 'info', timer: 2500 });
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

        }
    }
})();