(function () {
    'use strict';
    angular.module('TourStops.view.module')
        .component('tourCarousel', {
            bindings: {

            },
            templateUrl: 'views/tour-stops/tour-carousel/tour-carousel.html',
            controller: TourCarouselCtrl,
            controllerAs: 'cc'
        })

    TourCarouselCtrl.$inject = ['$log', '$rootScope', '$window', '$scope', 'Carousel', '$stateParams', '$state'];

    function TourCarouselCtrl($log, $rootScope, $window, $scope, Carousel, $stateParams, $state) {
        var cc = this;

        cc.go = go;
        cc.stateChange = stateChange;
        cc.tourRef = $stateParams.tour;

        function go(link) {
            window.open(link);
        };

        function stateChange(dest) {
            if (!Carousel($stateParams.tour).schedule) return swal({ title: '', text: 'Hang tight! Schedule coming soon.', type: 'info', timer: 2500 });
            $state.go(dest, { tour: $stateParams.tour })
        }

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