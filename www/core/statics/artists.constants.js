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
                    },
                    'zhu': {
                        name: 'ZHU',
                        img_portrait: '../img/artists/portrait/ZHU_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/ZHU_Landscape.jpg',
                        ref: 'zhu',
                    },
                    'chromeo': {
                        name: 'Chromeo',
                        img_portrait: '../img/artists/portrait/Chromeo_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Chromeo_Landscape.jpg',
                        ref: 'chromeo',
                    },
                    'atmosphere': {
                        name: 'Atmosphere',
                        img_portrait: '../img/artists/portrait/Atmosphere_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Atmosphere_Landscape.jpg',
                        ref: 'atmosphere',
                    },
                    'yg': {
                        name: 'YG',
                        img_portrait: '../img/artists/portrait/YG_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/YG_Landscape.jpg',
                        ref: 'yg',
                    },
                    'tv-on-the-radio': {
                        name: 'TV On The Radio',
                        img_portrait: '../img/artists/portrait/TVOnTheRadio_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/TVOnTheRadio_Landscape.jpg',
                        ref: 'tv-on-the-radio',
                    },
                    'vince-staples': {
                        name: 'Vince Staples',
                        img_portrait: '../img/artists/portrait/VinceStaples_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/VinceStaples_Landscape.jpg',
                        ref: 'vince-staples',
                    },
                    'russ': {
                        name: 'Russ',
                        img_portrait: '../img/artists/portrait/Russ_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Russ_Landscape.jpg',
                        ref: 'russ',
                    },
                    'louis-the-child': {
                        name: 'Louis The Child',
                        img_portrait: '../img/artists/portrait/LouisTheChild_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/LouisTheChild_Landscape.jpg',
                        ref: 'louis-the-child',
                    },
                    'vic-mensa': {
                        name: 'Vic Mensa',
                        img_portrait: '../img/artists/portrait/VicMensa_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/VicMensa_Landscape.jpg',
                        ref: 'vic-mensa',
                    },
                    'st-lucia': {
                        name: 'St Lucia',
                        img_portrait: '../img/artists/portrait/StLucia_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/StLucia_Landscape.jpg',
                        ref: 'st-lucia',
                    },
                    'marian-hill': {
                        name: 'Marian Hill',
                        img_portrait: '../img/artists/portrait/MarianHill_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/MarianHill_Landscape.jpg',
                        ref: 'marian-hill',
                    },
                    'the-shelters': {
                        name: 'The Shelters',
                        img_portrait: '../img/artists/portrait/Shelters_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Shelters_Landscape.jpg',
                        ref: 'the-shelters',
                    },
                    'xylo': {
                        name: 'XYLO',
                        img_portrait: '../img/artists/portrait/XYLO_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/XYLO_Landscape.jpg',
                        ref: 'xylo',
                    },
                    'phantoms': {
                        name: 'Phantoms',
                        img_portrait: '../img/artists/portrait/Phantoms_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Phantoms_Landscape.jpg',
                        ref: 'phantoms',
                    },
                    'powers': {
                        name: 'POWERS',
                        img_portrait: '../img/artists/portrait/POWERS_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/POWERS_Landscape.jpg',
                        ref: 'powers',
                    },
                    'rkcb': {
                        name: 'RKCB',
                        img_portrait: '../img/artists/portrait/RKCB_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/RKCB_Landscape.jpg',
                        ref: 'rkcb',
                    },
                    '070-shake': {
                        name: '070 shake',
                        img_portrait: '../img/artists/portrait/070Shake_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/070Shake_Landscape.jpg',
                        ref: '070-shake',
                    },
                },
                'innsbruck': {
                    'clyro': {
                        name: 'Biffy Clyro',
                        img_portrait: '../img/clyro.jpg',
                        img_landscape: '../img/artists/landscape/Clyro_Landscape.jpg',
                        img_yellow: '../img/clyro-yellow.png',
                        location: 'indoor',
                        time: 'fri 3 8pm',
                        ref: 'clyro',
                        info: [
                            'American electronic music band composed of record producer Diplo, Jillionaire, and Walshy fire. It was founded by Diplo and Switch, but Switch left in 2011. Its music spans numerous genres, mixing reggae with dancehall, raggaeton, house, and moombhaton.',
                            'Major Lazer has released three full-length albums: Guns Don\'t Kill People... Lazers Do 2009, Free the Universe 2013,  and Peace Is the Mission in 2015. It also released an EP entitled Apocalypse Soon in March 2014, which featured vocal contribution from Pharrell Williams and Sean Paul. In addition, Major Lazer has also produced Reincarnated, the debut reggae album by Snoop Dogg under his \'Snoop Lion \' persona'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://embed.spotify.com/?uri=spotify%3Aartist%3A4XkhEirR2JZT4fncyOxxtf',
                        video: 'https://www.youtube.com/embed/bpJvP4b5fX8'
                    },
                    'beginner': {
                        name: 'Beginner',
                        img_portrait: '../img/beginner.png',
                        img_landscape: '../img/artists/landscape/Beginner_Landscape.jpg',
                        img_yellow: '../img/beginner-yellow.png',
                        ref: 'beginner',
                        location: 'main stage',
                        time: 'fri 3 9pm',
                        info: [
                            'American electronic music band composed of record producer Diplo, Jillionaire, and Walshy fire. It was founded by Diplo and Switch, but Switch left in 2011. Its music spans numerous genres, mixing reggae with dancehall, raggaeton, house, and moombhaton.',
                            'Major Lazer has released three full-length albums: Guns Don\'t Kill People... Lazers Do 2009, Free the Universe 2013,  and Peace Is the Mission in 2015. It also released an EP entitled Apocalypse Soon in March 2014, which featured vocal contribution from Pharrell Williams and Sean Paul. In addition, Major Lazer has also produced Reincarnated, the debut reggae album by Snoop Dogg under his \'Snoop Lion \' persona'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://embed.spotify.com/?uri=spotify%3Aartist%3A4XkhEirR2JZT4fncyOxxtf',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'bilderbuch': {
                        name: 'Bilderbuch',
                        ref: 'bilderbuch',
                        img_portrait: '../img/bilderbuch.jpg',
                        img_landscape: '../img/artists/landscape/POWERS_Landscape.jpg',
                        location: 'indoor stage',
                        time: 'fri 3 1:30pm',
                        info: [
                            'American electronic music band composed of record producer Diplo, Jillionaire, and Walshy fire. It was founded by Diplo and Switch, but Switch left in 2011. Its music spans numerous genres, mixing reggae with dancehall, raggaeton, house, and moombhaton.',
                            'Major Lazer has released three full-length albums: Guns Don\'t Kill People... Lazers Do 2009, Free the Universe 2013,  and Peace Is the Mission in 2015. It also released an EP entitled Apocalypse Soon in March 2014, which featured vocal contribution from Pharrell Williams and Sean Paul. In addition, Major Lazer has also produced Reincarnated, the debut reggae album by Snoop Dogg under his \'Snoop Lion \' persona'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://embed.spotify.com/?uri=spotify%3Aartist%3A4XkhEirR2JZT4fncyOxxtf',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'the-naked-and-famous': {
                        name: 'The Naked & Famous',
                        ref: 'the-naked-and-famous',
                        img_portrait: '../img/the-naked-and-famous.jpg',
                        img_landscape: '../img/artists/landscape/POWERS_Landscape.jpg',
                        location: 'indoor stage',
                        time: 'fri 3 6pm',
                        info: [
                            'American electronic music band composed of record producer Diplo, Jillionaire, and Walshy fire. It was founded by Diplo and Switch, but Switch left in 2011. Its music spans numerous genres, mixing reggae with dancehall, raggaeton, house, and moombhaton.',
                            'Major Lazer has released three full-length albums: Guns Don\'t Kill People... Lazers Do 2009, Free the Universe 2013,  and Peace Is the Mission in 2015. It also released an EP entitled Apocalypse Soon in March 2014, which featured vocal contribution from Pharrell Williams and Sean Paul. In addition, Major Lazer has also produced Reincarnated, the debut reggae album by Snoop Dogg under his \'Snoop Lion \' persona'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://embed.spotify.com/?uri=spotify%3Aartist%3A4XkhEirR2JZT4fncyOxxtf',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'funf-sterne-deluxe': {
                        name: 'Funf Sterne Deluxe',
                        ref: 'funf-sterne-deluxe',
                        img_portrait: '../img/funf-sterne-deluxe.jpg',
                        img_landscape: '../img/artists/landscape/POWERS_Landscape.jpg',
                        location: 'indoor stage',
                        time: 'fri 3 4:15pm',
                        info: [
                            'American electronic music band composed of record producer Diplo, Jillionaire, and Walshy fire. It was founded by Diplo and Switch, but Switch left in 2011. Its music spans numerous genres, mixing reggae with dancehall, raggaeton, house, and moombhaton.',
                            'Major Lazer has released three full-length albums: Guns Don\'t Kill People... Lazers Do 2009, Free the Universe 2013,  and Peace Is the Mission in 2015. It also released an EP entitled Apocalypse Soon in March 2014, which featured vocal contribution from Pharrell Williams and Sean Paul. In addition, Major Lazer has also produced Reincarnated, the debut reggae album by Snoop Dogg under his \'Snoop Lion \' persona'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://embed.spotify.com/?uri=spotify%3Aartist%3A4XkhEirR2JZT4fncyOxxtf',
                        video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    },
                    'lucky-chops': {
                        name: 'Lucky Chops',
                        ref: 'lucky-chops',
                        img_portrait: '../img/lucky-chops.jpg',
                        img_landscape: '../img/artists/landscape/POWERS_Landscape.jpg',
                        location: 'main stage',
                        time: 'fri 3 6pm',
                        info: [
                            'Redefining what it means to be a brass band, Lucky Chops stormed onto the scene in 2015 with the help of millions of viewers around the globe. Together this group of six talented individuals has created a unique sound and energy which has resonated worldwide with viral success, launching a career that is now headed toward untold heights. From the streets and subway stations of NYC to the Air + Style Festival stage!'
                        ],
                        website: 'http://www.beginner.de/',
                        spotify: 'https://embed.spotify.com/?uri=spotify%3Aartist%3A4XkhEirR2JZT4fncyOxxtf',
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
                    // 'famouse-deck-team': {
                    //     name: 'Famouse Deck Team',
                    //     ref: 'famouse-deck-team',
                    //     img_portrait: '../img/FamouseDeckTeam.jpg',
                    //     img_landscape: '../img/artists/landscape/POWERS_Landscape.jpg',
                    //     location: 'main stage',
                    //     time: 'fri 3 4pm',
                    //     info: [
                    //         'American electronic music band composed of record producer Diplo, Jillionaire, and Walshy fire. It was founded by Diplo and Switch, but Switch left in 2011. Its music spans numerous genres, mixing reggae with dancehall, raggaeton, house, and moombhaton.',
                    //         'Major Lazer has released three full-length albums: Guns Don\'t Kill People... Lazers Do 2009, Free the Universe 2013,  and Peace Is the Mission in 2015. It also released an EP entitled Apocalypse Soon in March 2014, which featured vocal contribution from Pharrell Williams and Sean Paul. In addition, Major Lazer has also produced Reincarnated, the debut reggae album by Snoop Dogg under his \'Snoop Lion \' persona'
                    //     ],
                    //     website: 'http://www.beginner.de/',
                    //     spotify: 'https://embed.spotify.com/?uri=spotify%3Aartist%3A4XkhEirR2JZT4fncyOxxtf',
                    //     video: 'https://www.youtube.com/embed/isMx-EISg3E'
                    // },
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