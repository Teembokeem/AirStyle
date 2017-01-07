(function () {
    'use strict';
    angular.module('Template')
        .component('headerNotification', {
            bindings: {

            },
            templateUrl: 'views/global-components/header-notification/header-notification.html',
            controller: HeaderNotificationCtrl,
            controllerAs: 'cc'
        })

    HeaderNotificationCtrl.$inject = [];

    function HeaderNotificationCtrl() {
        var cc = this;

        cc.hovered = false;
        cc.close = false;

        cc.toastOpen = function () {
            // if (cc.hovered == false) {
            //     cc.hovered = true;
            //     // swal({ title: '', text: 'More Content.', type: 'warning', timer: 2500 });
            //     setTimeout(function () {
            //         cc.hovered = false;
            //     }, 3000)
            // }
        };

        cc.$onInit = function () {
            // console.log("were in here")
        }
    }
})();