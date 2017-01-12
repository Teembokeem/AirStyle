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

    preloaderCtrl.$inject = ['$log', '$window', '$stateParams', '$rootScope'];

    function preloaderCtrl($log, $window, $stateParams, $rootScope) {
        var cc = this;

        cc.$onInit = function () {
            cc.width = 0.80 * $window.innerWidth;
            if ($window.innerWidth > 1023) {
                setTimeout(function () {
                    cc.setTime = true;
                    setTimeout(function () {
                        cc.hide = true;
                    }, 100);
                }, 2800);

            } else {
                cc.hide = true;
            }
        }
    }
})();