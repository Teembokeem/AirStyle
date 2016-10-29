(function() {
'use strict';

    // Declaring routes here for use in provider and service
    var loginRoute, signupRoute, refreshRoute, 
        serviceInjections; //Declaring injections of service to be used by $get in Provider

    angular
        .module('st18_Auth')
        .provider('st18_AuthDispatcher', st18_AuthDispatcherProvider);


        // TODO: find a better way than having to type $http four times for dep injection to work
    // Injections
    serviceInjections = ['$http', serviceGetter];
    function serviceGetter($http) {
        // Service to use in app
        function st18_AuthDispatcher($http) {
            var service = {
                login        : login,
                signup       : signup,
                refreshToken : refreshToken
            };

            return service;

            ////////////////
            function format(data) {
                if (data.data.error) {
                    throw data.data;
                }
                return data.data;
            }

            // TODO: write function to format catches and thens
            function login(data) {
                return $http.post(loginRoute, data).then(format).catch(format);
            }
            
            function signup(data) {
                return $http.post(signupRoute, data).then(format).catch(format);
            }
            
            function refreshToken(token) {
                return $http.post(tokenRoute, data).then(format).catch(format);
            }
        }

        return new st18_AuthDispatcher($http);
    }

    // TODO: split up provider and factory somehow?

    st18_AuthDispatcherProvider.$inject = [];
    function st18_AuthDispatcherProvider() {
        var provider = {
            setRoutes: setRoutes,
            setLoginRoute: setLoginRoute,
            setSignupRoute: setSignupRoute,
            setRefreshRoute: setRefreshRoute,
            $get : serviceInjections
        };

        return provider;

        ////////////////
        function setLoginRoute(_login) {
            loginRoute   = _login;            
        }

        function setSignupRoute(_signup) {
            signupRoute  = _signup;
        }

        function setRefreshRoute(_refresh) {
            refreshRoute = _refresh;
        }

        function _setRoutes(_login, _signup, _refresh) {
            setLoginRoute(_login);
            setSignupRoute(_signup);
            setRefreshRoute(_refresh);
            return;
        }

        function setRoutes(loginRoute_, signupRoute_, refreshRoute_) {
            // User can pass in array of routes
            if (Array.isArray(loginRoute)) {
                return _setRoutes(loginRoute_[0], loginRoute_[1], loginRoute_[2]);
            }

            if (typeof loginRoute_ === 'object') {
                var routes = loginRoute_;
                return _setRoutes(routes.loginRoute, routes.signupRoute, routes.refreshRoute);  
            }

            return _setRoutes(loginRoute_, signupRoute_, refreshRoute_);
        }
    }

})();