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

    riderBioCtrl.$inject = ['$log', '$state', '$stateParams'];

    function riderBioCtrl($log, $state, $stateParams) {
        var cc = this;

        cc.stateChange = stateChange;

        function stateChange(state, param, val) {
            $state.go(state, { param: val });
        }

        cc.$onInit = function () {

            cc.riderBioContent = [
                {
                    name: 'Torgeir Bergrem',
                    ref: 'tbergrem',
                    image: '../img/Torgeir-Bergrem.jpg',
                    dob: 832402800000,
                    nation: 'Japan',
                    stance: 'Regular',
                    fb: '',
                    tweet: '',
                    inst: '',
                    youtube: '',
                    asYears: ['2017', '2016', '2015', '2013'],
                    bio: ['Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapubus ac facilisis in, egestas eget quam. Praaesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo dio, dapibus ac ficisilisis in,  egestas eget quam.', 'Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Donec sed odiod dui. Donec ullamcoper nulla non metus auctor fringilla.'],
                    sponsors: ['sponsor a', 'sponsor b', 'sponsor c']
                },
                {
                    name: 'Sven Thorgren',
                    ref: 'sthorgren',
                    image: '../img/Sven-Thorgren.jpg',
                    dob: 832402800000,
                    nation: 'Japan',
                    stance: 'Regular',
                    fb: '',
                    tweet: '',
                    inst: '',
                    youtube: '',
                    asYears: ['2017', '2016', '2015', '2013'],
                    bio: ['Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapubus ac facilisis in, egestas eget quam. Praaesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo dio, dapibus ac ficisilisis in,  egestas eget quam.', 'Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Donec sed odiod dui. Donec ullamcoper nulla non metus auctor fringilla.'],
                    sponsors: ['sponsor a', 'sponsor b', 'sponsor c']
                },
                {
                    name: 'Antoine Truchon',
                    ref: 'atruchon',
                    image: '../img/Antoine-Truchon.jpg',
                    dob: 832402800000,
                    nation: 'Japan',
                    stance: 'Regular',
                    fb: '',
                    tweet: '',
                    inst: '',
                    youtube: '',
                    asYears: ['2017', '2016', '2015', '2013'],
                    bio: ['Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapubus ac facilisis in, egestas eget quam. Praaesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo dio, dapibus ac ficisilisis in,  egestas eget quam.', 'Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Donec sed odiod dui. Donec ullamcoper nulla non metus auctor fringilla.'],
                    sponsors: ['sponsor a', 'sponsor b', 'sponsor c']
                },
                {
                    name: 'Max Parrot',
                    ref: 'mparrot',
                    image: '../img/Max-Parrot.jpg',
                    dob: 832402800000,
                    nation: 'Japan',
                    stance: 'Regular',
                    fb: '',
                    tweet: '',
                    inst: '',
                    youtube: '',
                    asYears: ['2017', '2016', '2015', '2013'],
                    bio: ['Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapubus ac facilisis in, egestas eget quam. Praaesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo dio, dapibus ac ficisilisis in,  egestas eget quam.', 'Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Donec sed odiod dui. Donec ullamcoper nulla non metus auctor fringilla.'],
                    sponsors: ['sponsor a', 'sponsor b', 'sponsor c']
                },
                {
                    name: 'Keita Inamura',
                    ref: 'kinamura',
                    image: '../img/Keita-Inamura.jpg',
                    dob: 832402800000,
                    nation: 'Japan',
                    stance: 'Regular',
                    fb: '',
                    tweet: '',
                    inst: '',
                    youtube: '',
                    asYears: ['2017', '2016', '2015', '2013'],
                    bio: ['Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapubus ac facilisis in, egestas eget quam. Praaesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo dio, dapibus ac ficisilisis in,  egestas eget quam.', 'Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Donec sed odiod dui. Donec ullamcoper nulla non metus auctor fringilla.'],
                    sponsors: ['sponsor a', 'sponsor b', 'sponsor c']
                },
                {
                    name: 'Billy Morgan',
                    ref: 'bmorgan',
                    image: '../img/Billy-Morgan.jpg',
                    dob: 832402800000,
                    nation: 'Japan',
                    stance: 'Regular',
                    fb: '',
                    tweet: '',
                    inst: '',
                    youtube: '',
                    asYears: ['2017', '2016', '2015', '2013'],
                    bio: ['Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapubus ac facilisis in, egestas eget quam. Praaesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo dio, dapibus ac ficisilisis in,  egestas eget quam.', 'Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Donec sed odiod dui. Donec ullamcoper nulla non metus auctor fringilla.'],
                    sponsors: ['sponsor a', 'sponsor b', 'sponsor c']
                },
            ]

            cc.rider = cc.riderBioContent.filter(function (rider) {
                return rider.ref == $stateParams.rider
            })[0];
            console.log(cc.rider)
        }
    }
})();