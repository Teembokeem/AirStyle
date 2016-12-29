var _scroll;
(function () {
    'use strict';
    var dir = "/views/global-components/shapes/"
    angular.module('Template')
        .component('shapes', {
            templateUrl: dir + 'shapes.html',
            controller: ShapesCtrl,
            controllerAs: 'cc'
        });

    ShapesCtrl.$inject = ['$scope', '$ionicScrollDelegate', '$document'];

    function ShapesCtrl($scope, $ionicScrollDelegate, $document) {

        var cc = this,
            scroller;

        console.log("working on shapes doe");



        cc.$onInit = function () {
            var scroller,
                maxScroll,
                viewHeight;
            $document.ready(function () {
                scroller = $ionicScrollDelegate.$getByHandle('mainScroll');
                _scroll = scroller;
                maxScroll = scroller._instances[0].scrollView.__maxScrollTop;
                viewHeight = scroller._instances[0].scrollView.__clientHeight;
                $scope.$watch(function () {
                    return scroller.getScrollPosition().top;
                }, function (a, b, c) {
                    // console.log("reference: a = before, b = after, c = scope");
                    cc.currScroll = (b * viewHeight) / maxScroll;
                    cc.prevScroll = a;
                    console.log(cc.currScroll, viewHeight, maxScroll);

                });
            });

        }

    }
})();
