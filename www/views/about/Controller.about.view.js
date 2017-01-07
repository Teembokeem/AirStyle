(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('About.view.module')
        .controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject = ['$log', '$state', '$rootScope', '$stateParams'];

    function AboutCtrl($log, $state, $rootScope, $stateParams) {
        var cc = this;

    }
})();