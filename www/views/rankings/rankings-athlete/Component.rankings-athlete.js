(function () {
    'use strict';
    angular.module('Rankings.view.module')
        .component('rankingsAthlete', {
            bindings: {
                athlete: '=',
                index: '='
            },
            templateUrl: 'views/rankings/rankings-athlete/rankings-athlete.html',
            controller: rankingsAthleteCtrl,
            controllerAs: 'cc'
        })

    rankingsAthleteCtrl.$inject = ['$log'];

    function rankingsAthleteCtrl($log) {
        var cc = this;

        cc.$onInit = function () {

            cc.scheduleContent = [
                {
                    title: 'BEIJING',
                    date: 'NOV 18 + 19',
                    dest: 'app.here'
                },
                {
                    title: 'INNSBRUCK',
                    date: 'FEB 3 + 4',
                    dest: 'app.there'
                },
                {
                    title: 'LOS ANGELES',
                    date: 'FEB 18 + 19',
                    dest: 'app.anywhere'
                },
            ]
        }
    }
})();