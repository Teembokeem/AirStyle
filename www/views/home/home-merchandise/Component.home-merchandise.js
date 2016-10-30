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

    HomeMerchandiseCtrl.$inject = ['$log'];

    function HomeMerchandiseCtrl($log) {
        var cc = this;

        cc.$onInit = function () {
            $log.instantiate('Home Merchandise', 'Component Controller');

            cc.merchandiseContent = [
                {
                    name: 'La Curved',
                    price: parseFloat(Math.round(40.00 * 100) / 100).toFixed(2),
                    image: 'img/shirt1.jpg'
                },
                {
                    name: 'Chill or Be Chilled',
                    price: parseFloat(Math.round(20.00 * 100) / 100).toFixed(2),
                    image: 'img/shirt2.jpg'
                },
                {
                    name: 'Amerrickan / Air + Style Collaboration',
                    price: parseFloat(Math.round(35.00 * 100) / 100).toFixed(2),
                    image: 'img/shirt3.jpg'
                },
            ]
        }
    }
})();