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

    riderPanelsCtrl.$inject = ['$log', '$rootScope', '$window', '$scope'];

    function riderPanelsCtrl($log, $rootScope, $window, $scope) {
        var cc = this;


        cc.$onInit = function () {

            cc.riderPanelsContent = [
                {
                    name: 'Sven Thorgren',
                    image: '../img/Sven-Thorgren.jpg'
                },
                {
                    name: 'Antoine Truchon',
                    image: '../img/Antoine-Truchon.jpg'
                },
                {
                    name: 'Max Parrot',
                    image: '../img/Max-Parrot.jpg'
                },
                {
                    name: 'Keita Inamura',
                    image: '../img/Keita-Inamura.jpg'
                },
                {
                    name: 'Billy Morgan',
                    image: '../img/Billy-Morgan.jpg'
                },
                {
                    name: 'Torgeir Bergrem',
                    image: '../img/Torgeir-Bergrem.jpg'
                }
            ]
        }
    }
})();