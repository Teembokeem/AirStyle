(function () {
    'use strict';

    angular
        .module('Order.api.module')
        .factory('OrderDispatcher', OrderDispatcher);

    OrderDispatcher.$inject = ['urlService', '$http'];

    function OrderDispatcher(urlService, $http) {
        var api = urlService.api + 'driver-orders',
            // Default to allow admin as suser without token
            // options = {
            //   headers: {
            //     allow : 'Greg'
            //   }
            // },
            service = {
                get: get,
                post: post,
                update: update,
                destroy: destroy
            };

        return service;

        ////////////////
        function format(response) {
            return response.data;
        }

        function get() {
            return $http.get(api).then(format);
        }

        function post(data) {
            return $http.post(api, data).then(format);
        }

        function update(params, data) {
            return $http.put(api + '/?_id=' + params, data).then(format);
        }

        function destroy(params) {
            return $http.delete(api + '/?_id=').then(format);
        }
    }
})();