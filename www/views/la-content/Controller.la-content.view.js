(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('LaContent.view.module')
        .controller('LaContentCtrl', LaContentCtrl);

    LaContentCtrl.$inject = ['$log', '$state', '$rootScope', 'Tours'];

    function LaContentCtrl($log, $state, $rootScope, Tours) {
        var cc = this;

        cc.video = Tours('beijing').video;
    }
})();
