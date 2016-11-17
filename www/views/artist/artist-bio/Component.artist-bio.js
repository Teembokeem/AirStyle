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

    artistBioCtrl.$inject = ['$log', '$stateParams'];

    function artistBioCtrl($log, $stateParams) {
        var cc = this;
        cc.go = function(link) {
            window.location = link;
        };

        cc.$onInit = function() {

            cc.artistBioContent = {
                info: [
                    'American electronic music band composed of record producer Diplo, Jillionaire, and Walshy fire. It was founded by Diplo and Switch, but Switch left in 2011. Its music spans numerous genres, mixing reggae with dancehall, raggaeton, house, and moombhaton.',
                    'Major Lazer has released three full-length albums: Guns Don\'t Kill People... Lazers Do 2009, Free the Universe 2013,  and Peace Is the Mission in 2015. It also released an EP entitled Apocalypse Soon in March 2014, which featured vocal contribution from Pharrell Williams and Sean Paul. In addition, Major Lazer has also produced Reincarnated, the debut reggae album by Snoop Dogg under his \'Snoop Lion \' persona'
                ],
                website: 'http://www.beginner.de/'
            }
        }
    }
})();