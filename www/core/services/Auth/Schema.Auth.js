(function() {
'use strict';

    angular
        .module('st18_Auth')
        .factory('st18_AuthSchema', st18_AuthSchema);

    st18_AuthSchema.$inject = ['$http', '$q'];
    function st18_AuthSchema($http, $q) {
        // var route = BaseUrl.api + 'users/';
        
        // TODO: think of better way to do api calls
        function User(user) {
            for (var i in user) {
                this[i] = user[i];
            }

            this.fullName = this.name.first + ' ' + this.name.last;
            return this;
        }

        return User;
    }
})();