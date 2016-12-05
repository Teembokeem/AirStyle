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

    TourCarouselCtrl.$inject = ['$log', '$rootScope', '$window', '$scope', 'Carousel', '$stateParams'];

    function TourCarouselCtrl($log, $rootScope, $window, $scope, Carousel, $stateParams) {
        var cc = this;

        cc.go = function (link) {
            window.location = link;
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

        console.log($stateParams)
        cc.$onInit = function () {
            var carousel = Carousel($stateParams.tour);
            cc.slideContent = carousel.hero;

        }
    }
})();