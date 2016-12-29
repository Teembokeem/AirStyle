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
            filterPosts: filterPosts
        };


        return service;

        ////////////////

        function setPosts(Posts) {
            writePosts(Posts);
            service.Posts = Posts;
            return service.Posts;
        }

        function writePosts(Posts) {
            service.store.setItem('', Posts);
        }

        function transformResponse(response) {
            var _posts = {
                'innsbruck': [],
                'la': [],
                'beijing': []
            },
                Posts = response.posts;
            for (var tour in _posts) {
                for (var i = 0; i < Posts.length; i++) {
                    if (Posts[i].tags.indexOf(tour) != -1) {
                        Posts[i].date = Date.parse(Posts[i].date)
                        _posts[tour].push(Posts[i]);
                    }
                }
            }

            return _posts;
        }

        function filterPosts(param) {
            if (param) {
                return service.Posts[param];
            } else {
                var arr = [];
                for (var tour in service.Posts) {
                    arr.push(service.Posts[tour]);
                };
                // return arr;
                var transformArr = arr.reduce(function (a, b) {
                    return a.concat(b);
                })
                return transformArr;
            }
        }


        function getPosts() {
            service.Posts = TumblrDispatcher.get().then(transformResponse).then(setPosts);
            return service.Posts;
        }

    }
})();