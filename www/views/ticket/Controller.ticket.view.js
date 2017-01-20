(function () {
    'use strict';
    var dir = "views/global-components/content/ticket/"
    angular
        .module('Ticket.view.module')
        .controller('TicketCtrl', TicketCtrl);

    TicketCtrl.$inject = ['$log', '$state'];

    function TicketCtrl($log, $state) {
        var cc = this;

        var linker;


        function addiFrame(divId, url, opt_hash) {
            return function (tracker) {
                window.linker = window.linker || new window.gaplugins.Linker(tracker);
                //var iFrame = document.createElement('iFrame');
                var iFrame = document.getElementById(divId);
                iFrame.src = window.linker.decorate(url, opt_hash);
                //document.getElementById(divId).appendChild(iFrame);
            };
        }

        // Dynamically add the iFrame to the page with proper linker parameters.
        ga(addiFrame('paylogic_shop', document.getElementById('paylogic_shop').src));

    }
})();
