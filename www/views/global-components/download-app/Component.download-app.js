(function () {
    'use strict';
    angular.module('Template')
        .component('downloadApp', {
            bindings: {

            },
            templateUrl: 'views/global-components/download-app/download-app.html',
            controller: DownloadAppCtrl,
            controllerAs: 'cc'
        })

    DownloadAppCtrl.$inject = ['$log'];

    function DownloadAppCtrl($log) {
        var cc = this;

        cc.go = go;

        function go(link) {
            window.open(link);
        };

        cc.$onInit = function () {

            cc.ctas = [
                {
                    image: '../img/android-cta.png',
                    link: "https://play.google.com/store/apps/details?id=com.air.style&hl=en"
                },
                {
                    image: '../img/ios-cta.png',
                    link: "https://itunes.apple.com/us/app/air-+-style-2016/id1067868468?mt=8"
                }
            ]
        }
    }
})();