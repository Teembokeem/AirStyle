(function () {
    'use strict';
    angular.module('BeijingContent.view.module')
        .component('beijingText', {
            bindings: {

            },
            templateUrl: 'views/beijing-content/beijing-text/beijing-text.html',
            controller: beijingTextCtrl,
            controllerAs: 'cc'
        })

    beijingTextCtrl.$inject = ['$log', '$stateParams'];

    function beijingTextCtrl($log, $stateParams) {
        var cc = this;

        cc.$onInit = function () {

        }
    }
})();