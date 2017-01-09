(function () {
    'use strict';

    angular
        .module('Statics')
        .constant('Carousel', function (viewArg) {
            var slides = {
                'la': {
                    schedule: false,
                    slide: {
                        title: 'LOS ANGELES TICKETS',
                        content: 'ON SALE NOW',
                        buttons: [
                            {
                                label: 'Learn More',
                                outbound: true,
                                dest: 'http://airandstyle.com'
                            },
                            {
                                label: 'Buy Now',
                                outbound: true,
                                dest: 'https://airandstyle.frontgatetickets.com/'
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
                        buttons: [
                            {
                                label: 'BUY NOW',
                                outbound: true,
                                dest: 'https://airandstyle.frontgatetickets.com/'
                            },
                            {
                                label: 'SCHEDULE',
                                disabled: true,
                                outbound: false,
                                dest: 'app.schedule'
                            }
                        ]
                    }
                },
                'innsbruck': {
                    schedule: true,
                    slide: {
                        title: 'INNSBRUCK -TIROL TICKETS',
                        content: 'ON SALE NOW',
                        buttons: [
                            {
                                label: 'Learn More',
                                outbound: true,
                                dest: 'http://airandstyle.com'
                            },
                            {
                                label: 'Buy Now',
                                outbound: false,
                                dest: 'app.ticket'
                            }
                        ],
                        image: 'img/slide1.jpg'
                    },
                    hero: {
                        lineup: [
                            ['BEGINNER', 'BIFFY CLYRO'],
                            ['BILDERBUCH', 'THE NAKED AND FAMOUS'],
                            ['FUNF STERNE DELUXE', 'LUCKY CHOPS'],
                            ['FAMOUSE DECK TEAM', 'WAX WRECKAZ', 'AND MANY MORE']
                        ],
                        date: 'FRI 3 + SAT 4 FEBRUARY 2017 - OLYMPIAWORLD INNSBRUCK',
                        buttons: [
                            {
                                label: 'BUY NOW',
                                outbound: false,
                                dest: 'app.ticket'
                            },
                            {
                                label: 'SCHEDULE',
                                outbound: false,
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