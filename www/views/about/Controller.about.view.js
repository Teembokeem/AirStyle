(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('About.view.module')
        .controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject = ['$log', '$state', '$rootScope', '$stateParams'];

    function AboutCtrl($log, $state, $rootScope, $stateParams) {
        var cc = this;
        cc.video = 'https://www.youtube.com/embed/biVIhNECilw?&theme=dark&autohide=2&showinfo=0'
    }
})();