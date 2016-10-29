(function() {
'use strict';

    angular
        .module('st18_Auth')
        .factory('st18_AuthStorage', st18_AuthStorage);

    st18_AuthStorage.$inject = ['store'];
    function st18_AuthStorage(store) {
        var authStorage = store.getNamespacedStore('auth');
        
        var tokenStorage = {
            set: set('token'),
            get: get('token')
        };

        var userStorage = {
            set: set('user'),
            get: get('user')
        };

        var service = {
            token : tokenStorage,
            user  : userStorage
        };
        
        return service;

        function set(key) {
            return function(data) {
                return authStorage.set(key, data);
            };
        }

        function get(key) {
            return function() {
                return authStorage.get(key);
            };
        }
    }
})();