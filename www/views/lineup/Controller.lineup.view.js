(function () {
    'use strict';
    var dir = "views/global-components/content/home/"
    angular
        .module('Lineup.view.module')
        .controller('LineupCtrl', LineupCtrl);

    LineupCtrl.$inject = ['$log', '$state', '$rootScope'];

    function LineupCtrl($log, $state, $rootScope) {
        var cc = this;

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