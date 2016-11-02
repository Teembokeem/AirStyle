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
                runCartTotal();
                $rootScope.$broadcast('cartUpdate', cc.cart);
            }

            function showItemInfo(bool) {
                return bool = !bool;
            }

            function runCartTotal() {
                cc.cart.total = 0;
                for (var key in cc.cart) {
                    if (key !== 'total') {
                        cc.cart.total += cc.itemsContent[key].price * cc.cart[key];
                    }
                }

                return cc.cart;
            };

        }
    }
})();