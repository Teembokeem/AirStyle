(function() {
    'use strict';
    angular.module('Template')
        .component('tumblrFeed', {
            bindings: {

            },
            templateUrl: 'views/global-components/tumblr-feed/tumblr-feed.html',
            controller: TumblrFeedCtrl,
            controllerAs: 'cc'
        })

    TumblrFeedCtrl.$inject = ['$log', 'TumblrManager'];

    function TumblrFeedCtrl($log, TumblrManager) {
        var cc = this;

        cc.$onInit = function() {
            console.log(TumblrManager.Posts);

            cc.tumblrFeedContent = TumblrManager.Posts;
        }
    }
})();