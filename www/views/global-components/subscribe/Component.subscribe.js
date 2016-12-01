(function () {
    'use strict';
    angular.module('Template')
        .component('subscribe', {
            bindings: {

            },
            templateUrl: 'views/global-components/subscribe/subscribe.html',
            controller: SubscribeCtrl,
            controllerAs: 'cc'
        })

    SubscribeCtrl.$inject = ['$log'];

    function SubscribeCtrl($log) {
        var cc = this;

        cc.focused = focused;
        cc.newUserEmail = '';

        function focused() {
            cc.newUserEmail = '';
        }
        cc.$onInit = function () {

            cc.subscribeContent = [
            ]
        }
    }
})();