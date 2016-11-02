(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Home.view.module')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$log', '$state'];

    function HomeCtrl($log, $state) {
        var cc = this;
    }
})();