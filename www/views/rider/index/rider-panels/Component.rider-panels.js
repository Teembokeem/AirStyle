(function () {
    'use strict';
    angular.module('Rider.view.module')
        .component('riderPanels', {
            bindings: {

            },
            templateUrl: 'views/rider/index/rider-panels/rider-panels.html',
            controller: riderPanelsCtrl,
            controllerAs: 'cc'
        })

    riderPanelsCtrl.$inject = ['$log', '$state'];

    function riderPanelsCtrl($log, $state) {
        var cc = this;

        cc.stateChange = stateChange;

        function stateChange(state, param, val) {
            $state.go(state, { param: val });
        }

        cc.$onInit = function () {

            cc.riderPanelsContent = [
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
    }
})();