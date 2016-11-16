(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Artist.view.module')
        .controller('ArtistCtrl', ArtistCtrl);

    ArtistCtrl.$inject = ['$log', '$state', '$rootScope'];

    function ArtistCtrl($log, $state, $rootScope) {
        var cc = this;
    }
})();