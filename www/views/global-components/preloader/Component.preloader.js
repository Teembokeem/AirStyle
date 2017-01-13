(function () {
    'use strict';
    angular.module('Template')
        .component('preloader', {
            bindings: {

            },
            templateUrl: 'views/global-components/preloader/preloader.html',
            controller: preloaderCtrl,
            controllerAs: 'cc'
        })

    preloaderCtrl.$inject = ['$log', '$window', '$stateParams', '$rootScope', '$scope'];

    function preloaderCtrl($log, $window, $stateParams, $rootScope, $scope) {
        var cc = this;

        cc.$onInit = function () {
            cc.width = 0.80 * $window.innerWidth;
            setTimeout(function () {
                cc.setTime = true;
                console.log("yes", cc.setTime);
                $scope.$apply()
                setTimeout(function () {
                    cc.hide = true;
                }, 100);
            }, 2600);
        }
    }
})();