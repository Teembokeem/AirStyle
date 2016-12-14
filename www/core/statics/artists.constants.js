(function() {
    'use strict';

    angular
        .module('Statics')
        .constant('Artists', function(inputArg) {
            var artists = {
                'la': {
                    'major-lazer': {
                        name: 'Major Lazer',
                        img_portrait: '../img/artists/portrait/MajorLazer_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/MajorLazer_Landscape.jpg',
                        ref: 'major-lazer',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'zhu': {
                        name: 'ZHU',
                        img_portrait: '../img/artists/portrait/ZHU_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/ZHU_Landscape.jpg',
                        ref: 'zhu',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'chromeo': {
                        name: 'Chromeo',
                        img_portrait: '../img/artists/portrait/Chromeo_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Chromeo_Landscape.jpg',
                        ref: 'chromeo',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'atmosphere': {
                        name: 'Atmosphere',
                        img_portrait: '../img/artists/portrait/Atmosphere_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Atmosphere_Landscape.jpg',
                        ref: 'atmosphere',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'yg': {
                        name: 'YG',
                        img_portrait: '../img/artists/portrait/YG_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/YG_Landscape.jpg',
                        ref: 'yg',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'tv-on-the-radio': {
                        name: 'TV On The Radio',
                        img_portrait: '../img/artists/portrait/TVOnTheRadio_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/TVOnTheRadio_Landscape.jpg',
                        ref: 'tv-on-the-radio',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'vince-staples': {
                        name: 'Vince Staples',
                        img_portrait: '../img/artists/portrait/VinceStaples_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/VinceStaples_Landscape.jpg',
                        ref: 'vince-staples',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'russ': {
                        name: 'Russ',
                        img_portrait: '../img/artists/portrait/Russ_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Russ_Landscape.jpg',
                        ref: 'russ',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'louis-the-child': {
                        name: 'Louis The Child',
                        img_portrait: '../img/artists/portrait/LouisTheChild_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/LouisTheChild_Landscape.jpg',
                        ref: 'louis-the-child',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'vic-mensa': {
                        name: 'Vic Mensa',
                        img_portrait: '../img/artists/portrait/VicMensa_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/VicMensa_Landscape.jpg',
                        ref: 'vic-mensa',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'st-lucia': {
                        name: 'St Lucia',
                        img_portrait: '../img/artists/portrait/StLucia_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/StLucia_Landscape.jpg',
                        ref: 'st-lucia',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'marian-hill': {
                        name: 'Marian Hill',
                        img_portrait: '../img/artists/portrait/MarianHill_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/MarianHill_Landscape.jpg',
                        ref: 'marian-hill',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'the-shelters': {
                        name: 'The Shelters',
                        img_portrait: '../img/artists/portrait/Shelters_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Shelters_Landscape.jpg',
                        ref: 'the-shelters',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'xylo': {
                        name: 'XYLO',
                        img_portrait: '../img/artists/portrait/XYLO_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/XYLO_Landscape.jpg',
                        ref: 'xylo',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'phantoms': {
                        name: 'Phantoms',
                        img_portrait: '../img/artists/portrait/Phantoms_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Phantoms_Landscape.jpg',
                        ref: 'phantoms',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'powers': {
                        name: 'POWERS',
                        img_portrait: '../img/artists/portrait/POWERS_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/POWERS_Landscape.jpg',
                        ref: 'powers',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'rkcb': {
                        name: 'RKCB',
                        img_portrait: '../img/artists/portrait/RKCB_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/RKCB_Landscape.jpg',
                        ref: 'rkcb',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    '070-shake': {
                        name: '070 shake',
                        img_portrait: '../img/artists/portrait/070Shake_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/070Shake_Landscape.jpg',
                        ref: '070-shake',
                         location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                },
                'innsbruck': {
                    'clyro': {
                        name: 'Biffy Clyro',
                        img_portrait: '../img/artists/portrait/BiffyClyro_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/BiffyClyro_Landscape.jpg',
                        img_yellow: '../img/clyro-yellow.png',
                        location: 'indoor',
                        time: 'fri 3 8pm',
                        ref: 'clyro',
                        info: [
                            'United by a love of underground, experimental rock, and post-hardcore bands such as Braid and Karate, along with the starrier likes of Guns N’ Roses and Metallica, the Scottish band Biffy Clyro quickly honed their own unique sound, a mind boggling mix of off-kilter tempos, itchy, unpredictable guitars, soulful choruses and feral screams, sewn together into a strange tapestry of sound.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/1km0R7wy712AzLkA1WjKET',
                        video: 'https://www.youtube.com/embed/bpJvP4b5fX8'
                    },
                    'beginner': {
                        name: 'Beginner',
                        img_portrait: '../img/artists/portrait/Beginner_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Beginner_Landscape.jpg',
                        img_yellow: '../img/beginner-yellow.png',
                        ref: 'beginner',
                        location: 'main stage',
                        time: 'fri 3 9pm',
                        info: [
                            'Beginner are back! No one in the industry shaped the German Hip-Hop scene more than DJMAD, Denyo und Eizi Eiz aka Guido, Denis und Jan Delay aka “Die Beginner!” After 13 long years(!) of silence they released their new album Advanced Chemistry, and what a crazy comeback!',
                            'The album went straight to the top of the German album charts and almost all of the tour stops were sold out after a few hours. That proves they still have the old school chemistry, but this time it’s advanced!'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://embed.spotify.com/?uri=spotify%3Aartist%3A4XkhEirR2JZT4fncyOxxtf',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'bilderbuch': {
                        name: 'Bilderbuch',
                        ref: 'bilderbuch',
                        img_portrait: '../img/artists/portrait/Bilderbuch_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Bilderbuch_Landscape.jpg',
                        location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'the-naked-and-famous': {
                        name: 'The Naked & Famous',
                        ref: 'the-naked-and-famous',
                        img_portrait: '../img/artists/portrait/TheNakedAndFamous_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/TheNakedAndFamous_Landscape.jpg',
                        location: 'indoor stage',
                        time: 'fri 3 6pm',
                        info: [
                            'In 2010, Auckland, New Zealand’s Thom Powers, Alisa Xayalith, Aaron Short, David Beadle, and Jesse Wood arrived at the forefront of the international indie pop scene with the sweltering The Naked and Famous debut, “Passive Me, Aggressive You”.',
                            'Riding on the feverish heights reached by singles like “Young Blood”, “Punching In A Dream” and “Girls Like You” the album thrust the band into the limelight and onto the airwaves. Let’s see if they can take us “Higher” at the Air + Style Festival in Innsbruck-Tirol this coming year!'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://embed.spotify.com/?uri=spotify%3Aartist%3A4XkhEirR2JZT4fncyOxxtf',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'tommy-cash': {
                        name: 'Tomm\xA5 \u20aca$h',
                        ref: 'tommy-cash',
                        img_portrait: '../img/artists/portrait/TommyCash_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/TommyCash_Landscape.jpg',
                        location: 'indoor stage',
                        time: 'fri 3 6pm',
                        info: [
                            'The Baltic states are not the first countries that pop up in our minds when we think about good Hip-Hop… but that’s history! Let us introduce TOMM¥ €A$H! The rapper from the capital of Estonia grew up listing to Kanye West and other US Rappers, dreaming about becoming a first class rapper. Now he is, but he found his own, very controversial style.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/44XzG6GoJZNtkIGW19hsUK',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'funf-sterne-deluxe': {
                        name: 'F\xFCnf Sterne Deluxe',
                        ref: 'funf-sterne-deluxe',
                        img_portrait: '../img/artists/portrait/FunfSterneDeluxe_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/FunfSterneDeluxe_Landscape.jpg',
                        location: 'indoor stage',
                        time: 'fri 3 4:15pm',
                        info: [
                            'The Band that wrote German Hip-Hop history with tracks like “Willst du mit mir geh’n,” “Dein Herz schägt schneller,” “Die Leude,” or “Ja,ja ... Deine Mudder!” is back on festival stages. In 2004 they decided to take a break to concentrate on solo projects like Tobi Tobsen and his electronic music team Moonbootica. Now they are back and after their first appearance in 2013 at the “Beats auf der Bahn” and the huge success, they want more!'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/7i6FNvFrVU61bNKBmWwX4X',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'lucky-chops': {
                        name: 'Lucky Chops',
                        ref: 'lucky-chops',
                        img_portrait: '../img/artists/portrait/LuckyChops_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/LuckyChops_Landscape.jpg',
                        location: 'main stage',
                        time: 'fri 3 6pm',
                        info: [
                            'Redefining what it means to be a brass band, Lucky Chops stormed onto the scene in 2015 with the help of millions of viewers around the globe. Together this group of six talented individuals has created a unique sound and energy which has resonated worldwide with viral success, launching a career that is now headed toward untold heights. From the streets and subway stations of NYC to the Air + Style Festival stage!'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/2b6gc4EVpO6OTlDvKrK852',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    // 'wax-wreckaz': {
                    //     name: 'Wax Wreckaz',
                    //     ref: 'wax-wreckaz',
                    //     img_portrait: '../img/WaxWreckaz.jpg',
                    //     img_landscape: '../img/artists/landscape/POWERS_Landscape.jpg',
                    //     location: 'main stage',
                    //     time: 'fri 3 2pm',
                    //     info: [
                    //         'American electronic music band composed of record producer Diplo, Jillionaire, and Walshy fire. It was founded by Diplo and Switch, but Switch left in 2011. Its music spans numerous genres, mixing reggae with dancehall, raggaeton, house, and moombhaton.',
                    //         'Major Lazer has released three full-length albums: Guns Don\'t Kill People... Lazers Do 2009, Free the Universe 2013,  and Peace Is the Mission in 2015. It also released an EP entitled Apocalypse Soon in March 2014, which featured vocal contribution from Pharrell Williams and Sean Paul. In addition, Major Lazer has also produced Reincarnated, the debut reggae album by Snoop Dogg under his \'Snoop Lion \' persona'
                    //     ],
                    //     website: 'http://www.beginner.de/',
                    //     spotify: 'https://embed.spotify.com/?uri=spotify%3Aartist%3A4XkhEirR2JZT4fncyOxxtf',
                    //     video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    // },
                    '257ers': {
                        name: '257ers',
                        ref: '257ers',
                        img_portrait: '../img/artists/portrait/257ers_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/257ers_Landscape.jpg',
                        location: 'main stage',
                        time: 'fri 3 2pm',
                        info: [
                            '257ers are two rappers, Shneezin and Mike, and are named after the zip code of their hometown, Essen Kupferdreh (Germany). The duo came together in 1997 as a graffiti crew, and later on Mike and Shneezin started making music and releasing mixtapes and songs.',
                            'And this was only the beginning. Up until now the guys have played over 600 headline shows and festivals across Germany, Austria and Switzerland. Their last album Boomshakkalakka was number 1 in the German charts, and they have recently released a new album called Mikrokosmos.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/6ihLfpY3cmdGyWEnItn30w',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'ssio': {
                        name: 'SSIO',
                        ref: 'ssio',
                        img_portrait: '../img/artists/portrait/SSIO_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/SSIO_Landscape.jpg',
                        location: 'main stage',
                        time: 'fri 3 2pm',
                        info: [
                            'Tall, big and hairy: that’s SSIO. These four letters stand for a combination of unique flow and intelligent street humor. He’s nothing like you have ever heard in German rap. No one else can let the worst obscenities sound charming. No one can rhyme in such a unique way as the Rocco Siffredi of german rap and no one looks as good in an old Mercedes as he does! Btw, he was also the man who brought back the fanny pack! Let’s see what he will do next!'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/3IrUyDPQlQFcB5lMWhPml2',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'the-hunna': {
                        name: 'The Hunna',
                        ref: 'the-hunna',
                        img_portrait: '../img/artists/portrait/TheHunna_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/TheHunna_Landscape.jpg',
                        location: 'main stage',
                        time: 'fri 3 2pm',
                        info: [
                            'Fresh out of the blocks, Hertfordshire four-piece The Hunna are set to become indie rock’s brightest lights. Their debut single “Bonfire” is a frantically-paced, guitar-driven anthem and a dramatic statement of intent from a band with wide-eyed, bottomless potential and the ambition to go all the way.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/7jZycSvTyx0W9poD4PjEIG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'wax-wreckaz': {
                        name: 'Wax Wreckaz',
                        ref: 'wax-wreckaz',
                        img_portrait: '../img/artists/portrait/WaxWreckaz_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/WaxWreckaz_Landscape.jpg',
                        location: 'main stage',
                        time: 'fri 3 2pm',
                        info: [
                            'Fresh out of the blocks, Hertfordshire four-piece The Hunna are set to become indie rock’s brightest lights. Their debut single “Bonfire” is a frantically-paced, guitar-driven anthem and a dramatic statement of intent from a band with wide-eyed, bottomless potential and the ambition to go all the way.'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/7jZycSvTyx0W9poD4PjEIG',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                }
            },
                Keys = Object.keys(artists),
                constantIdentifier = 'artists';

 
            return locate(inputArg);

            function locate(arg) {

                switch (arg) {
                    case 'all': 
                        return successHandler(artists);
                        break;
                    case 'la':
                    case 'innsbruck':
                        return successHandler(artists[arg], false);
                        break;
                    default: 
                        console.log("dfs")
                        return dfs(arg, artists);
                        break;
                    case null || undefined:
                        return errorHandler(arg);                        
                        break;
                };
            };

            function returnOne(queryKey) {
                return Keys.filter(function(key) {
                    return queryKey == key;
                })[0];
            }

            function errorHandler(failedArg) {
                console.error('could not find matching key for ' + constantIdentifier + ': ');
                console.log('Argument: ', failedArg);
                console.log('Available ' + constantIdentifier + ': ')
                Keys.forEach(function(key, index) {
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

            function dfs(arg, asset) {
                for (var key in asset) {
                    for (var innerKey in asset[key]) {
                        if (innerKey == arg) {
                            return asset[key][innerKey];
                        }
                    }
                }
            }
        });
})();