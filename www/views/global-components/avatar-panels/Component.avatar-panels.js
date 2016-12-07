(function() {
    'use strict';
    angular.module('Template')
        .component('avatarPanels', {
            bindings: {
                avatars: '=',
                ref: '@',
                schedule: '=',
                view: '='
            },
            templateUrl: 'views/global-components/avatar-panels/avatar-panels.html',
            controller: avatarPanelsCtrl,
            controllerAs: 'cc'
        })

    avatarPanelsCtrl.$inject = ['$log', '$state'];

    function avatarPanelsCtrl($log, $state) {
        var cc = this;

        cc.stateChange = stateChange;

        function stateChange(state, val) {
            $state.go(state, { avatar: val });
        }

        cc.$onInit = function() {

            console.log(cc)
        }
    }
})();