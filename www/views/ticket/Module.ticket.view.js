(function () {
    'use strict';
    var dir = 'views/ticket/';
    angular.module('Ticket.view.module', ['Services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.content.ticket', {
                    url: '/ticket',
                    views: {
                        'source': {
                            templateUrl: dir + 'ticket.view.html',
                            controller: 'TicketCtrl',
                            controllerAs: 'cc'
                        }
                    }
                })

        })


        .run(function ($log) {
        });
})();