(function () {
    'use strict';

    angular.module('st18_Auth', [
        'angular-storage',
        'urlService'
    ])
        // Configures authentication endpoint locations

        .config(interceptor)
        .config(function (urlServiceProvider, st18_AuthDispatcherProvider) {
            // this sets base route for auth module, can be extracted to different file and loaded elsewhere if needed
            var route = urlServiceProvider.$get().base;
            st18_AuthDispatcherProvider.setRoutes(
                route + 'authenticate',
                route + 'api/drivers',
                route + 'api/refreshToken'
            );

            // st18_AuthDispatcherProvider.$get().login('Poopy pants');
        })
        // Configures default routing
        .config(function ($urlRouterProvider, st18_AuthProvider) {
            // TODO: look into making auth provider for configuring route changing and logout/login callbacks
            // TODO: put this in the Auth Provider
            var auth = st18_AuthProvider.$get();
            // auth.set_router($urlRouterProvider.otherwise);
            // auth.set_routes('/login', '/orders/index');
            // auth.changeRoute(auth.isLoggedIn());
        });

    interceptor.$inject = ['$httpProvider'];
    function interceptor($httpProvider) {
        $httpProvider.interceptors.push('st18_AuthInterceptor');
    }
})();