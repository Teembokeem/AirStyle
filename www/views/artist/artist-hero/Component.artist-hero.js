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

    artistHeroCtrl.$inject = ['$log', '$stateParams'];

    function artistHeroCtrl($log, $stateParams) {
        var cc = this;

        cc.$onInit = function () {

            cc.artistList = {
                beginner: {
                    name: 'BEGINNER',
                    ref: 'beginner',
                    location: 'main stage',
                    time: 'fri 3 9pm',
                    hero: '../img/beginner-hero.jpg'
                },
                clyro: {
                    name: 'BIFFY CLYRO',
                    ref: 'clyro',
                    location: 'main stage',
                    time: 'fri 3 6pm',
                    hero: '../img/clyro-hero.jpg'

                }
            }

            var artistKey = Object.keys(cc.artistList).filter(function (key) {
                return cc.artistList[key]['ref'] == $stateParams.artist
            })[0];

            cc.artist = cc.artistList[artistKey];
        }
    }
})();