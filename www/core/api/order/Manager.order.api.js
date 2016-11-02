var _serv
(function () {
    'use strict';

    var Orders = [],
        AssignedOrders = [],
        AcceptedOrders = [];
    angular
        .module('Order.api.module')
        .factory('OrderManager', OrderManager);

    OrderManager.$inject = ['OrderDispatcher', 'OrderSchema', 'store'];
    function OrderManager(OrderDispatcher, OrderSchema, store) {
        var service = {
            Orders: Orders,
            AssignedOrders: AssignedOrders,
            AcceptedOrders: AcceptedOrders,
            store: store.getNamespacedStore('orders'),
            transformOrders: transformOrders,
            createOrder: createOrder,
            removeOrders: removeOrders,
            getOrders: getOrders,
            updateOrder: updateOrder,
            deleteOrder: deleteOrder,
            makeSubset: makeSubset,
        };

        var Schema = {
            status: 0,
            products: [],
            qty: [],
            total: 0
        };
        _serv = service;
        return service;

        ////////////////
        function getOrders() {
            return OrderDispatcher.get().then(transformOrders).then(splitOrders).then(setOrders);
        }
        function splitOrders(orders) {
            var obj = {
                'assigned': AssignedOrders,
                'accepted': AcceptedOrders
            }
            // TEMP
            orders.forEach(function (order, idx) {
                order.status = 'assigned';
            })
            // 
            orders.map(function (order) {
                obj[order.status].push(order);
            });
            return orders;
        }
        function makeSubset(descriptor, parameter, value) {
            if (!service.Orders) return console.error("Cannot Find Source at OrderService.Orders", service.Orders);
            return service[descriptor] = service.Orders.filter(function (order) { return order[parameter] == value })
        }

        function newOrder(order, index) {
            return new OrderSchema(order, index);
        }

        function createOrder(order) {
            OrderDispatcher.post(order)
        }

        function updateOrder(order, updates) {
            var index = order._index;
            return OrderDispatcher.update(order, updates).then(function (newOrder) {
                newOrder = newOrder(newOrder, index);
                service.Orders[index] = new OrderSchema(newOrder, index);
                return newOrder;
            })
        }

        function deleteOrder(order) {
            return OrderDispatcher.destroy(order).then(function (done) {
                return done
            })
        }
        function transformOrders(arr) {
            if (!Array.isArray(arr)) {
                return new OrderSchema(arr);
            }
            var Orders = [];
            for (var i = 0; i < arr.length; i++) {
                Orders.push(newOrder(arr[i], i));
            }
            return Orders;
        }

        function setOrders(Orders) {
            // Orders.set(Orders);
            writeOrders(Orders);
            service.Orders = Orders;
            return service.Orders;
        }

        function writeOrders(Orders) {
            localStorage.setItem('Orders', JSON.stringify(Orders));
        }


        function removeOrders(Orders) {
            for (var i = 0; i < service.Orders.length; i++) {
                var checkOrders = service.Orders[i];
                if (checkOrders == Orders) {
                    service.Orders.splice(i, 1);
                    return service.Orders;
                }
            }
            //   console.error('Error locating Orders', Orders);
            return service.Orders;
        }


    }
})();