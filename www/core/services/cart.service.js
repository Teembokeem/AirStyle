(function () {
    'use strict';

    var _cart = {};

    angular
        .module('Services')
        .factory('Cart', Cart);

    Cart.$inject = [];
    function Cart() {
        var service = {
            getCart: getCart,
            addItem: addItem,
            removeItem: removeItem,
            calcTotal: calcTotal
        };

        return service;

        ////////////////
        function getCart() {
            return _cart;
        }

        function addItem(item, qty) {
            if (!item.type) {
                throw 'Item must have type as key for cart';
            }
            var cartItem = _cart[item.type];
            if (!cartItem) {
                _cart[item.type] = item;
                item.qty = qty || 1;
            } else {
                _cart[item.type].qty += qty || 1;
            }
            calcTotal();
            return _cart;
        }

        function removeItem(item, qty) {
            if (!item.type) {
                throw 'Item must have type as key for cart';
            }
            var cartItem = _cart[item.type];
            if (!cartItem) {
                return _cart;
            }
            cartItem.qty -= qty || 1;
            if (cartItem.qty <= 0) {
                delete _cart[item.type];
            }
            calcTotal();
            return _cart;
        }

        function calcTotal() {
            var total = 0;
            for (var key in _cart) {
                if (_cart.hasOwnProperty(key)) {
                    var item = _cart[key];
                    if (item.qty && item.price) {
                        total += item.price * item.qty;
                    }
                }
            }
            _cart.total = total;
            return _cart;
        }
    }
})();