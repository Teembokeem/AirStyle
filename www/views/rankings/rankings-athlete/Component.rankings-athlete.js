(function () {
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

    rankingsAthleteCtrl.$inject = ['$state'];

    function rankingsAthleteCtrl($state) {
        var cc = this;
        cc.stateChange = stateChange;
        cc.overlay = false;

        function stateChange(ref) {
            console.log(ref)
            $state.go('app.rider.details', { avatar: ref })
        }

        cc.$onInit = function () {

        }
    }
})();