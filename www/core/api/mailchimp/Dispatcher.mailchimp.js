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
            return response.data;
        }

        function post(data) {
            return $http({
                method: 'POST',
                url: api,
                data: {
                    email_address: data,
                    status: 'subscribed'
                }
            }).then(format);
        }
    }
})();
