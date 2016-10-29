(function () {
    'use strict';
    angular
        .module('Content.view.module')
        .controller('ContentCtrl', ContentCtrl)

    ContentCtrl.$inject = ['$log', '$state'];

    function ContentCtrl($log, $state) {
        $log.instantiate('Content', 'Component Controller');
        var vc = this;

    }
})();