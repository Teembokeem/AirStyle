(function () {
    'use strict';
    angular.module('Artist.view.module')
        .component('artistBio', {
            bindings: {

            },
            templateUrl: 'views/artist/artist-bio/artist-bio.html',
            controller: artistBioCtrl,
            controllerAs: 'cc'
        })

    artistBioCtrl.$inject = ['$log', '$stateParams'];

    function artistBioCtrl($log, $stateParams) {
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
        }
    }
})();