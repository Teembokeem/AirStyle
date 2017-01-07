(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Artist.view.module')
        .controller('ArtistCtrl', ArtistCtrl);

    ArtistCtrl.$inject = ['$log', '$state', '$rootScope', 'Artists', '$stateParams'];

    function ArtistCtrl($log, $state, $rootScope, Artists, $stateParams) {
        var cc = this;


        // console.log('avatar', $stateParams)
        cc.video = Artists($stateParams.avatar).video;

    }
})();