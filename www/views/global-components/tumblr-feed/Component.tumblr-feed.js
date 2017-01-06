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
            window.open(link);
        };

        cc.$onInit = function () {

            $stateParams.tour ? TumblrManager.filterPosts($stateParams.tour).then(function (arr) {
                cc.tumblrFeedContent = arr;
            }) : TumblrManager.filterPosts().then(function (arr) {
                cc.tumblrFeedContent = arr
            });
            console.log(cc.tumblrFeedContent)
        }
    }
})();