(function () {
    'use strict';
    angular.module('Ticket.view.module')
        .component('ticketFooter', {
            bindings: {
            },
            templateUrl: 'views/ticket/ticket-footer/ticket-footer.html',
            controller: ticketFooterCtrl,
            controllerAs: 'cc'
        });

    ticketFooterCtrl.$inject = ['$log', '$rootScope', 'itemsContent'];

    function ticketFooterCtrl($log, $rootScope, itemsContent) {
        var cc = this;

        cc.$onInit = function () {
            $log.instantiate('Ticket Footer', 'Component Controller');
            cc.cart = {};
            cc.itemsContent = itemsContent;

            $rootScope.$on('cartUpdate', function (evt, obj) {
                console.log("received", evt, obj);
                cc.cart = obj;
            });


        };
    }
})();