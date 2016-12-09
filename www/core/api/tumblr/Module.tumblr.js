(function () {
    'use strict';

    angular.module('Tumblr.module', ['Api.base.module'])
        .run(function (TumblrManager, storage) {

            TumblrManager.store = new storage('Tumblr');
            console.log('namespace', TumblrManager.store, TumblrManager.store.getItem());
            //   TODO: call server on load instead of grabbing from local storage
            var tumblr = TumblrManager.store.getItem();
            if (tumblr != undefined) {
                console.warn("STORED IN LOCAL, make sure to call server");
                TumblrManager.Posts = TumblrManager.store.getItem();
            } else {
                TumblrManager.getPosts().then(function (d) {
                    console.log('BACK', d);
                });

            }
        });
})();