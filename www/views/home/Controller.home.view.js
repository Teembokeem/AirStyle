(function() {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Home.view.module')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$log', '$state'];

    function HomeCtrl($log, $state) {
        $log.instantiate('Home', 'Component Controller');
        var cc = this;
    }
})();