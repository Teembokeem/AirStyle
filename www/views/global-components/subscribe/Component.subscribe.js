var _el;
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

    SubscribeCtrl.$inject = ['$log', '$window', 'MailchimpManager'];

    function SubscribeCtrl($log, $window, MailchimpManager) {
        var cc = this;

        cc.focused = focused;
        cc.newUserEmail = '';
        cc.grabText = grabText;
        cc.clearText = clearText;
        cc.subscribeUser = subscribeUser;

        function subscribeUser() {
            if (validateEmail()) {
                MailchimpManager.subscribeUser(cc.newUserEmail).then(function (res) {
                    if (res.status == 400) {
                        swal({ title: '', text: res.title + '. Try a different email.', type: 'error', timer: 2500 });
                    } else {
                        swal({ title: '', text: "Dope. You're subscribed at " + res.email_address, type: 'success', timer: 2500 });
                    };
                });

            } else {
                swal({ title: '', text: 'Something went wrong validating your email. Check on it for us.', type: 'error', timer: 2500 });
            };
        };

        function focused() {
            cc.newUserEmail = '';
        };

        function grabText() {
            $window.innerWidth < 550 ? cc.placeholder = "Don't miss out! Subscribe Today." : cc.placeholder = "Don't miss a thing! Stay up to date by subscribing to our newsletter";
            return cc.placeholder;
        };

        function clearText() {
            cc.placeholder = '';
            return cc.placeholder;
        };


        // Helpers
        function validateEmail() {
            var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailRegex.test(cc.newUserEmail);
        };

        cc.$onInit = function () {
            grabText();

        };
    };
})();