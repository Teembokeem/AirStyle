(function () {
    'use strict';

    var Posts = [];
    angular
        .module('Tumblr.module')
        .factory('TumblrManager', TumblrManager);

    TumblrManager.$inject = ['TumblrDispatcher', 'storage'];

    function TumblrManager(TumblrDispatcher, storage) {
        var service = {
            Posts: Posts,
            getPosts: getPosts,
        };


        return service;

        ////////////////

        function setPosts(Posts) {
            writePosts(Posts);
            service.Posts = Posts;
            return service.Posts;
        }

        function transformResponse(response) {
            var _posts = {
                    'innsbruck': [],
                    'la': [],
                    'beijing': []
                },
                Posts = response.posts;
            for (var tour in _posts) {
                for (var i; i < Posts.length; i++) {
                    if (Posts[i].tags.indexOf(tour) != -1) {
                        _posts[tour].push(Posts[i]);
                    }
                }
            }

            return _posts;
        }

        function writePosts(Posts) {
            service.store.setItem('', Posts);
        }


        function getPosts() {
            service.Posts = TumblrDispatcher.getDummy().then(transformResponse).then(setPosts);
            return service.Posts;
        }

    }
})();