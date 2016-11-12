(function () {
    'use strict';
    angular.module('Template')
        .component('rankingSummary', {
            bindings: {

            },
            templateUrl: 'views/global-components/ranking-summary/ranking-summary.html',
            controller: RankingSummaryCtrl,
            controllerAs: 'cc'
        })

    RankingSummaryCtrl.$inject = ['$log'];

    function RankingSummaryCtrl($log) {
        var cc = this;

        cc.$onInit = function () {

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
                        last: 'Sandbech'
                    },
                    image: 'img/stale.jpg'
                },
            ]
        }
    }
})();