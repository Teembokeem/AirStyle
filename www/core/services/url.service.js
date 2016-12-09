(function () {
    'use strict';

    angular
        .module('urlService', [])
        .factory('urlService', urlService);

    urlService.$inject = ['$log'];

    function urlService($log) {
        var base = '',
            api = base + 'api/',
            url;

        var service = {
            base: base,
            api: api
        };

        return service;

        ////////////////

    }
})();