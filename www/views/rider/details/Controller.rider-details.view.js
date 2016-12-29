(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Rider.view.module')
        .controller('RiderDetailsCtrl', RiderDetailsCtrl);

    RiderDetailsCtrl.$inject = ['$log', '$state', '$rootScope', '$stateParams', '$scope'];

    function RiderDetailsCtrl($log, $state, $rootScope, $stateParams, $scope) {
        var cc = this;
    }
})();