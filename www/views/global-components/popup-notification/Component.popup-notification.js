(function () {
    'use strict';
    angular.module('Template')
        .component('popupNotification', {
            bindings: {

            },
            templateUrl: 'views/global-components/popup-notification/popup-notification.html',
            controller: popupNotificationCtrl,
            controllerAs: 'cc'
        })

    popupNotificationCtrl.$inject = ['$scope', '$window', 'Tours', '$stateParams', '$animate', '$element'];

    function popupNotificationCtrl($scope, $window, Tours, $stateParams, $animate, $element) {
        var cc = this;
        cc.action = false;
        cc.ready = true;
        cc.closePopup = closePopup;
        cc.buyTicket = buyTicket;
        cc.imageReady = imageReady;


        function buyTicket() {
            $window.open('https://airandstyle.frontgatetickets.com/');
        }

        function closePopup() {
            cc.action = !cc.action;
            $element.addClass('remove');
        }

        function imageReady() {
            $element.addClass('ready');
        }

        cc.$onInit = function () {
        }
    }
})();