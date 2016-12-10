(function() {
    'use strict';
    angular.module('Artist.view.module')
        .component('artistBio', {
            bindings: {

            },
            templateUrl: 'views/artist/artist-bio/artist-bio.html',
            controller: artistBioCtrl,
            controllerAs: 'cc'
        })

    artistBioCtrl.$inject = ['$log', '$stateParams', 'Artists', '$sce'];

    function artistBioCtrl($log, $stateParams, Artists, $sce) {
        var cc = this;
        cc.go = function(link) {
            window.location = link;
        };

        cc.$onInit = function() {
            cc.artist = Artists($stateParams.avatar);
            cc.artist.spotify = $sce.trustAsResourceUrl(cc.artist.spotify);
        }
    }
})();