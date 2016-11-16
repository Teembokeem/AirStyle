(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Lineup.view.module')
        .controller('LineupCtrl', LineupCtrl);

    LineupCtrl.$inject = ['$log', '$state', '$rootScope'];

    function LineupCtrl($log, $state, $rootScope) {
        var cc = this;
    }
})();