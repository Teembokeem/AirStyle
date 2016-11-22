(function () {
    'use strict';
    angular.module('Rider.view.module')
        .component('riderBio', {
            bindings: {

            },
            templateUrl: 'views/rider/details/rider-bio/rider-bio.html',
            controller: riderBioCtrl,
            controllerAs: 'cc'
        })

    riderBioCtrl.$inject = ['$log', '$state'];

    function riderBioCtrl($log, $state) {
        var cc = this;

        cc.stateChange = stateChange;

        function stateChange(state, param, val) {
            $state.go(state, { param: val });
        }

        cc.$onInit = function () {

            cc.riderBioContent = [
                {
                    name: 'Yuki Kadono',
                    ref: 'ykadono',
                    dob: 832402800000,
                    Nation: 'Japan',
                    Stance: Regular,
                    fb: '',
                    tweet: '',
                    inst: '',
                    youtube: '',
                    asYears: ['2017', '2016', '2015', '2013', '2013'],
                    bio: ['Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapubus ac facilisis in, egestas eget quam. Praaesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo dio, dapibus ac ficisilisis in,  egestas eget quam.', 'Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Donec sed odiod dui. Donec ullamcoper nulla non metus auctor fringilla.']
                }
            ]
        }
    }
})();