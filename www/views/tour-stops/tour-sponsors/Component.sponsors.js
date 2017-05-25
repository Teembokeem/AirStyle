(function () {
    'use strict';
    angular.module('TourStops.view.module')
        .component('sponsorsPanel', {
            bindings: {
                sponsors:"="
            },
            templateUrl: 'views/tour-stops/tour-sponsors/sponsors.view.html',
            controller: partnersCtrl,
            controllerAs: 'cc'
        })

    partnersCtrl.$inject = ['$log', '$window', 'Tours', '$stateParams', '$state'];

    function partnersCtrl($log, $window, Tours, $stateParams, $state) {
        var cc = this;
        cc.touchScreen;
        cc.state = $state.current.name;

        cc.$onInit = function () {
            console.log(cc.sponsors);
            $window.innerWidth < 1024 ? cc.touchScreen = true : cc.touchScreen = false;
            cc.partnerContent = cc.sponsors;
        }
    }
})();
