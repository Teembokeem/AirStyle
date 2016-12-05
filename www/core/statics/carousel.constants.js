(function() {
    'use strict';

    angular
        .module('Statics')
        .constant('Carousel', function(viewArg) {
            var slides = {
                'la': {
                    slide: {
                        title: 'LOS ANGELES TICKETS',
                        content: 'ON SALE NOW',
                        buttons: [
                            {
                                label: 'Learn More',
                                dest: 'http://www.air-style.at'
                            },
                            {
                                label: 'Buy Now',
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
                        date: 'Feb 10 + 14 Expo Park DTLA'
                    }
                },
                'innsbruck': {
                    slide: {
                        title: 'INNSBRUCK -TIROL TICKETS',
                        content: 'ON SALE NOW',
                        buttons: [
                            {
                                label: 'Learn More',
                                dest: 'http://www.air-style.at'
                            },
                            {
                                label: 'Buy Now',
                                dest: 'http://air-style.at/innsbruck2017/ticket-info-2017/'
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
                                dest: 'http://air-style.at/innsbruck2017/ticket-info-2017/innsbruck2017/ticket-info-2017/'
                            },
                            {
                                label: 'SCHEDULE',
                                dest: ''
                            }
                        ]
                    }
                }
            }

            var targetView = Object.keys(slides).filter(function(view) {
                return viewArg == view
            })[0];

            if(!targetView) {
                console.info('could not find matching key for slides: ');
                console.log('Argument: ', viewArg);
                console.log('Available Views: ')
                Object.keys(slides).forEach(function(view, index) {
                    console.log(index + 1 + '. ' + view)
                });
                throw new Error;
                
            } else {
                return slides[targetView];
            }

        })
})();