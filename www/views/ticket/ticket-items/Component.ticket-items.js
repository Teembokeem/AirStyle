var _cart, _items;

(function () {
    'use strict';
    angular.module('Ticket.view.module')
        .component('ticketItems', {
            bindings: {

            },
            templateUrl: 'views/ticket/ticket-items/ticket-items.html',
            controller: ticketItemsCtrl,
            controllerAs: 'cc'
        });

    ticketItemsCtrl.$inject = ['$log', '$rootScope', 'itemsContent', 'Cart'];

    function ticketItemsCtrl($log, $rootScope, itemsContent, Cart) {
        var cc = this;
        _cart = Cart;
        _items = itemsContent;
        cc.$onInit = function () {

            console.log('FIND BY TYPE', itemsContent.findByType('FAMILY'))
            cc.numbers = [0, 1, 2, 3, 4, 5];
            cc.selectedOption = 0;
            cc.cart = {};
            cc.itemsContent = itemsContent;

            cc.itemsContent.map(function (item, idx) {
                cc.cart[idx] = '';
            });

            cc.chooseOption = chooseOption;
            cc.showItemInfo = showItemInfo;

            function chooseOption(idx, qty) {
                console.log("dsajfdsjdsla");
                console.log(cc.cart);
                runCartTotal();
                $rootScope.$broadcast('cartUpdate', cc.cart);
            }

            function showItemInfo(bool) {
                return bool = !bool;
            }

            function runCartTotal() {
                cc.cart.total = 0;
                console.log("hello", cc.cart.total);
                for (var key in cc.cart) {
                    if (key !== 'total') {
                        console.log(cc.cart, cc.itemsContent[key].price);
                        cc.cart.total += cc.itemsContent[key].price * cc.cart[key];
                        console.log(cc.cart);
                    }
                }

                return cc.cart;
            };

        }
    }
})();