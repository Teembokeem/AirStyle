var _scope;
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

    TumblrFeedCtrl.$inject = ['$log', 'TumblrManager', '$stateParams', '$scope'];

    function TumblrFeedCtrl($log, TumblrManager, $stateParams, $scope) {
        var cc = this;

        cc.go = go;

        function go(link) {
            window.open(link);
        };

        cc.$onInit = function () {

            // cc.tumblrFeedContent = $stateParams.tour ? TumblrManager.filterPosts($stateParams.tour) : TumblrManager.filterPosts();
            // console.log(cc.tumblrFeedContent)
            if (localStorage.getItem('Tumblr')) {
                return cc.tumblrFeedContent = $stateParams.tour ? JSON.parse(localStorage.getItem('Tumblr')).filter(function (post) {
                    return $stateParams.tour == 'la' ? post.tags.indexOf('losangeles') != -1 : post.tags.indexOf($stateParams.tour) != -1
                }) : JSON.parse(localStorage.getItem('Tumblr'));;
            }
            cc.tumblrFeedContent = TumblrManager.Posts.then(function (posts) {
                cc.tumblrFeedContent = $stateParams.tour ? posts.filter(function (post) {
                    return $stateParams.tour == 'la' ? post.tags.indexOf('losangeles') != -1 : post.tags.indexOf($stateParams.tour) != -1
                }) : posts;

            })
        }
    }
})();