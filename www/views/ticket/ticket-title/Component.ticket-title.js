(function () {
    'use strict';
    angular.module('Ticket.view.module')
        .component('ticketTitle', {
            bindings: {

            },
            templateUrl: 'views/ticket/ticket-title/ticket-title.html',
            controller: ticketTitleCtrl,
            controllerAs: 'cc'
        })

    ticketTitleCtrl.$inject = ['$log'];

    function ticketTitleCtrl($log) {
        var cc = this;

        cc.$onInit = function () {

            cc.titleContent = {
                title: 'INNSBRUCK-TIROL',
                date: 'FRI 3 + SAT 4 FEBRUARY 2017'
            }
        }
    }
})();