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

    artistHeroCtrl.$inject = ['$log', '$stateParams', 'Artists', '$ionicScrollDelegate'];

    function artistHeroCtrl($log, $stateParams, Artists, $ionicScrollDelegate) {
        var cc = this;

        cc.scrollToBottom = scrollToBottom;

        function scrollToBottom() {
            $ionicScrollDelegate.scrollTo(0, 2000, true);
            setTimeout(function () {
                swal({ title: '', text: 'Download the app to manage your schedule!', type: 'info', timer: 2500 });
            }, 1000);
        }

        cc.$onInit = function () {
            cc.artist = Artists($stateParams.avatar);
        }
    }
})();