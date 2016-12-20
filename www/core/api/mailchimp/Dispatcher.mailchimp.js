(function () {
    'use strict';

    angular
        .module('Mailchimp.module')
        .factory('MailchimpDispatcher', MailchimpDispatcher);

    MailchimpDispatcher.$inject = ['urlService', '$http', '$q'];

    function MailchimpDispatcher(urlService, $http, $q) {
        var api = urlService.api + '/mc',
            // Default to allow admin as user without token
            options = {
            },
            service = {
                post: post,
            };

        return service;

        ////////////////
        function format(response) {
            return response.data.response;
        }

        function post() {
            return $http.post(api, options).then(format);
        }
    }
})();
