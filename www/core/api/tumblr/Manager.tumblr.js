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
            var cursor = post.body.indexOf('img src="'); // find src tag from the image. 
            if (cursor != -1) {
                var preshift = cursor + 9; // value to shift start and end values since we're searching in a substring. 
                var substring = post.body.substring(preshift);
                var relativeImageSource = substring.indexOf('"');
                var absoluteImageSource = post.body.substring(preshift, preshift + relativeImageSource);
                post.image = absoluteImageSource;
                return post;
            } else {
                return setGrabBagImage(post);
            };
        };

        function setGrabBagImage(post) {
            var tagCounter = 0;
            var codex = ['beijing', 'losangeles', 'innsbruck'];
            var cityImages = [9, 12, 9];

            post.tags.forEach(function (tag) {
                if (tag.match('beijing') || tag.match('losangeles') || tag.match('innsbruck')) {
                    tagCounter++;
                };
            });
            if (tagCounter > 1) {
                var cityLotteryNumber = Math.floor(Math.random(0, 1)) * 3;
                var randomCity = codex[cityLotteryNumber];
                var randomImage = Math.floor(Math.random() * cityImages[cityLotteryNumber]) + 1;
                post.image = '../img/tumblr/' + randomCity + '/' + randomImage + '.jpg';
                return post;
            } else {
                // console.log("hi", post.tags)
                var randomImage = Math.floor(Math.random() * cityImages[codex.indexOf(post.tags[0])]) + 1;
                // console.log(randomImage)
                post.image = '../img/tumblr/' + post.tags[0] + '/' + randomImage + '.jpg';
                // console.log(post.image)
                return post;
            }

        }

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