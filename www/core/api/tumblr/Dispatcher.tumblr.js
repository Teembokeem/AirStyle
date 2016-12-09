(function () {
    'use strict';

    angular
        .module('Tumblr.module')
        .factory('TumblrDispatcher', TumblrDispatcher);

    TumblrDispatcher.$inject = ['urlService', '$http', '$q'];

    function TumblrDispatcher(urlService, $http, $q) {
        var api = urlService + '/tumblr',
            // Default to allow admin as user without token
            options = {
            },
            service = {
                get: get,
                getDummy: getDummy
            },
            dummy =  {
            meta: {
                what: 200,
                ok: 'bae'
            },
            response: {
                blog: 'teembokeem',
                posts: [
                {
                    message: 'INNSBRUCK TAGGED POST',
                    date: new Date('June 3, 2016'),
                    tags: ['innsbruck']
                },
                {
                    message: 'LA TAGGED POST',
                    date: new Date('June 3, 2016'),
                    tags: ['la']
                },
                {
                    message: 'BEIJING TAGGED POST',
                    date: new Date('June 3, 2016'),
                    tags: ['beijing']
                }
            ]
            }
        }

        return service;

        ////////////////
        function format(response) {
            return response.response;
        }

        function get() {
            return $http.get(api + '/' + params, options).then(format);
        }

        function getDummy() {
            var deferred = $q.defer();
            deferred.resolve(format(dummy));
            return deferred.promise;
        }

    }
})();
