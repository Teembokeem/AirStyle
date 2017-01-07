(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Contact.view.module')
        .controller('ContactCtrl', ContactCtrl);

    ContactCtrl.$inject = ['$log', '$state', '$rootScope'];

    function ContactCtrl($log, $state, $rootScope) {
        var cc = this;
    }
})();