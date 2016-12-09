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

        function transformResponse(Posts) {
            return Posts.posts;
        }

        function writePosts(Posts) {
            service.store.setItem('', Posts);
        }


        function getPosts() {
            // service.Posts = TumblrDispatcher.get().then(transformResponse).then(setPosts);
            // return service.Posts;
            service.Posts = [
                {
                    message: 'story time with eddie wall: best snowboarding destinations in the us',
                    date: new Date('June 3, 2016')
                },
                {
                    message: 'story time with eddie wall: best snowboarding destinations in the us',
                    date: new Date('June 3, 2016')
                },
                {
                    message: 'sven thorgren 2016 air+style tour champion',
                    date: new Date('June 3, 2016')
                }
            ]
            setPosts(service.Posts);
            return service.Posts;
        }

    }
})();