(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('BeijingContent.view.module')
        .controller('BeijingContentCtrl', BeijingContentCtrl);

    BeijingContentCtrl.$inject = ['$log', '$state', '$rootScope', '$sce'];

    function BeijingContentCtrl($log, $state, $rootScope, $sce) {
        var cc = this;

        cc.video = 'https://www.youtube.com/embed/W5uN0ZnL5zI';
    }
})();