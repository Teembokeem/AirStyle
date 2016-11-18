(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Faq.view.module')
        .controller('FaqCtrl', FaqCtrl);

    FaqCtrl.$inject = ['$log', '$state', '$rootScope'];

    function FaqCtrl($log, $state, $rootScope) {
        var cc = this;
    }
})();