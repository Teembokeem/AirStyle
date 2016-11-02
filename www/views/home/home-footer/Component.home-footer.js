(function () {
    'use strict';
    angular.module('Home.view.module')
        .component('homeFooter', {
            bindings: {

            },
            templateUrl: 'views/home/home-footer/home-footer.html',
            controller: HomeFooterCtrl,
            controllerAs: 'cc'
        })

    HomeFooterCtrl.$inject = ['$log'];

    function HomeFooterCtrl($log) {
        var cc = this;

        cc.$onInit = function () {
        }
    }
})();