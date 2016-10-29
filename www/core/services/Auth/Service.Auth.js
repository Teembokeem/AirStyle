console.warn('Gloabls Defined')
var _r, _user;
(function() {
'use strict';
    var _urlRouter, _authRoute, _noAuthRoute, User;
    angular
        .module('st18_Auth')
        .factory('st18_Auth', st18_Auth);

    st18_Auth.$inject = ['$q', 'st18_AuthStorage', 'st18_AuthDispatcher', 'st18_AuthSchema', '$rootScope'];
    // Renaming st18_AuthStorage and the dispatcher for easier typing
    function st18_Auth($q, _storage, _dispatcher, UserSchema, $rootScope) {
        var service = {
            User         : User,
            login        : login,
            logout       : logout,
            signup       : signup,
            refreshToken : refreshToken,
            getUser      : getUser,
            getToken     : getToken,
            updateUser   : updateUser,
            changeRoute  : changeRoute,
            isLoggedIn   : isLoggedIn

            ,set_routes : set_routes
            ,set_router : set_router
        };
        
        _r = service;
        return service;

        ////////////////
        // TODO: figure out res.data.data || res.data
        function checkPropsAndSlim(data) {
            var user = data.user,
                token = data.token;

            if (!user && !token) {
                if (data.error) {
                    throw data.error;
                }
                throw 'Error expected data to have .user and .token properties';
            }
            service.User = new UserSchema(user);
            _user = service.User;
            setUser(user);
            setToken(token);
            $rootScope.user = service.User;
            return data;
        }

        function login(data) {
            return _dispatcher.login(data)
                .then(checkPropsAndSlim);
        }
        // console.warn('Find a better solution than reloading angular data!');
        function logout() {
            // TODO: think about state.go('somewhere');
            // TODO: figure out a way to clear;
            setUser(null);
            setToken(null);
            service.User = null;
            $rootScope.user = null;
            // return angular.reloadWithDebugInfo();
        }

        function isLoggedIn() {
            return !!getUser();
        }

        function signup(data) {
            return _dispatcher.signup(data).then(checkPropsAndSlim);
        }

        function refreshToken() {
            var token = _storage.token.get();
            if (token) {
                return _dispatcher.refreshToken(token);
            }
            return $q.defer().reject(false);
        }

        function getUser() {
            var _user_ = _storage.user.get();
            if (_user_ ){
                delete service.User;
                service.User = new UserSchema(_user_);
                _user = service.User;
                return service.User;
            }
            return false;
        }

        function getToken() {
            return _storage.token.get();
        }

        function updateUser(info) {
            return service.User.update(info).then(checkPropsAndSlim);
        }

        function setUser(data) {
            _storage.user.set(data);
        }

        function setToken(data) {
            _storage.token.set(data);
        }

        function changeRoute(state) {
            var route = state ? _authRoute : _noAuthRoute;
            _urlRouter(route);
        }

        function set_routes(noAuth, auth) {
            _noAuthRoute = noAuth;
            _authRoute = auth;
        }

        function set_router(router) {
            _urlRouter = router;
        }
    }
})();