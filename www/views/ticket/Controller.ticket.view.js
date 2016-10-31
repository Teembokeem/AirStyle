(function () {
    'use strict';
    var dir = "views/global-components/content/ticket/"
    angular
        .module('Ticket.view.module')
        .controller('TicketCtrl', TicketCtrl);

    TicketCtrl.$inject = ['$log', '$state'];

    function TicketCtrl($log, $state) {
        $log.instantiate('Ticket', 'Component Controller');
        var cc = this;
    }
})();