var _posts;
(function () {
    'use strict';

    var Posts = [];
    angular
        .module('Tumblr.module')
        .factory('TumblrManager', TumblrManager);

    TumblrManager.$inject = ['TumblrDispatcher', 'storage', '$q'];

    function TumblrManager(TumblrDispatcher, storage, $q) {
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
        };

        function writePosts(Posts) {
            service.store.setItem('', Posts);
        };

        function transformResponse(response) {
            Posts = response.posts;

            Posts.forEach(function (post) {
                cleanDate(post);
                if (post.body) scrapeImage(post);
            });

            return Posts;
        };

        function cleanDate(post) {
            post.date = Date.parse(new Date(post.date));
            return post;
        };

        function scrapeImage(post) {
            var cursor = post.body.indexOf('src="'); // find src tag from the image. 
            var preshift = cursor + 5; // value to shift start and end values since we're searching in a substring. 
            var substring = post.body.substring(preshift);
            var relativeImageSource = substring.indexOf('"');
            var absoluteImageSource = post.body.substring(preshift, preshift + relativeImageSource);
            post.image = absoluteImageSource;
            return post;
        };

        function filterPosts(param) {
            if (param) {
                return service.Posts.filter(function (post) {
                    return post.tags.indexOf(param) != -1
                });
            } else {
                // return arr;
                return service.Posts;
            };
        };


        function getPosts() {
            service.Posts = TumblrDispatcher.get().then(transformResponse).then(setPosts);
            _posts = service.Posts;
            return service.Posts;
        };

    }
})();