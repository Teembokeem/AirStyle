(function () {
    'use strict';
    angular.module('Template')
        .component('twitterFeed', {
            bindings: {

            },
            templateUrl: 'views/global-components/twitter-feed/twitter-feed.html',
            controller: TwitterFeedCtrl,
            controllerAs: 'cc'
        })

    TwitterFeedCtrl.$inject = ['$log'];

    function TwitterFeedCtrl($log) {
        var cc = this;

        cc.$onInit = function () {

            cc.twitterFeedContent = [
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
                },
                {
                    message: 'the final four of this years air + style los angeles superfinal:',
                    date: new Date('June 3, 2016')
                },
                {
                    message: 'the final four of this years air + style los angeles superfinal:',
                    date: new Date('June 3, 2016')
                },
            ]
        }
    }
})();