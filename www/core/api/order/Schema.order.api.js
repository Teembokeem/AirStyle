(function () {
    'use strict';

    angular
        .module('Order.api.module')
        .factory('OrderSchema', OrderSchema);

    OrderSchema.$inject = [];
    function OrderSchema() {

        function Order(order, index) {
            for (var i in order) {
                this[i] = order[i];
            }

            // this.status = statusEnum[this.status];
            this._statusHistory = this._statusHistory || [];
            // countUpvotes(this);
            this._index = index;
            this.idScan = false;
            this.verified = false;
            this.signed = false;
            // setaddress(this)
            return this;
        }

        function formatAddress(address) {
            var street = [address.number, address.street].join(' ')
            return [street, address.city, address.state, address.zip].join(', ');
        }

        function setaddress(order) {
            order.address = formatAddress(order.owner.addresses[order.address]);
            return order;
        }

        // Order.prototype.cahngeAddress = function (address) {
        //     this.address = address;
        //     return this;
        // }

        Order.prototype.updateStatusHistory = function () {
            this._statusHistory.push({
                status: this.status,
                timeStamp: Date.now()
            });
            return this;
        };

        Order.prototype.assign = function (driver) {
            var status = statusEnum.indexOf(this.status);
            if (status === 0) {
                this.driver = driver;
                this.status = statusEnum[status + 1];
                this.updateStatusHistory();
            }
            return this;
        };

        Order.prototype.removeProd = function (prod) {
            delete this.products[prod._id];
            delete this.qty[prod._id];
            this.calcTotal();
            return this;
        };

        Order.prototype.calcTotal = function () {
            this.total = 0;
            for (var i in this.products) {
                this.total += this.qty[i] * this.products[i].Price;
            }
            this.total = this.total.toFixed(2);
            return this.total;
        }



        Order.prototype.accept = function () {
            var status = statusEnum.indexOf(this.status);
            if (status == 1) {
                this.status = statusEnum[status + 1];
                this.updateStatusHistory();
            }
            return this;
        };

        Order.prototype.delete = function (orders) {
            for (var i = 0; i < orders.length; i++) {
                if (orders[i]._id == this._id) {
                    orders.splice(i, 1);
                    delete this;
                    return;
                }
            }
            return false;
        };

        Order.prototype.decline = function () {
            var status = statusEnum.indexOf(this.status);
            if (status == 1) {
                this.status = statusEnum[status - 1];
                this.updateStatusHistory();
            }
            return this;
        };

        Order.prototype.start = function () {
            var status = statusEnum.indexOf(this.status);
            if (status == 2) {
                this.status = statusEnum[status + 1];
                this.updateStatusHistory();
            }
            return this;
        };

        Order.prototype.complete = function () {
            console.log('Complete!', this);
            var status = statusEnum.indexOf(this.status);
            if (status == 3) {
                this.status = statusEnum[status + 1];
                this.updateStatusHistory();
            }
            return this;
        };

        Order.prototype.initialize = function () {
            console.log('Hello', this);
            return this;
        };

        Order.prototype.update = function (updates) {
            for (var i in updates) {
                this[i] = updates[i];
            }
            return this;
        };

        return Order;
    }

    //   Translator from number to status as text
    var statusEnum = [
        "Pending",
        "Assigned",
        "Accepted",
        "In Progress",
        "Completed"
    ];
})();