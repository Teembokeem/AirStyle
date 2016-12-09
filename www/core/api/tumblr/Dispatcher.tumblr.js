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
                    message: 'story time with eddie wall: best snowboarding destinations in the us',
                    date: new Date('June 3, 2016')
                },
                {
                    message: 'story time with eddie wall: best snowboarding destinations in the us',
                    date: new Date('June 3, 2016')
                },
                {
                    message: 'sven thorgren 2016 air+style tour champion',
                    date: new Date('June 3, 2016')
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
