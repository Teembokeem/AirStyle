(function() {
    'use strict';

    angular
        .module('Statics')
        .constant('CarouselContent', function(viewArg) {
            var slides = {
                'home': {
                    slides: [
                        {
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
                        {
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
                    ],
                    customSlide: {
                        title: [
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