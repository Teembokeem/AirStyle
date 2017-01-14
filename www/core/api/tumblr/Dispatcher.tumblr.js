(function () {
    'use strict';

    angular
        .module('Tumblr.module')
        .factory('TumblrDispatcher', TumblrDispatcher);

    TumblrDispatcher.$inject = ['urlService', '$http', '$q'];

    function TumblrDispatcher(urlService, $http, $q) {
        // var api = '/api/tumblr',
        var api = 'http://localhost:3000/api/tumblr',
            // Default to allow admin as user without token
            options = {
            },
            service = {
                get: get,
                getDummy: getDummy
            },
            dummy = {
                meta: {
                    what: 200,
                    ok: 'bae'
                },
                response: {
                    blog: 'teembokeem',
                    posts: [
                        {
                            message: 'Story Time with Eddie Wall: Best Snowboarding Locations in the U.S.',
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
            return response.data.response;
        }

        function get() {
            return $http.get(api, options).then(format);
        }

        function getDummy() {
            var deferred = $q.defer();
            deferred.resolve(format(dummy));
            return deferred.promise;
        }

    }
})();
