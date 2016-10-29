(function() {
    'use strict';

    angular.module('st18_Auth')
        .factory('st18_AuthInterceptor', st18_AuthInterceptor);

        st18_AuthInterceptor.$inject = ['st18_AuthStorage'];
        function st18_AuthInterceptor(_storage) {
            var service = {
                request  : request
            };
            
            return service;

            /////////////
            function request(req) {
                var token = _storage.token.get();
                if (token) {
                    // TODO: create config to set where token should be attached and name. ex: body._xaccesstoken
                    req.headers.Authorization = 'Bearer ' + token;
                }
                return req;
            }
        }

})();