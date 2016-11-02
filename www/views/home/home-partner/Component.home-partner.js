(function () {
    'use strict';
    angular.module('Home.view.module')
        .component('homePartner', {
            bindings: {

            },
            templateUrl: 'views/home/home-partner/home-partner.html',
            controller: HomePartnerCtrl,
            controllerAs: 'cc'
        })

    HomePartnerCtrl.$inject = ['$log'];

    function HomePartnerCtrl($log) {
        var cc = this;

        cc.$onInit = function () {

            cc.partnerContent = [
                'img/partner-1.png',
                'img/partner-2.png',
                'img/partner-3.png',
                'img/partner-4.png',
                'img/partner-5.png',
                'img/partner-6.png',
            ]
        }
    }
})();