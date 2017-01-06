(function () {
    'use strict';
    var dir = "views/global-components/content/ticket/"
    angular
        .module('Ticket.view.module')
        .controller('TicketCtrl', TicketCtrl);

    TicketCtrl.$inject = ['$log', '$state'];

    function TicketCtrl($log, $state) {
        var cc = this;



        (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-69578166-1', 'auto');
        ga('send', 'pageview');

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