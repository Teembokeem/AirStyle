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

    SubscribeCtrl.$inject = ['$log', '$window'];

    function SubscribeCtrl($log, $window) {
        var cc = this;

        cc.focused = focused;
        cc.newUserEmail = '';
        cc.grabText = grabText;
        cc.clearText = clearText;

        function focused() {
            cc.newUserEmail = '';
        }

        function grabText() {
            console.log("supo dude")
            $window.innerWidth < 550 ? cc.placeholder = "Don't miss out! Subscribe Today." : cc.placeholder = "Don't miss a thing! Stay up to date by subscribing to our newsletter";
            return cc.placeholder;
        };

        function clearText() {
            cc.placeholder = '';
            return cc.placeholder;
        }

        cc.$onInit = function () {

            grabText();

        }
    }
})();