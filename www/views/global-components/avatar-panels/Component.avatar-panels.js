(function () {
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

    avatarPanelsCtrl.$inject = ['$log', '$state', '$stateParams', 'Tours'];

    function avatarPanelsCtrl($log, $state, $stateParams, Tours) {
        var cc = this;

        cc.stateChange = stateChange;
        cc.pageChange = pageChange;
        cc.state = $stateParams[Object.keys($stateParams)[0]];
        $stateParams.tour ? cc.tour = $stateParams.tour : cc.tour = $state.current.name;

        cc.overlay = null;
        cc.indexTracker = null;


        function pageChange(state, val) {
            if (state == 'app.schedule' && !Tours($stateParams.tour).schedule) return swal({ title: '', text: 'Hang tight! Schedule coming soon.', type: 'info', timer: 2500 });
            val ? $state.go(state, { tour: val }) : $state.go(state);
        }
        function stateChange(state, val) {
            val ? $state.go(state, { avatar: val }) : $state.go(state);
        }

        cc.$onInit = function () {

        }
    }
})();