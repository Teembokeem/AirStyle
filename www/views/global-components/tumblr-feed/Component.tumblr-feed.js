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

   TumblrFeedCtrl.$inject = ['$log'];

    function TumblrFeedCtrl($log) {
        var cc = this;

        cc.$onInit = function () {

            cc.tumblrFeedContent = [
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
        }
    }
})();