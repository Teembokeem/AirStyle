(function () {
    'use strict';
    angular.module('Home.view.module')
        .component('homeCarousel', {
            bindings: {

            },
            templateUrl: 'views/home/home-carousel/home-carousel.html',
            controller: HomeCarouselCtrl,
            controllerAs: 'cc'
        })

    HomeCarouselCtrl.$inject = ['$log', '$rootScope', '$window', '$scope', '$ionicSlideBoxDelegate', 'Carousel', '$state'];

    function HomeCarouselCtrl($log, $rootScope, $window, $scope, $ionicSlideBoxDelegate, Carousel, $state) {
        var cc = this;

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

        cc.go = go;
        cc.moveSlide = moveSlide;
        cc.borderButtonHover = 'null';


        function go(button) {
            if (button.outbound) {
                window.open(button.dest);
            } else {
                $state.go(button.dest)
            }

        };

        function moveSlide(index) {
            $ionicSlideBoxDelegate.$getByHandle('carousel').slide(index, 500);
            setTimeout(function () {
                $ionicSlideBoxDelegate.$getByHandle('carousel').stop();
                setTimeout(function () {

                    $ionicSlideBoxDelegate.$getByHandle('carousel').start();
                }, 4000);
            }, 600);

        }


        cc.$onInit = function () {
            var carousel = Carousel('la');
            cc.slideContent = [Carousel('innsbruck').slide, Carousel('la').slide];
            cc.customSlide = carousel.hero;
        }
    }
})();