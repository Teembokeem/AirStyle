(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Rider.view.module')
        .controller('RiderIndexCtrl', RiderIndexCtrl);

    RiderIndexCtrl.$inject = ['$log', '$state', '$rootScope'];

    function RiderIndexCtrl($log, $state, $rootScope) {
        var cc = this;

        cc.riders = [
            {
                name: 'Sven Thorgren',
                ref: 'sthorgren',
                image: '../img/Sven-Thorgren.jpg'
            },
            {
                name: 'Antoine Truchon',
                ref: 'atruchon',
                image: '../img/Antoine-Truchon.jpg'
            },
            {
                name: 'Max Parrot',
                ref: 'mparrot',
                image: '../img/Max-Parrot.jpg'
            },
            {
                name: 'Keita Inamura',
                ref: 'kinamura',
                image: '../img/Keita-Inamura.jpg'
            },
            {
                name: 'Billy Morgan',
                ref: 'bmorgan',
                image: '../img/Billy-Morgan.jpg'
            },
            {
                name: 'Torgeir Bergrem',
                ref: 'tbergrem',
                image: '../img/Torgeir-Bergrem.jpg'
            }
        ]
    }
})();