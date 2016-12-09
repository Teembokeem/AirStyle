(function () {
    'use strict';

    angular
        .module('Tumblr.module')
        .factory('TumblrDispatcher', TumblrDispatcher);

    TumblrDispatcher.$inject = ['urlService', '$http'];

    function TumblrDispatcher(urlService, $http) {
        var api = urlService + '/tumblr',
            // Default to allow admin as user without token
            options = {
            },
            service = {
                get: get
            };

        return service;

        ////////////////
        function format(response) {
            //   console.log('RESPONSE', response);
            return response.response;
        }

        function get(params) {
            return $http.get(api + '/' + params, options).then(format);
        }
    }
})();
