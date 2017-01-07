(function () {
    'use strict';
    angular.module('Template')
        .component('partners', {
            bindings: {

            },
            templateUrl: 'views/global-components/partners/partners.html',
            controller: partnersCtrl,
            controllerAs: 'cc'
        })

    partnersCtrl.$inject = ['$log', '$window', 'Tours', '$stateParams'];

    function partnersCtrl($log, $window, Tours, $stateParams) {
        var cc = this;
        cc.touchScreen;

        cc.$onInit = function () {
            $window.innerWidth < 1024 ? cc.touchScreen = true : cc.touchScreen = false;
            cc.partnerContent = $stateParams.tour ? Tours($stateParams.tour)['partners'] : Tours('innsbruck')['partners'].concat(Tours('la')['partners']);
            console.log(cc.partnerContent)
        }
    }
})();