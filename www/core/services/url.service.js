(function () {
    'use strict';

    angular
        .module('urlService', [])
        .factory('urlService', urlService);

    urlService.$inject = ['$log'];

    function urlService($log) {
        var base = 'http://localhost:3000',
            api = base + '/api';

        var service = {
            base: base,
            api: api
        };

        return service;

        ////////////////

    }
})();