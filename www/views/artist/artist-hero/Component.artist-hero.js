(function () {
    'use strict';
    angular.module('Artist.view.module')
        .component('artistHero', {
            bindings: {

            },
            templateUrl: 'views/artist/artist-hero/artist-hero.html',
            controller: artistHeroCtrl,
            controllerAs: 'cc'
        })

    artistHeroCtrl.$inject = ['$log', '$stateParams', 'Artists'];

    function artistHeroCtrl($log, $stateParams, Artists) {
        var cc = this;

        cc.$onInit = function () {
            cc.artist = Artists($stateParams.avatar);
        }
    }
})();