(function () {
    'use strict';
    angular.module('Template')
        .component('dropdownMenu', {
            bindings: {
                menu: '@'
            },
            templateUrl: 'views/global-components/dropdown-menu/dropdown-menu.html',
            controller: DropdownMenuCtrl,
            controllerAs: 'cc',
        })

    DropdownMenuCtrl.$inject = ['$log', '$scope', '$rootScope', '$state', '$window'];

    function DropdownMenuCtrl($log, $scope, $rootScope, $state, $window) {
        // console.log('TourStops')
        var cc = this;
        cc.stateChange = stateChange;
        cc.go = go;




        cc.codex = {
            tours: {
                name: 'Tour Stops',
                ref: 'tours',
                items: [{
                        name: 'Los Angeles',
                        ref: 'la',
                        route: 'app.tour-stops',
                        outbound: false,
                        href: '',
                        class: 'la'
                    },
                    {
                        name: 'Innsbruck',
                        ref: 'innsbruck',
                        route: 'app.tour-stops',
                        outbound: false,
                        href: '',
                        class: 'ib'
                    },
                    {
                        name: 'Beijing',
                        ref: 'beijing',
                        route: 'app.tour-stops',
                        outbound: false,
                        href: '',
                        class: 'bj'
                    },
                ]
            },
            lineup: {
                name: 'Lineup',
                ref: 'lineup',
                items: [{
                    name: 'Los Angeles',
                    ref: 'la',
                    route: 'app.lineup',
                    outbound: false,
                    href: '',
                    class: 'la'
                }, {
                    name: 'Innsbruck',
                    ref: 'innsbruck',
                    route: 'app.lineup',
                    outbound: false,
                    href: '',
                    class: 'ib'
                }, ]
            },
            riders: {
                name: 'Riders + Rankings',
                ref: 'riders',
                items: [{
                    name: 'Riders',
                    route: 'app.rider.all',
                    outbound: false,
                    class: 'la'
                }, {
                    name: 'Rankings',
                    route: 'app.rankings',
                    outbound: false,
                    class: 'ib'
                }]
            },
            tickets: {
                name: 'Tickets',
                ref: 'tickets',
                route: 'app.ticket',
                items: [{
                    name: 'Los Angeles',
                    ref: 'la',
                    route: 'https://airandstyle.frontgatetickets.com/?_ga=1.217666902.1911985544.1477700762',
                    outbound: true,
                    href: '',
                    class: 'la'
                }, {
                    name: 'Innsbruck',
                    ref: 'innsbruck',
                    route: 'app.ticket',
                    outbound: false,
                    href: '',
                    class: 'ib'
                }, ]
            },
            merch: {
                name: 'Merch',
                ref: 'merchandise',
                route: 'app.merchandise',
                items: [{
                    name: 'Los Angeles',
                    ref: 'la',
                    route: 'app.lineup',
                    outbound: false,
                    href: '',
                    class: 'la'
                }, {
                    name: 'Innsbruck',
                    ref: 'innsbruck',
                    route: 'app.lineup',
                    outbound: false,
                    href: '',
                    class: 'ib'
                }, ]
            }

        }

        function stateChange(state, val, ref, outbound) {
            if (outbound) {
                go(state);
            }
            $state.go(state, {
                tour: val
            });
            $rootScope.$broadcast('tourStopMenuClose', {
                menu: ref,
                tour: val
            });
        }

        function go(link) {
            $window.open(link);
        };
        // function tourStopMenuClose() {
        //     $rootScope.$broadcast('tourStopMenuClose')
        // }

        cc.$onInit = function () {
            cc.contextMenu = cc.codex[Object.keys(cc.codex)[Object.keys(cc.codex).indexOf(cc.menu)]]
            // console.log(cc.menu, cc.codex)
        }
    }
})();
