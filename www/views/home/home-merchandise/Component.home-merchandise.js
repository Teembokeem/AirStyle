(function () {
    'use strict';
    angular.module('Home.view.module')
        .component('homeMerchandise', {
            bindings: {

            },
            templateUrl: 'views/home/home-merchandise/home-merchandise.html',
            controller: HomeMerchandiseCtrl,
            controllerAs: 'cc'
        })

    HomeMerchandiseCtrl.$inject = ['$log', 'Merchandise'];

    function HomeMerchandiseCtrl($log, Merchandise) {
        var cc = this;

        cc.openMerch = function () {
            window.open("http://www.air-style.clothing");
        };

        cc.$onInit = function () {

            cc.merchandiseContent = Merchandise();
        }
    }
})();