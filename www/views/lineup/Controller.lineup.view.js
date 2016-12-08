(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Lineup.view.module')
        .controller('LineupCtrl', LineupCtrl);

    LineupCtrl.$inject = ['$log', '$state', '$rootScope', '$stateParams'];

    function LineupCtrl($log, $state, $rootScope, $stateParams) {
        var cc = this;

        cc.codex = {
            la: 'Los Angeles',
            beijing: 'Beijing',
            innsbruck: 'Innsbruck'
        }
        cc.backState = $stateParams.tour;
        cc.backRef = cc.codex[cc.backState];

        cc.stateChange = stateChange;

        function stateChange(state, val) {
            val ? $state.go(state, { tour: val }) : $state.go(state);
        };

        cc.avatars = [
            {
                name: 'Biffy Clyro',
                ref: 'clyro',
                image: '../img/clyro.jpg'
            },
            {
                name: 'Beginner',
                ref: 'beginner',
                image: '../img/beginner.png'
            },
            {
                name: 'Bilderbuch',
                ref: 'bilderbuch',
                image: '../img/bilderbuch.jpg'
            },
            {
                name: 'The Naked & Famous',
                ref: 'the-naked-and-famous',
                image: '../img/the-naked-and-famous.jpg'
            },
            {
                name: 'Funf Sterne Deluxe',
                ref: 'funf-sterne-deluxe',
                image: '../img/funf-sterne-deluxe.jpg'
            },
            {
                name: 'Lucky Chops',
                ref: 'lucky-chops',
                image: '../img/lucky-chops.jpg'
            }
        ]
    }
})();