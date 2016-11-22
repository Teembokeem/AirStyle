(function () {
    'use strict';
    angular.module('Rankings.view.module')
        .component('rankingsList', {
            bindings: {

            },
            templateUrl: 'views/rankings/rankings-list/rankings-list.html',
            controller: rankingsListCtrl,
            controllerAs: 'cc'
        })

    rankingsListCtrl.$inject = ['$log'];

    function rankingsListCtrl($log) {
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