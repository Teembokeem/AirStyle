(function () {
    'use strict';

    angular
        .module('Statics')
        .constant('Artists', function (inputArg) {
            var artists = {
                'la': {
                    'major-lazer': {
                        name: 'Major Lazer',
                        img_portrait: '../img/artists/portrait/MajorLazer_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/MajorLazer_Landscape.jpg',
                        ref: 'major-lazer',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/MAJORLAZER/',
                        fb: 'https://www.facebook.com/majorlazer/',
                        inst: 'https://www.instagram.com/majorlazer/',
                        youtube: 'https://www.youtube.com/user/majorlazer/',
                        website: 'http://majorlazer.com/',
                        spotify: 'https://open.spotify.com/artist/738wLrAtLtCtFOLvQBXOXp/',
                        video: 'https://www.youtube.com/embed/YqeW9_5kURI'
                    },
                    'flume': {
                        name: 'Flume',
                        img_portrait: '../img/artists/portrait/Flume_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Flume_Landscape.jpg',
                        ref: 'flume',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/flumemusic',
                        fb: 'https://www.facebook.com/flumemusic',
                        inst: 'https://www.instagram.com/flumemusic',
                        youtube: 'https://www.youtube.com/user/FlumeAUS',
                        website: 'https://flumemusic.com/',
                        spotify: 'https://open.spotify.com/artist/6nxWCVXbOlEVRexSbLsTer',
                        video: 'https://www.youtube.com/embed/-KPnyf8vwXI'
                    },
                    'zhu': {
                        name: 'ZHU',
                        img_portrait: '../img/artists/portrait/Zhu_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/ZHU_Landscape.jpg',
                        ref: 'zhu',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/ZHUmusic',
                        fb: 'https://www.facebook.com/zhu/',
                        inst: 'https://www.instagram.com/zhu/',
                        youtube: 'https://www.youtube.com/user/ZHUVEVO',
                        website: 'https://soundcloud.com/zhu',
                        spotify: 'https://open.spotify.com/artist/28j8lBWDdDSHSSt5oPlsX2',
                        video: 'https://www.youtube.com/embed/5_ARibfCMhw'
                    },
                    'chromeo': {
                        name: 'Chromeo',
                        img_portrait: '../img/artists/portrait/Chromeo_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Chromeo_Landscape.jpg',
                        ref: 'chromeo',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/chromeo',
                        fb: 'https://www.facebook.com/chromeo',
                        inst: 'https://www.instagram.com/chromeo',
                        youtube: 'https://www.youtube.com/user/chromeo',
                        website: 'http://chromeo.net/',
                        spotify: 'https://open.spotify.com/artist/2mV8aJphiSHYJf43DxL7Gt',
                        video: 'https://www.youtube.com/embed/RhmUnk454MA'
                    },
                    'atmosphere': {
                        name: 'Atmosphere',
                        img_portrait: '../img/artists/portrait/Atmosphere_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Atmosphere_Landscape.jpg',
                        ref: 'atmosphere',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/atmosphere',
                        fb: 'https://www.facebook.com/Atmosphere/',
                        inst: 'https://www.instagram.com/atmosphere/',
                        youtube: 'https://www.youtube.com/user/TheRealRhymesayers/playlists',
                        website: 'http://rhymesayers.com/atmosphere/',
                        spotify: 'https://open.spotify.com/artist/1GAS0rb4L8VTPvizAx2O9J',
                        video: 'https://www.youtube.com/embed/AckhnLpwceM'
                    },
                    'yg': {
                        name: 'YG',
                        img_portrait: '../img/artists/portrait/YG_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/YG_Landscape.jpg',
                        ref: 'yg',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/YG',
                        fb: 'https://www.facebook.com/YG400',
                        inst: 'https://www.instagram.com/YG',
                        youtube: 'https://www.youtube.com/user/YGVEVO',
                        website: 'http://4hunnid.com/',
                        spotify: 'https://open.spotify.com/artist/0A0FS04o6zMoto8OKPsDwY',
                        video: 'https://youtube.com/embed/zsFV-R1ypwA'
                    },
                    'tv-on-the-radio': {
                        name: 'TV On The Radio',
                        img_portrait: '../img/artists/portrait/TVOnTheRadio_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/TVOnTheRadio_Landscape.jpg',
                        ref: 'tv-on-the-radio',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/tvontheradio',
                        fb: 'https://www.facebook.com/TvOnTheRadio',
                        inst: 'https://www.instagram.com/tvontheradio/',
                        youtube: 'https://www.youtube.com/user/TVOnTheRadioVEVO',
                        website: 'http://www.tvontheradio.com/',
                        spotify: 'https://open.spotify.com/artist/3HJIB8sYPyxrFGuwvKXSLR',
                        video: 'https://youtube.com/embed/OaKVy-FlaUA'
                    },
                    'vince-staples': {
                        name: 'Vince Staples',
                        img_portrait: '../img/artists/portrait/VinceStaples_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/VinceStaples_Landscape.jpg',
                        ref: 'vince-staples',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/vincestaples',
                        fb: 'https://www.facebook.com/vincestaples/',
                        inst: 'https://www.instagram.com/vincestaples/',
                        youtube: 'https://www.youtube.com/user/VinceStaplesVEVO',
                        website: 'http://www.vincestaples.com/',
                        spotify: 'https://open.spotify.com/artist/68kEuyFKyqrdQQLLsmiatm',
                        video: 'https://www.youtube.com/embed/mb6Jc4juSF8'
                    },
                    'russ': {
                        name: 'Russ',
                        img_portrait: '../img/artists/portrait/Russ_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Russ_Landscape.jpg',
                        ref: 'russ',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/russdiemon',
                        fb: 'https://www.facebook.com/russtheone',
                        inst: 'https://www.instagram.com/russdiemon',
                        youtube: 'https://www.youtube.com/channel/UCMC0rHAZ0KnayeGkSfRbVtg',
                        website: 'http://www.diemon.com/',
                        spotify: 'https://open.spotify.com/artist/1z7b1Pr1rSlvWRzsW3HOrS',
                        video: 'https://www.youtube.com/embed/oorK4RPgZ8Q'
                    },
                    'louis-the-child': {
                        name: 'Louis The Child',
                        img_portrait: '../img/artists/portrait/LouisTheChild_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/LouisTheChild_Landscape.jpg',
                        ref: 'louis-the-child',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/LouisTheChild',
                        fb: 'https://www.facebook.com/LouisTheChild/',
                        inst: 'https://www.instagram.com/louisthechild/',
                        youtube: 'https://www.youtube.com/channel/UCWerwF0q4QKlKL37Yod4aSw',
                        website: 'http://rhymesayers.com/atmosphere/',
                        spotify: 'https://open.spotify.com/artist/7wg1qvie3KqDNQbAkTdbX0',
                        video: 'https://www.youtube.com/embed/AckhnLpwceM'
                    },
                    'vic-mensa': {
                        name: 'Vic Mensa',
                        img_portrait: '../img/artists/portrait/VicMensa_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/VicMensa_Landscape.jpg',
                        ref: 'vic-mensa',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/VicMensa',
                        fb: 'https://www.facebook.com/VicMensa1/',
                        inst: 'https://www.instagram.com/vicmensa/',
                        youtube: 'https://www.youtube.com/user/VicMensaVEVO',
                        website: 'http://vicmensa.com/',
                        spotify: 'https://open.spotify.com/artist/27w1NoOLMX7tJMYqcetPyG',
                        video: 'https://www.youtube.com/embed/KPWXOAYlgOc'
                    },
                    'st-lucia': {
                        name: 'St Lucia',
                        img_portrait: '../img/artists/portrait/StLucia_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/StLucia_Landscape.jpg',
                        ref: 'st-lucia',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/stlucia',
                        fb: 'https://www.facebook.com/stlucia/',
                        inst: 'https://www.instagram.com/stlucia',
                        youtube: 'https://www.youtube.com/user/StLuciaVEVO',
                        website: 'http://www.stlucianewyork.com/',
                        spotify: 'https://open.spotify.com/artist/5WId4o5jdGVhptNU0uqKxu',
                        video: 'https://www.youtube.com/embed/lDKJ29357FU'
                    },
                    'marian-hill': {
                        name: 'Marian Hill',
                        img_portrait: '../img/artists/portrait/MarianHill_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/MarianHill_Landscape.jpg',
                        ref: 'marian-hill',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/MarianHillMusic',
                        fb: 'https://www.facebook.com/MarianHillMusic',
                        inst: 'https://www.instagram.com/marianhillmusic/',
                        youtube: 'https://www.youtube.com/channel/UC8spUGlhjiJYONayCbomUYA',
                        website: 'http://www.marianhillmusic.com/',
                        spotify: 'https://open.spotify.com/artist/1xHQO9GJIW9OXHxGBISYc5',
                        video: 'https://www.youtube.com/embed/upEX2JMp3c0'
                    },
                    'the-shelters': {
                        name: 'The Shelters',
                        img_portrait: '../img/artists/portrait/Shelters_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Shelters_Landscape.jpg',
                        ref: 'the-shelters',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/theshelters',
                        fb: 'https://www.facebook.com/sheltersmusic',
                        inst: 'https://www.instagram.com/theshelters',
                        youtube: 'https://www.youtube.com/TheShelters',
                        website: 'http://www.thesheltersmusic.com/',
                        spotify: 'https://open.spotify.com/artist/7LrFQFaZaxfa9deqkjvc89',
                        video: 'https://www.youtube.com/embed/w1G_5cDlWeM'
                    },
                    'xylo': {
                        name: 'XYLO',
                        img_portrait: '../img/artists/portrait/XYLO_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/XYLO_Landscape.jpg',
                        ref: 'xylo',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/wearexylo',
                        fb: 'https://www.facebook.com/wearexylo',
                        inst: 'https://www.instagram.com/wearexylo',
                        youtube: 'https://www.youtube.com/channel/UCjGluI_WgtTXBTQDDtNcCVw',
                        website: 'http://www.xylo-music.com/',
                        spotify: 'https://open.spotify.com/artist/6ioOEWNNGK40H8xrGj6XPW',
                        video: 'https://youtube.com/embed/P6xmfUt2yCU'
                    },
                    'phantoms': {
                        name: 'Phantoms',
                        img_portrait: '../img/artists/portrait/Phantoms_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Phantoms_Landscape.jpg',
                        ref: 'phantoms',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/phantoms',
                        fb: 'https://www.facebook.com/PHVNTOMS',
                        inst: 'https://www.instagram.com/phantoms',
                        youtube: 'https://www.youtube.com/channel/UCvzi1dLgDIPe0TZdACfEP_g',
                        website: 'http://phanto.ms/',
                        spotify: 'https://open.spotify.com/artist/1bJJlRHoc1UVeqzxcrPLIw',
                        video: 'https://www.youtube.com/embed/A9noIXSPM3s'
                    },
                    'powers': {
                        name: 'POWERS',
                        img_portrait: '../img/artists/portrait/POWERS_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/POWERS_Landscape.jpg',
                        ref: 'powers',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/givemepowers',
                        fb: 'https://www.facebook.com/givemepowers',
                        inst: 'https://www.instagram.com/givemepowers',
                        youtube: 'https://www.youtube.com/user/POWERSVEVO',
                        website: 'http://www.givemepowers.com/',
                        spotify: 'https://open.spotify.com/artist/0PGB0xsAyDqHHlvNQcgq5S',
                        video: 'https://youtube.com/embed/mEBJYXtxveI'
                    },
                    'rkcb': {
                        name: 'RKCB',
                        img_portrait: '../img/artists/portrait/RKCB_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/RKCB_Landscape.jpg',
                        ref: 'rkcb',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/rkcbmusic',
                        fb: 'https://www.facebook.com/rkcbmusic',
                        inst: 'https://www.instagram.com/rkcbmusic',
                        youtube: 'https://www.youtube.com/channel/UCISOYbfB2jyR5U904sQXgUA',
                        website: 'https://rkcbmusic.com/',
                        spotify: 'https://open.spotify.com/artist/4QDvXnbmw1znkqkK1119Fc',
                        video: 'https://www.youtube.com/embed/tAOQ7UZ1T4A'
                    },
                    '070-shake': {
                        name: '070 shake',
                        img_portrait: '../img/artists/portrait/070Shake_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/070Shake_Landscape.jpg',
                        ref: '070-shake',
                        location: 'EXPO PARK',
                        time: 'FEB 18 + 19',
                        info: [
                            'On the surface the history of Bilderbuch reads like a classic success story with everything included, from the underrated school band to their ascent in 2013. Digging deeper, it soon becomes quite apparent that Bilderbuch is anything but a classic rock band. The sound is a combination of many genres and would definitely deserve his own name. But check them out yourself.'
                        ],
                        tweet: 'https://twitter.com/070shake',
                        fb: 'https://www.facebook.com/070shake',
                        inst: 'https://www.instagram.com/070shake',
                        youtube: 'https://www.youtube.com/user/070ShakeVEVO',
                        website: 'https://070shake.com',
                        spotify: 'https://open.spotify.com/artist/12Zk1DFhCbHY6v3xep2ZjI',
                        video: 'https://www.youtube.com/embed/FirPqCMIekA'
                    },
                },
                'innsbruck': {
                    'beginner': {
                        name: 'Beginner',
                        img_portrait: 'img/artists/portrait/Beginner_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Beginner_Landscape.jpg',
                        img_yellow: '../img/beginner-yellow.png',
                        ref: 'beginner',
                        location: 'main stage',
                        time: 'fri 3 9pm',
                        info: [
                            'Beginner are back! No one in the industry shaped the German Hip-Hop scene more than DJMAD, Denyo und Eizi Eiz aka Guido, Denis und Jan Delay aka “Die Beginner!” After 13 long years(!) of silence they released their new album Advanced Chemistry, and what a crazy comeback!',
                            'The album went straight to the top of the German album charts and almost all of the tour stops were sold out after a few hours. That proves they still have the old school chemistry, but this time it’s advanced!'
                        ],
                        tweet: 'https://twitter.com/diebeginner?lang=en',
                        fb: 'https://www.facebook.com/diebeginner/',
                        inst: 'https://www.instagram.com/diebeginner/?hl=en',
                        youtube: 'https://www.youtube.com/channel/UCxVO9SO2bu0AaOGZKxr0f3g',
                        website: 'http://www.beginner.de/',
                        spotify: 'https://open.spotify.com/artist/4XkhEirR2JZT4fncyOxxtf',
                        video: 'https://www.youtube.com/embed/YqeW9_5kURI'
                    },
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
                        tweet: 'https://twitter.com/biffyclyro',
                        fb: 'https://www.facebook.com/biffyclyro/',
                        inst: 'https://www.instagram.com/biffy_clyro/',
                        youtube: 'https://www.youtube.com/user/biffyclyro',
                        website: 'http://ellipsis.biffyclyro.com/',
                        spotify: 'https://open.spotify.com/artist/1km0R7wy712AzLkA1WjKET',
                        video: 'https://youtube.com/embed/_DTmvMsEbE4'
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
                        tweet: 'https://twitter.com/bilderbuchmusik',
                        fb: 'https://www.facebook.com/bilderbuch',
                        inst: 'https://www.instagram.com/bilderbuchmusik/',
                        youtube: 'https://www.youtube.com/user/BILDERBUCHMUSIK',
                        website: 'http://www.bilderbuch-musik.at/',
                        spotify: 'https://open.spotify.com/artist/2ErWLckuGFl84nGmg5fwyG',
                        video: 'https://youtube.com/embed/JMqylEQvmKc'
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
                        tweet: 'https://twitter.com/tnaf',
                        fb: 'https://www.facebook.com/tnafofficial',
                        inst: 'https://www.instagram.com/tnaf/',
                        youtube: 'https://www.youtube.com/user/NakedFamousVEVO',
                        website: 'https://thenakedandfamous.com/',
                        spotify: 'https://open.spotify.com/artist/0oeUpvxWsC8bWS6SnpU8b9',
                        video: 'https://youtube.com/embed/GCsyXSr7u-Q'
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
                        tweet: 'https://twitter.com/5sternedeluxeHH',
                        fb: 'https://www.facebook.com/FuenfSternedeluxe',
                        inst: 'https://www.instagram.com/fuenfsternedeluxe/',
                        youtube: 'https://www.youtube.com/channel/UCe6GltCxiizB7F03LlrVHCg',
                        website: 'http://www.forceofthenorth.com/',
                        spotify: 'https://open.spotify.com/artist/7i6FNvFrVU61bNKBmWwX4X',
                        video: 'https://www.youtube.com/embed/DHYdOGffVek?list=PLTuoiSBvq3USF26VMIOnXV9mLdVTq2PIp'
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
                        tweet: 'https://twitter.com/theluckychops',
                        fb: 'https://www.facebook.com/TheLuckyChops',
                        inst: 'https://www.instagram.com/theluckychops/',
                        youtube: 'https://www.youtube.com/channel/UCYfFuHmTC6-i43qoYmXckbQ',
                        website: 'http://www.luckychops.com/',
                        spotify: 'https://open.spotify.com/artist/2b6gc4EVpO6OTlDvKrK852',
                        video: 'https://www.youtube.com/embed/9mOMmP_aKso'
                    },
                    'millencolin': {
                        name: 'Millencolin',
                        ref: 'millencolin',
                        img_portrait: '../img/artists/portrait/Millencolin_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Millencolin_Landscape.jpg',
                        location: 'main stage',
                        time: 'fri 3 6pm',
                        info: [
                            "Punk tunes and skateboard passion: that’s what Millencolin is all about! Inspired by the Southern California hardcore sounds of Operation Ivy, the Descendents, and NOFX, friends Nicola Sarcevic, Mathias Färm, Erik Ohlson and Frederik Larzon formed the Scandinavian skate punk unit roughly 23 years, seven albums, and 1,500 live shows ago. Not many people know it, but Millencolin are actually named after the skateboard trick, the “melancholy” grab (also known as “sad air”)."
                        ],
                        tweet: 'https://twitter.com/Millencolin',
                        fb: 'https://www.facebook.com/Millencolin',
                        inst: 'http://instagram.com/millencolin',
                        youtube: 'https://www.youtube.com/channel/UCBXUETztGNLUholYeIDZZPQ',
                        website: 'http://millencolin.com',
                        spotify: 'https://open.spotify.com/artist/74xFFXkvOq9dPDigOWTHiX',
                        video: 'https://www.youtube.com/embed/jmBo6qLrflo'
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
                        tweet: 'https://twitter.com/tommycashworld',
                        fb: 'https://www.facebook.com/cashmoneytommy',
                        inst: 'https://www.instagram.com/tommycashworld/',
                        youtube: 'https://www.youtube.com/channel/UCr92AKSfMI-quMa2UGcvWvg',
                        website: 'https://www.facebook.com/cashmoneytommy/',
                        spotify: 'https://open.spotify.com/artist/44XzG6GoJZNtkIGW19hsUK',
                        video: 'https://www.youtube.com/embed/3OGMrZKIjKU'
                    },
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
                        tweet: 'https://twitter.com/257ers',
                        fb: 'https://www.facebook.com/257ers',
                        inst: 'https://www.instagram.com/257ers/',
                        youtube: 'https://www.youtube.com/channel/UCoMradiChryBgljtr05IsDA',
                        website: 'http://www.257ers.de/',
                        spotify: 'https://open.spotify.com/artist/6ihLfpY3cmdGyWEnItn30w',
                        video: 'https://www.youtube.com/embed/QZ33uIdlu0Q'
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
                        tweet: 'https://twitter.com/ssioffiziell',
                        fb: 'https://www.facebook.com/SSIO.allesodernixrecords',
                        inst: 'https://www.instagram.com/ssio1/',
                        youtube: 'https://www.youtube.com/user/allesodernixrecords',
                        website: 'https://www.facebook.com/SSIO.allesodernixrecords/',
                        spotify: 'https://open.spotify.com/artist/3IrUyDPQlQFcB5lMWhPml2',
                        video: 'https://www.youtube.com/embed/UdcYjlESrow'
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
                        tweet: 'https://twitter.com/thehunnaband',
                        fb: 'https://www.facebook.com/thehunnaband/',
                        inst: 'https://www.instagram.com/thehunnaband/',
                        youtube: 'https://www.youtube.com/channel/UC3U1k6n2HLZ2BlMoAXhNsEA',
                        website: 'https://musicglue.com/thehunna/100-album/',
                        spotify: 'https://open.spotify.com/artist/7jZycSvTyx0W9poD4PjEIG',
                        video: 'https://youtube.com/embed/lOsuWnfqMFA'
                    },
                    'wax-wreckaz': {
                        name: 'Wax Wreckaz',
                        ref: 'wax-wreckaz',
                        img_portrait: '../img/artists/portrait/WaxWreckaz_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/WaxWreckaz_Landscape.jpg',
                        location: 'main stage',
                        time: 'fri 3 2pm',
                        info: [
                            "Wax Wreckaz are a DJ/production outfit hailing directly from Innsbruck. The crew consists ofBusy Fingaz, Juwee, Fu and Sensay. The four music lovers grew up with very different social backgrounds and interests, but nevertheless found their own style. Their skillful, handcrafted DJ-sets on four turntables and two mixers are packed with gimmicks, live-remixes and unique versions of songs that you won’t hear anywhere else. They’ve already turned dancefloors upside down from Munich to Managua and now we’re happy to host them on their home turf."
                        ],
                        tweet: 'https://twitter.com/waxwreckaz',
                        fb: 'https://www.facebook.com/waxwreckaz',
                        inst: 'https://www.instagram.com/waxwreckaz/',
                        youtube: 'https://www.youtube.com/user/waxwreckazofficial',
                        website: 'http://www.waxwreckaz.com/ww/',
                        spotify: 'https://open.spotify.com/artist/71yUdzd6D5RGp3R2V7VlHY',
                        video: 'https://youtube.com/embed/mp3I-srdJ5s?list=PL98F3582B087B668E'
                    },
                    'counterfeit': {
                        name: 'Counterfeit',
                        ref: 'counterfeit',
                        img_portrait: '../img/artists/portrait/Counterfeit_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Counterfeit_Landscape.jpg',
                        location: 'main stage',
                        time: 'fri 3 2pm',
                        info: [
                            "The U.K. punk band Counterfeit exploded onto the London scene in 2015 with their feral debut 'Come Get Some'. They pursue a darker, more aggressive, and cathartic sound than you have  ever heard before. You may know the frontman Jamie Campbell Bower from somewhere else  though. That’s right, he started his career acting in several known movies like Sweeny Todd, the  Twilight series, and Harry Potter. But we have to say he cuts a fine figure on the stage as well!"
                        ],
                        tweet: 'https://twitter.com/counterfeitrock',
                        fb: 'https://www.facebook.com/therealcounterfeit',
                        inst: 'https://www.instagram.com/counterfeitrock/',
                        youtube: 'https://www.youtube.com/user/CounterfeitVEVO',
                        website: 'http://therealcounterfeit.com/',
                        spotify: 'https://open.spotify.com/artist/6HxNJuxe4WHa1XQMLryIjG',
                        video: 'https://www.youtube.com/embed/VA1kx-cIDBE'
                    },
                    'famous-deck-team': {
                        name: 'Famous Deck Team',
                        ref: 'famous-deck-team',
                        img_portrait: '../img/artists/portrait/FamousDeckTeam_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/FamousDeckTeam_Landscape.jpg',
                        location: 'main stage',
                        time: 'fri 3 2pm',
                        info: [
                            "Listen up... One for the famous, two for the deck! Not only for VIPs or skateboard-heads—everybody gets hollered at. Famous Deck Team (aka DJ Smart and DJ Crypt) fills the dance floor and makes everybody move with a combination of Funk, Soul, legendary 80s tracks with old school Hip Hop, and electric beats. “Make Em Say Aaa!” is their slogan and they’ll make the crowd go nuts every single time."
                        ],
                        tweet: 'https://twitter.com/TommyCrypt',
                        fb: 'https://www.facebook.com/famousdeckteam/',
                        inst: 'https://www.instagram.com/explore/tags/famousdeckteam/',
                        youtube: 'https://www.youtube.com/user/Cryptadelic/videos',
                        website: 'http://www.famousdeckteam.com/',
                        spotify: '',
                        video: 'https://youtube.com/embed/on1CLL1qoU8'
                    },
                    'pendulum': {
                        name: 'Pendulum DJ Set & Verse',
                        ref: 'pendulum',
                        img_portrait: '../img/artists/portrait/Pendulum_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Pendulum_Landscape.jpg',
                        location: 'main stage',
                        time: 'fri 3 2pm',
                        info: [
                            "Hailing from Perth, Australia, Pendulum holds formative roots ranging from drum and bass,break beat, even hardcore metal and punk. Their comparative talents proved unstoppable, and they single-handedly conquered the world of drum and bass. DJ El Hornet & MC Verse spread the word of Pendulum with their DJ Sets throughout the world, appearing at a myriad of international clubs and festivals worldwide."
                        ],
                        tweet: 'https://twitter.com/pendulum',
                        fb: 'https://www.facebook.com/pendulum',
                        inst: 'https://www.instagram.com/pendulummusic/',
                        youtube: 'https://www.youtube.com/user/pendulumlive',
                        website: 'http://pendulum.com/',
                        spotify: 'https://open.spotify.com/artist/7MqnCTCAX6SsIYYdJCQj9B',
                        video: 'https://youtube.com/embed/ogMNV33AhCY'
                    },
                    'red-bull': {
                        name: 'Red Bull WRTC',
                        ref: 'red-bull',
                        img_portrait: '../img/artists/portrait/Red-Bull-WHO-ROCKZ-THE-CROWD_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Red-Bull-WHO-ROCKZ-THE-CROWD_Landscape.jpg',
                        location: 'main stage',
                        time: 'fri 3 2pm',
                        info: [
                            "The athletes are not the only ones who will compete at the Air + Style Festival Innsbruck-Tirol2017! Red Bull brings two of the best German sound systems on one stage: TAIT EITA Soundsytem and AFROB Soundsytem. The challenge: WHO ROCKZ THE CROWD more? So bring it on and let the DJ games begin!"
                        ],
                        tweet: 'https://twitter.com/redbullrecords',
                        fb: 'https://www.facebook.com/RedBullRecords/',
                        inst: 'https://www.instagram.com/redbullrecords/',
                        youtube: 'https://www.youtube.com/user/redbullrecords',
                        website: 'http://redbullrecords.com/',
                        spotify: '',
                        video: ''
                    },
                    'violett-shock': {
                        name: 'Violett Shock',
                        ref: 'violett-shock',
                        img_portrait: '../img/artists/portrait/ViolettShock_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/ViolettShock_Landscape.jpg',
                        location: 'main stage',
                        time: 'fri 3 2pm',
                        info: [
                            "Rebecca Gruber aka Violett Shock is the youngest DJane in Austria. She had her first gig at theage of 14 and has been unstoppable ever since. Her mix of old and new tracks is always guaranteed to get the crowd shaking all night long—whether at her residence at the Studio 21 or any other club! Get ready to pull an all nighter because you won’t want to stop when Violett Shock is on the turntables."
                        ],
                        tweet: 'https://twitter.com/violettshock',
                        fb: 'https://www.facebook.com/djaneviolett.shock/',
                        inst: 'https://www.instagram.com/djaneviolettshock/',
                        youtube: 'https://www.youtube.com/user/DjaneViolettShock',
                        website: 'https://soundcloud.com/djane-violett-shock/',
                        spotify: '',
                        video: 'https://youtube.com/embed/Cwu8Q01zm_0'
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
                return Keys.filter(function (key) {
                    return queryKey == key;
                })[0];
            }

            function errorHandler(failedArg) {
                console.error('could not find matching key for ' + constantIdentifier + ': ');
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