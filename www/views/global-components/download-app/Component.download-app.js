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

        cc.$onInit = function () {

            cc.downloadAppContent = [
            ]
        }
    }
})();