(function () {
    'use strict';

    angular
        .module('Statics')
        .constant('Carousel', function (viewArg) {
            var slides = {
                'la': {
                    schedule: true,
                    slide: {
                        title: 'LOS ANGELES',
                        content: 'FULL RESULTS',
                        buttons: [{
                                label: 'Learn More',
                                outbound: false,
                                tour: 'la',
                                dest: 'app.tour-stops'
                            },
                            {
                                label: 'Results',
                                outbound: false,
                                dest: 'app.tour-stops'
                            }
                        ],
                        image: 'img/slide2.jpg'
                    },
                    hero: {
                        lineup: [
                            ['MAJOR LAZER', 'FLUME'],
                            ['ZHU', 'CHROMEO', 'ATMOSPHERE', 'YG'],
                            ['TV ON THE RADIO', 'VINCE STAPLES', 'RUSS'],
                            ['LOUIS THE CHILD', 'VIC MENSA', 'ST. LUCIA'],
                            ['MARIAN HILL', 'THE SHELTERS', 'XYL0'],
                            ['PHANTOMS', 'POWERS', 'RKCB', '070 SHAKE'],
                        ],
                        plus: '../img/plus.png',
                        content: "THE WORLD’S BEST SNOWBOARDERS COMPETING ON A 16-STORY JUMP",
                        date: 'FEBRUARY 18 + 19 2017 - EXPOSITION PARK DTLA',
                        buttons: [{
                                label: 'RESULTS',
                                outbound: false,
                                dest: 'app.tour-stops'
                            },
                            {
                                label: 'SCHEDULE',
                                disabled: false,
                                outbound: false,
                                tour: 'la',
                                dest: 'app.schedule'
                            }
                        ]
                    }
                },
                'innsbruck': {
                    schedule: true,
                    slide: {
                        title: 'INNSBRUCK -TIROL',
                        content: 'FULL RESULTS',
                        buttons: [{
                                label: 'Learn More',
                                outbound: false,
                                tour: 'innsbruck',
                                dest: 'app.tour-stops'
                            },
                            // {
                            //     label: 'Buy Now',
                            //     outbound: false,
                            //     dest: 'app.ticket'
                            // },
                            {
                                label: 'RESULTS',
                                outbound: false,
                                tour: 'innsbruck',
                                dest: 'app.tour-stops'
                            }
                        ],
                        image: 'img/slide1.jpg'
                    },
                    hero: {
                        lineup: [
                            ['BEGINNER', 'BIFFY CLYRO'],
                            ['BILDERBUCH', 'THE NAKED AND FAMOUS'],
                            ['FUNF STERNE DELUXE', 'LUCKY CHOPS'],
                            ['FAMOUS DECK TEAM', 'WAX WRECKAZ', 'AND MANY MORE']
                        ],
                        date: 'FRI 3 + SAT 4 FEBRUARY 2017 - OLYMPIAWORLD INNSBRUCK',
                        buttons: [
                            // {
                            //     label: 'BUY NOW',
                            //     outbound: false,
                            //     dest: 'app.ticket'
                            // },
                            {
                                label: 'RESULTS',
                                outbound: false,
                                tour: 'innsbruck',
                                dest: 'app.tour-stops'
                            },
                            {
                                label: 'SCHEDULE',
                                outbound: false,
                                tour: 'innsbruck',
                                dest: 'app.schedule'
                            }
                        ]
                    }
                }
            }

            var targetView = Object.keys(slides).filter(function (view) {
                return viewArg == view
            })[0];

            if (!targetView) {
                console.info('could not find matching key for slides: ');
                console.log('Argument: ', viewArg);
                console.log('Available Views: ')
                Object.keys(slides).forEach(function (view, index) {
                    console.log(index + 1 + '. ' + view)
                });
                throw new Error;

            } else {
                return slides[targetView];
            }

        })
})();
