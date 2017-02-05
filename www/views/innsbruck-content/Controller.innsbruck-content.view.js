(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('InnsbruckContent.view.module')
        .controller('InnsbruckContentCtrl', InnsbruckContentCtrl);

    InnsbruckContentCtrl.$inject = ['$log', '$state', '$rootScope', 'Tours'];

    function InnsbruckContentCtrl($log, $state, $rootScope, Tours) {
        var cc = this;

        cc.video = Tours('beijing').video;
    }
})();
