(function() {
    'use strict';
    angular.module('Ticket.view.module')
        .component('ticketItems', {
            bindings: {

            },
            templateUrl: 'views/ticket/ticket-items/ticket-items.html',
            controller: ticketItemsCtrl,
            controllerAs: 'cc'
        })

    ticketItemsCtrl.$inject = ['$log', '$rootScope'];

    function ticketItemsCtrl($log, $rootScope) {
        var cc = this;

        cc.$onInit = function() {
            $log.instantiate('Ticket Items', 'Component Controller');


            cc.numbers = [0, 1, 2, 3, 4, 5];
            cc.selectedOption = 0;
            cc.cart = {};
            cc.itemsContent = [
                {
                    type: 'EARLY BIRD',
                    unavailable: true,
                    short_description: [
                        '2 day pass + After Party'
                    ],
                    price: 79,
                    description: {
                        swag: [

                        ],
                        access: [

                        ],
                        logistics: [

                        ],
                        notes: [

                        ]
                    }
                },
                {
                    type: '2 DAY SPECIAL',
                    short_description: [
                        'Friday + Saturday + After Party'
                    ],
                    price: 89,
                    description: {
                        swag: [

                        ],
                        access: [

                        ],
                        logistics: [

                        ],
                        notes: [

                        ]
                    }
                },
                {
                    type: '2 DAY',
                    short_description: [
                        'Friday + Saturday'
                    ],
                    price: 79,
                    description: {
                        swag: [

                        ],
                        access: [

                        ],
                        logistics: [

                        ],
                        notes: [

                        ]
                    }
                },
                {
                    type: 'SATURDAY',
                    short_description: [
                        'SATURDAY'
                    ],
                    price: 69,
                    description: {
                        swag: [

                        ],
                        access: [

                        ],
                        logistics: [

                        ],
                        notes: [

                        ]
                    }
                },
                {
                    type: 'VIP',
                    short_description: [
                        'Friday + Saturday + After Party',
                        'Beverage coupons worth \x20AC 25',
                        '25 % discount on Air + Style merchandise'
                    ],
                    price: 175,
                    description: {
                        swag: [

                        ],
                        access: [

                        ],
                        logistics: [

                        ],
                        notes: [

                        ]
                    }
                },
                {
                    type: 'VIP GOLD',
                    short_description: [
                        'Friday + Saturday + After Party',
                        'Complemenetary food + drinks',
                        '25 % discount on Air + Style merchandise'
                    ],
                    price: 300,
                    description: {
                        swag: [
                            'FRIDAY + SATURDAY + AFTER PARTY',
                            'Complemenetary food, soft drinks, beer and wine',
                            '25 % discount on all Air + Style merchandise',
                            '50 % discount on one day pass for Nordkette, K\xFChtai and Axamer Lizum (winter season 2016/17)'
                        ],
                        access: [
                            'VIP Gold Entrance',
                            'VIP Gold Indoor Lounge',
                            'VIP Terrace with Bar',
                            'VIP Sports Area',
                            'VIP Main Stage Area',
                            'Olympiahalle Party with VIP Area',
                            'Air + Style Athlete Party at Jimmy\'s & BLue Chip',
                            'WUB Skatehalle Innsbruck',
                        ],
                        logistics: [
                            'This ticket is valid for all IVB public transit within Innsbruck on the days of the event'
                        ],
                        notes: [
                            'The VIP Gold Ticket is not intended for persons under the age of 18. Please be prepared to show a valid ID at the entrance.'
                        ]
                    }
                },
                {
                    type: 'FAMILY',
                    short_description: [
                        'Saturday',
                        '\x20AC 69,00 (Adult) + \x20AC 5,00 (Child)',
                    ],
                    price: 71,
                    description: {
                        swag: [

                        ],
                        access: [

                        ],
                        logistics: [

                        ],
                        notes: [

                        ]
                    }
                },
            ]
            cc.itemsContent.map(function(item, idx) {
                cc.cart[idx] = '';
            })

            cc.chooseOption = chooseOption;
            cc.showItemInfo = showItemInfo;

            function chooseOption(idx, qty) {
                console.log("dsajfdsjdsla")
                console.log(cc.cart)
                runCartTotal()
                $rootScope.$broadcast('cartUpdate', cc.cart);
            }

            function showItemInfo(bool) {
                return bool = !bool
            }

            function runCartTotal() {
                cc.cart.total = 0;
                console.log("hello", cc.cart.total)
                for (var key in cc.cart) {
                    if (key !== 'total') {
                        console.log(cc.cart, cc.itemsContent[key].price)
                        cc.cart.total += cc.itemsContent[key].price * cc.cart[key]
                        console.log(cc.cart)
                    }
                };

                return cc.cart
            };

        }
    }
})();