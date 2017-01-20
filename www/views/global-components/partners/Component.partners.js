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
        console.log(Tours('innsbruck')['partners']);

        cc.$onInit = function () {
            $window.innerWidth < 1024 ? cc.touchScreen = true : cc.touchScreen = false;
            cc.partnerContent = $stateParams.tour ? Tours($stateParams.tour)['partners'] : Tours('la')['partners'].concat(Tours('innsbruck')['partners']);
            cc.hotelPartnerContent = $stateParams.tour ? Tours($stateParams.tour)['hotel_partners']:undefined;
            // console.log(cc.partnerContent)
        }
    }
})();