(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('BeijingContent.view.module')
        .controller('BeijingContentCtrl', BeijingContentCtrl);

    BeijingContentCtrl.$inject = ['$log', '$state', '$rootScope', 'Tours'];

    function BeijingContentCtrl($log, $state, $rootScope, Tours) {
        var cc = this;

        cc.video = Tours('beijing').video;
    }
})();