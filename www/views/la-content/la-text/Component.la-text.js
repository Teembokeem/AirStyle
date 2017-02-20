(function () {
    'use strict';
    angular.module('LaContent.view.module')
        .component('laText', {
            bindings: {

            },
            templateUrl: 'views/la-content/la-text/la-text.html',
            controller: laTextCtrl,
            controllerAs: 'cc'
        })

    laTextCtrl.$inject = ['$log', '$stateParams'];

    function laTextCtrl($log, $stateParams) {
        var cc = this;

        cc.$onInit = function () {

        }
    }
})();
