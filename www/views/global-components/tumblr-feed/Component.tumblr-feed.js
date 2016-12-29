(function () {
    'use strict';
    angular.module('Template')
        .component('tumblrFeed', {
            bindings: {

            },
            templateUrl: 'views/global-components/tumblr-feed/tumblr-feed.html',
            controller: TumblrFeedCtrl,
            controllerAs: 'cc'
        })

    TumblrFeedCtrl.$inject = ['$log', 'TumblrManager', '$stateParams'];

    function TumblrFeedCtrl($log, TumblrManager, $stateParams) {
        var cc = this;

        cc.go = go;

        function go(link) {
            window.location = link;
        };

        cc.$onInit = function () {

            cc.tumblrFeedContent = TumblrManager.filterPosts($stateParams.tour);
        }
    }
})();