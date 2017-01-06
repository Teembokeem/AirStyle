(function () {
    'use strict';

    angular
        .module('Statics')
        .constant('Tours', function (inputArg) {
            var tours = {
                'beijing': {
                    title: 'BEIJING',
                    ref: 'beijing',
                    date_semantic: 'NOV 18 + 19',
                    dest: 'app.tour-stops',
                    video: 'https://www.youtube.com/embed/PhBNiSlcbRk',
                    city_block_image: '../img/beijing_city_block.jpg'
                },
                'innsbruck': {
                    title: 'INNSBRUCK',
                    ref: 'innsbruck',
                    date_semantic: 'FEB 3 + 4',
                    dest: 'app.tour-stops',
                    video: 'https://www.youtube.com/embed/PhBNiSlcbRk',
                    city_block_image: '../img/innsbruck_city_block.jpg',
                    schedule: [
                        {
                            date: 'Fri Feb 3',
                            stages: [
                                {
                                    name: 'Ramp',
                                    lineup: [
                                        {
                                            name: 'Qualification Men Run 1',
                                            ref: '',
                                            time_mult: 20,
                                            time_dur: 4,
                                            time_semantic: '18:00'
                                        },
                                        {
                                            name: 'Qualification Men Run 2',
                                            ref: '',
                                            time_mult: 28,
                                            time_dur: 4,
                                            time_semantic: '20:00'
                                        },
                                    ]
                                },
                                {
                                    name: 'Main Stage',
                                    lineup: [
                                        {
                                            name: 'The Hunna',
                                            ref: 'the-hunna',
                                            time_mult: 16,
                                            time_dur: 2,
                                            time_semantic: '17:00'
                                        },
                                        {
                                            name: 'Millencolin',
                                            ref: 'millencolin',
                                            time_mult: 23,
                                            time_dur: 3,
                                            time_semantic: '18:45'
                                        },
                                        {
                                            name: 'Bilderbuch',
                                            ref: 'bilderbuch',
                                            time_mult: 31,
                                            time_dur: 5,
                                            time_semantic: '20:45'
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            date: 'Sat Feb 4',
                            stages: [
                                {
                                    name: 'Ramp',
                                    lineup: [
                                        {
                                            name: 'Semifinals Men Run 1 - 3',
                                            ref: '',
                                            time_mult: 2,
                                            time_dur: 6,
                                            time_semantic: '13:30'
                                        },
                                        {
                                            name: 'Qualification Women Run 1-3',
                                            ref: '',
                                            time_mult: 12,
                                            time_dur: 4,
                                            time_semantic: '16:00'
                                        },
                                        {
                                            name: 'Finals Women',
                                            ref: '',
                                            time_mult: 26,
                                            time_dur: 2,
                                            time_semantic: '19:30'
                                        },
                                        {
                                            name: 'Finals Men',
                                            ref: '',
                                            time_mult: 28,
                                            time_dur: 4,
                                            time_semantic: '20:00'
                                        },
                                    ]
                                },
                                {
                                    name: 'Main Stage',
                                    lineup: [
                                        {
                                            name: 'SSIO',
                                            ref: 'ssio',
                                            time_mult: 8,
                                            time_dur: 4,
                                            time_semantic: '15:00'
                                        },
                                        {
                                            name: 'The Naked And Famous',
                                            ref: 'the-naked-and-famous',
                                            time_mult: 17,
                                            time_dur: 3,
                                            time_semantic: '17:15'
                                        },
                                        {
                                            name: 'Biffy Clyro',
                                            ref: 'clyro',
                                            time_mult: 21,
                                            time_dur: 3,
                                            time_semantic: '18:30'
                                        },
                                        {
                                            name: 'Beginner',
                                            ref: 'beginner',
                                            time_mult: 32,
                                            time_dur: 4,
                                            time_semantic: '21:00'
                                        }
                                    ]
                                },
                                {
                                    name: 'Indoor Stage',
                                    lineup: [
                                        {
                                            name: 'Counterfeit',
                                            ref: 'counterfeit',
                                            time_mult: 1,
                                            time_dur: 3,
                                            time_semantic: '13:15'
                                        },
                                        {
                                            name: 'Lucky Chops',
                                            ref: 'lucky-chops',
                                            time_mult: 6,
                                            time_dur: 4,
                                            time_semantic: '14:30'
                                        },
                                        {
                                            name: '257ers',
                                            ref: '257ers',
                                            time_mult: 13,
                                            time_dur: 4,
                                            time_semantic: '16:15'
                                        },
                                        {
                                            name: 'F\xFCnf Sterne Deluxe',
                                            ref: 'funf-sterne-deluxe',
                                            time_mult: 19,
                                            time_dur: 4,
                                            time_semantic: '17:45'
                                        }
                                    ]
                                },
                            ]
                        }

                    ]
                },
                'la': {
                    title: 'LOS ANGELES',
                    ref: 'la',
                    date_semantic: 'FEB 18 + 19',
                    dest: 'app.tour-stops',
                    video: 'https://www.youtube.com/embed/PhBNiSlcbRk',
                    city_block_image: '../img/la_city_block.jpg'
                }
            },
                Keys = Object.keys(tours),
                constantIdentifier = 'tours';


            return locate(inputArg);

            function locate(arg) {

                switch (arg) {
                    case 'all':
                        return successHandler(tours);
                        break;
                    case null || undefined:
                        return errorHandler(arg);
                        break;
                    default:
                        return successHandler(tours[arg], false);
                        break;
                };
            };

            function returnOne(queryKey) {
                return Keys.filter(function (key) {
                    return queryKey == key;
                })[0];
            }

            function errorHandler(failedArg) {
                console.info('could not find matching key for ' + constantIdentifier + ': ');
                console.log('Argument: ', failedArg);
                console.log('Available ' + constantIdentifier + ': ')
                Keys.forEach(function (key, index) {
                    console.log(index + 1 + '. ' + key)
                });
                return new Error();
            }

            function successHandler(asset, flag) {
                if (flag === false) {
                    return asset;
                } else {
                    var arr = [];
                    for (var key in asset) {
                        arr.push(asset[key]);
                    };
                    return arr;
                }
            }
        });
})();