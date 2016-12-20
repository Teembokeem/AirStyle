(function () {
    'use strict';

    angular
        .module('Mailchimp.module')
        .factory('MailchimpManager', MailchimpManager);

    MailchimpManager.$inject = ['MailchimpDispatcher', 'storage'];

    function MailchimpManager(MailchimpDispatcher, storage) {
        var service = {
            subscribeUser: subscribeUser,
        };

        return service;

        ////////////////

        function setUser(User) {
            writeUser(User);
            service.User = User;
            return service.User;
        }

        function writeUser(User) {
            service.store.setItem('', User);
        }

        function transformResponse(response) {
            return response;
        }


        function subscribeUser() {
            return MailchimpDispatcher.post().then(transformResponse);
        }

    }
})();