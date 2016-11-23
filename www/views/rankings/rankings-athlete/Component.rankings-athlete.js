(function() {
    'use strict';
    angular.module('Rankings.view.module')
        .component('rankingsAthlete', {
            bindings: {
                athlete: '=',
                year: '=',
                index: '='
            },
            templateUrl: 'views/rankings/rankings-athlete/rankings-athlete.html',
            controller: rankingsAthleteCtrl,
            controllerAs: 'cc'
        })

    rankingsAthleteCtrl.$inject = ['$log'];

    function rankingsAthleteCtrl($log) {
        var cc = this;

        cc.$onInit = function() {

        }
    }
})();