(function () {
    'use strict';
    angular.module('Home.view.module')
        .component('homeRanking', {
            bindings: {

            },
            templateUrl: 'views/home/home-ranking/home-ranking.html',
            controller: homeRankingCtrl,
            controllerAs: 'cc'
        })

    homeRankingCtrl.$inject = ['$log'];

    function homeRankingCtrl($log) {
        var cc = this;

        cc.$onInit = function () {
            $log.instantiate('Home Ranking', 'Component Controller');

            cc.playerContent = [
                {
                    name: {
                        first: 'Sven',
                        last: 'Thorgren'
                    },
                    image: 'img/sven.jpg'
                },
                {
                    name: {
                        first: 'Max',
                        last: 'Parrot'
                    },
                    image: 'img/max.jpg'
                },
                {
                    name: {
                        first: 'St\xE5le',
                        last: 'Sandebech'
                    },
                    image: 'img/stale.jpg'
                },
            ]
        }
    }
})();