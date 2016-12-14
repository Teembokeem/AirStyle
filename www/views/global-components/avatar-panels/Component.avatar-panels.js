(function() {
    'use strict';
    angular.module('Template')
        .component('avatarPanels', {
            bindings: {
                avatars: '=',
                max: '=',
                ref: '@',
                schedule: '=',
                view: '=',
                tag: '@'
            },
            templateUrl: 'views/global-components/avatar-panels/avatar-panels.html',
            controller: avatarPanelsCtrl,
            controllerAs: 'cc'
        })

    avatarPanelsCtrl.$inject = ['$log', '$state', '$stateParams'];

    function avatarPanelsCtrl($log, $state, $stateParams) {
        var cc = this;

        cc.stateChange = stateChange;
        cc.pageChange = pageChange;
        cc.state = $stateParams[Object.keys($stateParams)[0]];

        console.log(cc.tag)

        function pageChange(state, val) {
            val ? $state.go(state, { tour: val }) : $state.go(state);
        }
        function stateChange(state, val) {
            val ? $state.go(state, { avatar: val }) : $state.go(state);
        }

        cc.$onInit = function() {

        }
    }
})();