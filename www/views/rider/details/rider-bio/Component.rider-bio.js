(function() {
    'use strict';
    angular.module('Rider.view.module')
        .component('riderBio', {
            bindings: {

            },
            templateUrl: 'views/rider/details/rider-bio/rider-bio.html',
            controller: riderBioCtrl,
            controllerAs: 'cc'
        })

    riderBioCtrl.$inject = ['$log', '$state', '$stateParams', '$window', 'Riders', '$sce'];

    function riderBioCtrl($log, $state, $stateParams, $window, Riders, $sce) {
        var cc = this;

        cc.stateChange = stateChange;
        cc.go = go;

        $window.innerWidth < 870 ? cc.mobile = true : cc.mobile = false;

        function stateChange(state, param, val) {
            $state.go(state, {
                param: val
            });
        }

        function go(link) {
            window.open(link);
        };

        cc.$onInit = function() {

            cc.riderBioContent = [{
                name: 'Torgeir Bergrem',
                ref: 'tbergrem',
                image: '../img/loRiders/Torgeir-Bergrem.jpg',
                dob: 832402800000,
                nation: 'Japan',
                stance: 'Regular',
                fb: '',
                tweet: '',
                inst: '',
                youtube: '',
                asYears: ['2017', '2016', '2015', '2013'],
                bio: ['Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapubus ac facilisis in, egestas eget quam. Praaesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo dio, dapibus ac ficisilisis in,  egestas eget quam.', 'Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Donec sed odiod dui. Donec ullamcoper nulla non metus auctor fringilla.'],
                sponsors: ['sponsor a', 'sponsor b', 'sponsor c'],
                scores: {
                    '2015': {
                        overall: '215.79',
                        beijing: {
                            score: 49.77,
                            eventName: 'Beijing'
                        },
                        innsbruck: {
                            score: 83.29,
                            eventName: 'Innsbruck'
                        },
                        la: {
                            score: 82.73,
                            eventName: 'Los Angeles'
                        }
                    },
                    '2016': {
                        overall: '169.90',
                        beijing: {
                            eventName: 'beijing',
                            score: 91.89
                        },
                        innsbruck: {
                            eventName: 'innsbruck',
                            score: 44.26
                        },
                        la: {
                            eventName: 'los angeles',
                            score: 33.45
                        }
                    }
                },

            }, {
                name: 'Sven Thorgren',
                ref: 'sthorgren',
                image: '../img/loRiders/Sven-Thorgren.jpg',
                dob: 832402800000,
                nation: 'Japan',
                stance: 'Regular',
                fb: '',
                tweet: '',
                inst: '',
                youtube: '',
                asYears: ['2017', '2016', '2015', '2013'],
                bio: ['Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapubus ac facilisis in, egestas eget quam. Praaesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo dio, dapibus ac ficisilisis in,  egestas eget quam.', 'Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Donec sed odiod dui. Donec ullamcoper nulla non metus auctor fringilla.'],
                sponsors: ['sponsor a', 'sponsor b', 'sponsor c'],
                scores: {
                    '2015': {
                        overall: '201.76',
                        beijing: {
                            score: 79.61,
                            eventName: 'Beijing'
                        },
                        innsbruck: {
                            score: 62.54,
                            eventName: 'Innsbruck'
                        },
                        la: {
                            score: 59.61,
                            eventName: 'Los Angeles'
                        }
                    },
                    '2016': {
                        overall: '235.75',
                        beijing: {
                            eventName: 'beijing',
                            score: 84.61
                        },
                        innsbruck: {
                            eventName: 'innsbruck',
                            score: 66.54
                        },
                        la: {
                            eventName: 'los angeles',
                            score: 84.61
                        }
                    }
                }
            }, {
                name: 'Antoine Truchon',
                ref: 'atruchon',
                image: '../img/loRiders/Antoine-Truchon.jpg',
                dob: 832402800000,
                nation: 'Japan',
                stance: 'Regular',
                fb: '',
                tweet: '',
                inst: '',
                youtube: '',
                asYears: ['2017', '2016', '2015', '2013'],
                bio: ['Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapubus ac facilisis in, egestas eget quam. Praaesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo dio, dapibus ac ficisilisis in,  egestas eget quam.', 'Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Donec sed odiod dui. Donec ullamcoper nulla non metus auctor fringilla.'],
                sponsors: ['sponsor a', 'sponsor b', 'sponsor c'],
                scores: {
                    '2015': {
                        overall: '205.54',
                        beijing: {
                            score: 52.35,
                            eventName: 'Beijing'
                        },
                        innsbruck: {
                            score: 48.19,
                            eventName: 'Innsbruck'
                        },
                        la: {
                            score: 100.00,
                            eventName: 'Los Angeles'
                        }
                    },
                    '2016': {
                        overall: '205.72',
                        beijing: {
                            eventName: 'beijing',
                            score: 42.61
                        },
                        innsbruck: {
                            eventName: 'innsbruck',
                            score: 84.79
                        },
                        la: {
                            eventName: 'los angeles',
                            score: 78.32
                        }
                    }
                }
            }, {
                name: 'Max Parrot',
                ref: 'mparrot',
                image: '../img/loRiders/Max-Parrot.jpg',
                dob: 832402800000,
                nation: 'Japan',
                stance: 'Regular',
                fb: '',
                tweet: '',
                inst: '',
                youtube: '',
                asYears: ['2017', '2016', '2015', '2013'],
                bio: ['Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapubus ac facilisis in, egestas eget quam. Praaesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo dio, dapibus ac ficisilisis in,  egestas eget quam.', 'Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Donec sed odiod dui. Donec ullamcoper nulla non metus auctor fringilla.'],
                sponsors: ['sponsor a', 'sponsor b', 'sponsor c'],
                scores: {
                    '2015': {
                        overall: '238.16',
                        beijing: {
                            score: 63.47,
                            eventName: 'Beijing'
                        },
                        innsbruck: {
                            score: 92.49,
                            eventName: 'Innsbruck'
                        },
                        la: {
                            score: 82.20,
                            eventName: 'Los Angeles'
                        }
                    },
                    '2016': {
                        overall: '194.31',
                        beijing: {
                            eventName: 'beijing',
                            score: 72.03
                        },
                        innsbruck: {
                            eventName: 'innsbruck',
                            score: 78.02
                        },
                        la: {
                            eventName: 'los angeles',
                            score: 42.26
                        }
                    }
                },

            }, {
                name: 'Keita Inamura',
                ref: 'kinamura',
                image: '../img/loRiders/Keita-Inamura.jpg',
                dob: 832402800000,
                nation: 'Japan',
                stance: 'Regular',
                fb: '',
                tweet: '',
                inst: '',
                youtube: '',
                asYears: ['2017', '2016', '2015', '2013'],
                bio: ['Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapubus ac facilisis in, egestas eget quam. Praaesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo dio, dapibus ac ficisilisis in,  egestas eget quam.', 'Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Donec sed odiod dui. Donec ullamcoper nulla non metus auctor fringilla.'],
                sponsors: ['sponsor a', 'sponsor b', 'sponsor c'],
                scores: {
                    '2015': {
                        overall: '221.40',
                        beijing: {
                            score: 72.01,
                            eventName: 'Beijing'
                        },
                        innsbruck: {
                            score: 69.20,
                            eventName: 'Innsbruck'
                        },
                        la: {
                            score: 80.19,
                            eventName: 'Los Angeles'
                        }
                    },
                    '2016': {
                        overall: '185.43',
                        beijing: {
                            eventName: 'beijing',
                            score: 66.54
                        },
                        innsbruck: {
                            eventName: 'innsbruck',
                            score: 52.35
                        },
                        la: {
                            eventName: 'los angeles',
                            score: 66.54
                        }
                    }
                },

            }, {
                name: 'Billy Morgan',
                ref: 'bmorgan',
                image: '../img/loRiders/Billy-Morgan.jpg',
                dob: 832402800000,
                nation: 'Japan',
                stance: 'Regular',
                fb: '',
                tweet: '',
                inst: '',
                youtube: '',
                asYears: ['2017', '2016', '2015', '2013'],
                bio: ['Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapubus ac facilisis in, egestas eget quam. Praaesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo dio, dapibus ac ficisilisis in,  egestas eget quam.', 'Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Donec sed odiod dui. Donec ullamcoper nulla non metus auctor fringilla.'],
                sponsors: ['sponsor a', 'sponsor b', 'sponsor c'],
                scores: {
                    '2015': {
                        overall: '223.29',
                        beijing: {
                            score: 60.28,
                            eventName: 'Beijing'
                        },
                        innsbruck: {
                            score: 95.38,
                            eventName: 'Innsbruck'
                        },
                        la: {
                            score: 67.63,
                            eventName: 'Los Angeles'
                        }
                    },
                    '2016': {
                        overall: '218.52',
                        beijing: {
                            eventName: 'beijing',
                            score: 78.02
                        },
                        innsbruck: {
                            eventName: 'innsbruck',
                            score: 58.16
                        },
                        la: {
                            eventName: 'los angeles',
                            score: 82.34
                        }
                    }
                },

            }, ]

            cc.rider = Riders($stateParams.avatar);
            cc.rider.video ? cc.rider.video = $sce.trustAsResourceUrl(cc.rider.video) : '';
            cc.latestScoreYears = [2017, 2016, 2015];
        };
    }
})();
