(function () {
    'use strict';

    angular
        .module('Services')
        .factory('storage', storage);

    storage.$inject = [];
    function storage() {
        var store = {
            getItem: getItem,
            setItem: setItem
        };

        var namespaces = {};

        function service(namespace) {
            if (namespaces[namespace]) {
                throw 'Error ' + namespace + ' already in use!';
            }
            namespaces[namespace] = true;
            this._namespace = namespace;
            return this;
        }

        service.prototype.getItem = function (name) {
            if (name) {
                name = '.' + name;
            } else {
                name = '';
            }
            return store.getItem(this._namespace + name);
        }

        service.prototype.setItem = function (name, value) {
            if (name) {
                name = '.' + name;
            } else {
                name = '';
            }
            return store.setItem(this._namespace + name, value);
        }

        return service;

        ////////////////
        function getItem(name) {
            return JSON.parse(localStorage.getItem(name));
        }

        function setItem(name, value) {
            localStorage.setItem(name, JSON.stringify(value));
            return getItem(name);
        }
    }
})();