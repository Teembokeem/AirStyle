var _video;
(function () {
    'use strict';
    angular.module('LiveStream.view.module')
        .component('blogs', {
            bindings: {

            },
            templateUrl: 'views/live-stream/blogs/blogs.html',
            controller: blogsCtrl,
            controllerAs: 'cc'
        })

    blogsCtrl.$inject = ['$log', '$state', '$rootScope'];

    function blogsCtrl($log, $state, $rootScope) {
        var myElement = angular.element(document.querySelector('#living-blog'))[0];
        var cc = this;
        console.log("MY ELE", myElement)
        nmoLiveBlog.renderElement(myElement)
    }
})();
