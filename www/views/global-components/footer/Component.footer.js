(function () {
    'use strict';
    angular.module('Template')
        .component('footer', {
            bindings: {

            },
            templateUrl: 'views/global-components/footer/footer.html',
            controller: FooterCtrl,
            controllerAs: 'cc'
        })

    FooterCtrl.$inject = ['$log', '$state', '$rootScope'];

    function FooterCtrl($log, $state, $rootScope) {
        var cc = this;

        cc.go = go;

        function go(val) {
            $state.go(val);
            $rootScope.$broadcast('noNav', false);
        };

        cc.$onInit = function () {

        }
    }
})();