var _video;
(function () {
    'use strict';
    angular.module('LiveStream.view.module')
        .component('eversport', {
            bindings: {

            },
            templateUrl: 'views/live-stream/eversport/eversport.html',
            controller: eversportCtrl,
            controllerAs: 'cc'
        })

    eversportCtrl.$inject = ['$log', '$state', '$rootScope'];

    function eversportCtrl($log, $state, $rootScope) {
        var cc = this;        
    }
})();