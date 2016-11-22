(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Rankings.view.module')
        .controller('RankingsCtrl', RankingsCtrl);

    RankingsCtrl.$inject = ['$log', '$state', '$rootScope'];

    function RankingsCtrl($log, $state, $rootScope) {
        var cc = this;
    }
})();