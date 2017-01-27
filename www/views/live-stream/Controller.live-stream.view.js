(function () {
    'use strict'; 
    var dir = "views/global-components/content/home/"   
    angular
        .module('LiveStream.view.module')
        .controller('LiveStreamCtrl', LiveStreamCtrl);

    LiveStreamCtrl.$inject = ['$log', '$state', '$rootScope', '$stateParams'];

    function LiveStreamCtrl($log, $state, $rootScope, $stateParams) {
        var cc = this;
    }
})();