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
                        location: 'Winter Stage',
                        time: 'sun 19 10:15',
                        info: [
                            'Major Lazer is a project from the award-winning DJ and producer Diplo (aka Wesley Pentz), who has had an unprecedented career that’s taken him from the outer fringes of club culture to the top of pop’s A-list. Over the course of two albums and three EPs, they’ve collaborated with the likes of Bruno Mars, Pharrell Williams, and Ezra Koenig of Vampire Weekend. He’s split his time between working with pop stars like Beyonce, Usher, Snoop Dogg, No Doubt, Lil Wayne, Justin Bieber, Iggy Azalea, Britney Spears, Chris Brown, and Madonna and carving out a niche as one of the leading figures in EDM culture—all while racking up millions of plays as both a producer and an artist. Currently made up of Diplo and fellow DJ/producers Jillionaire and Walshy Fire, Major Lazer’s latest album, Peace is the Mission, was released in June 2015 to widespread critical acclaim.'
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
                        location: 'Winter Stage',
                        time: 'sat 18 10:00',
                        info: [
                            'Flume is a multi-platinum selling, internationally recognized artist, creating his own space in electronic music. Having played sold out shows at home in Australia and abroad from NYC to LA to London to Paris and Berlin, Flume creates complex, intelligent, original productions that sound great wherever in the world you’re listening—all from the bedroom of his parents’ house. Check out Flume’s­ dark, epic 10-minute version of Arcade Fire’s “Afterlife” or his huge remix of Lorde’s “Tennis Court”, which sent entire swaths of the Internet into a frenzy.'
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
                        location: 'Summer Stage',
                        time: 'sun 19 9:00',
                        info: [
                            "ZHU released his track “Faded”, which catapulted him into the international spotlight... quietly. So quietly, in fact, that he was the first anonymous artist to be nominated for a Grammy. He continued to build the hype with two releases before his first full length album. ZHU's initial E.P., THE NIGHTDAY, showcased the raw talent and unique sounds of the budding artist.",
                            'For his 2015 Genesis Series EP project, ZHU recruited an eclectic group made up of members of Bone Thugs N’ Harmony, Skrillex, Trombone Shorty, and more. Bound by no genre, the collection of songs paid homage to the great musicians that inspired ZHU with new age production and sonic design. All of this is why ZHU was dubbed “one of the most musically sophisticated of the current generation of dance music producers” by The New York Times. 2016 saw the release of “In The Morning” his highly anticipated debut full-length “GENERATIONWHY”.'
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
                        location: 'Winter Stage',
                        time: 'sat 18 8:00',
                        info: [
                            'Funk’s a game plan—these guys had a ten-year battle strategy. When they released their first album in 2004, Rick James was still the Antichrist to all but the enlightened. Fast forward a decade, and ‘80s funk—which makes up a major part of Chromeo’s DNA—is all over the charts. 2014’s album “White Women” perpetuates and elevates Chromeo’s existing blueprint: sexy funk, ass-targeting beats, melodic honey, and smart lyrics about the foibles of contemporary love. Genres and styles coexist within a singularity of moves and gestures. The album features dope cameos from all corners, with the likes of Solange Knowles, Ezra Koenig and Toro y Moi. What’s the trick to combining far-flung piano lines, synths and other funked-out electro stuff into a coherent package? As Chromeo says: Know thyself, know thy vibe, and stay thy course'
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
                        location: 'Winter Stage',
                        time: 'sat 18 6:00',
                        info: [
                            'As Atmosphere steps into their 21st year of making music, emcee Slug & producer/DJ Ant show no signs of slowing, compromising or losing sight of their vision. After releasing string of dope singles in 2015, Atmosphere released their latest LP “Fishing Blues” in August 2016. A curious title for a hip-hop duo, perhaps. Is this the point in their career where Atmosphere chooses to step back, put up the “Gone Fishin’” sign, and reminisce about their successes? The answer—a resounding no—is found in the music, a collection of songs that both seemingly redefine the Atmosphere sound. Their passion and creative spark are as energetic as ever. Slug and Ant still have plenty of stories to tell, so stay tuned'
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
                        location: 'Winter Stage',
                        time: 'sun 19 8:00',
                        info: [
                            'Following the release of his sophomore album “Still Brazy” early in 2016, Los Angeles-based rapper YG has emerged as the preeminent voice in gangster rap. His 2014 smash “My Krazy Life” affirmed that the artist who broke out on the scene with 2009\'s \'Toot It And Boot It" could translate his hit-making and storytelling skills to a cohesive album. 2016 saw YG emerge as an important critical voice of the current social climate. “Still Brazy” boasts the classic West Coast flavor that fans have come to expect from YG, but songs like "FDT (Fuck Donald Trump)", "Police Get Away Wit Murder" and "Blacks & Browns" demonstrate an intuitive understanding of sociopolitical dynamics that few chart-topping artists can claim. The future’s lookin’ bright for Compton’s YG.'
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
                        img_portrait: '../img/artists/portrait/TVonTheRadio_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/TVonTheRadio_Landscape.jpg',
                        ref: 'tv-on-the-radio',
                        location: 'Winter Stage',
                        time: 'sun 19 6:00',
                        info: [
                            'TV on the Radio has been called "one of the most compelling American rock-and-roll stories of the modern age" (BBC), “the most innovative band on the planet” (AV Club), and simply "superb" (Rolling Stone), proving themselves to be one of the most influential bands of the decade. Their albums frequently grace national ‘best of’ and ‘year-end’ lists. TVOTR’s live show is to be witnessed. The Boston Globe described it as, "sexy nerdiness letting go in a controlled blast of unleashed energy”. All of this and pair of seminal mid-aughts albums “Return to Cookie Mountain” (2006) and “Dear Science” (2008) have helped to cement TVOTR as defining musicians of this generation.'
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
                        img_landscape: '../img/artists/landscape/VinceStaples_Landscape.JPG',
                        ref: 'vince-staples',
                        location: 'Summer Stage',
                        time: 'sat 18 9:00',
                        info: [
                            'Born and raised in Long Beach, California, Vince Staples has emerged as one of rap’s preeminent rising artists. On 2014’s “Hell Can Wait” and his revered mixtapes, Vince Staples rapped with a masterful blend of observation and first-person passion. On follow-up “Summertime ’06”, he takes listeners to the very streets in which he was raised, showcasing what he’s learned about life and making music. As the album progresses, we enter the mind of a young teenager whose life consisted of robbing people and getting into fights.',
                            'This mindset is revealed in the mesmerizing “Get Paid,” a dissertation on how money is a means of control. “If everybody had money, nobody would be dying.” For Vince Staples, it’s about much more than just being a well-paid, high-profile artist. “I don’t care about money because I’ve always been broke,” he says. “I don’t care about attention because I’ve got a gap between my teeth and a speech problem. I don’t care about fame because it’s corny. I don’t care about being a rapper because those dudes embarrass themselves. What I care about is that when you die, were you full of crap? That’s what matters where I come from.”'
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
                        location: 'Summer Stage',
                        time: 'sun 19 5:15',
                        info: [
                            "“I’ve been at this shit nine years and now they start to call,” Russ sings on his breakout single, “What They Want.” Don’t confuse this as idle boasting from the eclectic Atlanta phenom; it’s a reminder that his rapid ascent was anything but accidental. In an industry filled with manufactured hype, Russ did it all himself. His music boasts the diverse tastes of someone who grew up everywhere: New York, New Jersey, North Carolina, Kentucky and Ohio, and eventually Georgia. Towards the end of high school, he picked up a mic, and taught himself piano, guitar, and drums. Russ doesn’t slip back and forth from hyper-melodic inspirational guitar anthems to raw East Coast hip-hop—they’re all effortlessly combined in the same song. Russ makes all his beats, writes all the raps and the hooks. He plays the guitar, programs the drums, does his own mixing and delves deep into his soul to figure out who he is and what he wants out of life. It’s hard but melodic, sophisticated with a direct emotional appeal."
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
                        location: 'Summer Stage',
                        time: 'sun 19 7:00',
                        info: [
                            'Hailing from Chicago, Louis The Child is an electronic music duo with the stated goal of creating music that makes people happy. Their single, “It’s Strange” has been played all over the radio and racked up over 5 million plays on both Spotify and SoundCloud. In 2016, Snapchat listed Louis The Child as one of 3 EDM Artists to Watch, and Mix Mag ranked LTC as the #1 Artist Taking Dance Music to the Next Level. 2015 saw Louis The Child embark upon tours supporting Madeon, Kaskade and The Chainsmokers. Keep your eyes peeled for LTC in the future.'
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
                        location: 'Summer Stage',
                        time: 'sat 18 7:00',
                        info: [
                            'At the tender age of 23, Grammy nominated artist Vic Mensa has already established himself as an integral part of Chicago culture, first co-founding the SAVEMONEY collective and releasing two mixtapes in two years and now as a solo artist signed with the Roc Nation family. In 2016, Vic Mensa released his critically acclaimed EP “There’s Alot Going On”, which included the powerful song “16 Shots” about the tragic shooting of Chicago teen Laquan McDonald and “Shades of Blue” which is a reflection on the Flint, Michigan water crisis.'
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
                        location: 'Summer Stage',
                        time: 'sat 18 5:15',
                        info: [
                            'St. Lucia, from Brooklyn via South Africa, is back with an infectious new single “Dancing On Glass” and a brand new album called “Matter”. The band celebrated the January 2016 release with a string of live dates. St. Lucia’s 2013 debut L.P. “When The Night” earned rave reviews everywhere from Entertainment Weekly (“an absolute smash”) to Elle (“we have an obsession for this group”) to Billboard (“essential listening”). The past two years have also seen the band touring with the likes of Ellie Goulding, Empire Of The Sun, Charli XCX, and Foster The People, in addition to festival stops at Coachella and Lollapalooza. And if you missed the live show, maybe you caught St. Lucia on Jimmy Kimmel Live! or Late Night With Seth Meyers.'
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
                        location: 'Winter Stage',
                        time: 'sun 19 4:30',
                        info: [
                            "“Act One”, the debut full-length from Marian Hill, was written and produced by songwriting duo Jeremy Lloyd (music/lyrics/production) and Samantha Gongol (music/lyrics/vocals). The multi-talented pair have been collaborating in one form or another since high school. Tempting paradox with a blend of blues and bass, acoustic and digital, classic and modern, Marian Hill have arrived. After early success online, Marian Hill graduated to sold out shows across the country and turns in some high-profile commercials. The first minute of album opener \"Down\" might suggest supper-club-in-the-1920s, but when the bass drops you couldn't be anywhere but now. “Act One” then takes you on a journey exploring the complexities of modern relationships. Marian Hill's one of a kind sound is present throughout—blues harmonies blend with sparse hip hop drums, horns blast under classic vocal melodies, and soloistic vocal chops sit side by side with clear, intimate lyrics. You've never heard this before, yet it's surprisingly familiar. And it's only the beginning."
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
                        location: 'Winter Stage',
                        time: 'sat 18 4:30',
                        info: [
                            "The Shelters were a young band when Tom Petty heard them and got a gut feeling about what they could be. He gave The Shelters the keys to his home studio and showed them a few things. One listen to their single “Rebel Heart,” or any one of the other eleven songs on their debut, and you’ll know they pulled it off. Led by the twin-guitar sound of Chase Simpson and Josh Jove, The Shelters are locked-in by bassist Jacob Pillot and drummer Sebastian Harris. Their self-titled debut LP came out in June 2016 on Warner Bros. The band has put together a collection of recordings that have an immediacy, an emotion, and a musical intelligence that suggests these boys are gonna be bigtime. These guys are fresh off a run of shows with Band Of Horses and have toured recently with The Kooks, Atlas Genius, The Struts and more."
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
                        location: 'Summer Stage',
                        time: 'sun 19 3:45',
                        info: [
                            "XYLØ is a Southern California brother-sister indie pop duo featuring producer/drummer/songwriter Chase Duddy and vocalist/songwriter Paige Duddy. At the beginning of 2014, the siblings started working on their first song together, a hazy pop ballad about love and freedom titled “America”. That song was later licensed for a PacSun commercial starring Kendall and Kylie Jenner. Needless to say, they just about broke the internet. Mixing melodic, dark, lustful vocals with an atmospheric blend of indie rock, electronica, and dirty hip-hop beats, XYLØ has drawn early comparisons to the likes of Lorde and Lana Del Rey. XYLØ released their debut E.P., also titled “America”, in 2016. Paige says, “Each song is a mini chapter of our lives. They range from love and euphoria to heartache and anxiety (and everything in between)."
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
                        location: 'Summer Stage',
                        time: 'sat 18 3:45',
                        info: [
                            "Phantoms is the work of Los Angeles natives Kyle Kaplan and Vinnie Pergola. Often tough to box in, their style recalls many elements of electronic and pop music while still wrangling the kinds of distinct synths and drum samples that have become synonymous with their brand of alternative electronic. With deep roots in music and entertainment backgrounds, Kyle & Vinnie put their entire beings into the project. Their music keeps everybody dancing with an impressive array of drum pads, synths and midi controllers. After releasing their first E.P. in 2015 the duo have been remixing some of their favorite songs of the year and touring with the likes of Com Truise, Beat Connection, Kiesza and more. After this burst of touring and studio work, Phantoms is prepping their first full-length record slated for release in early 2017 via Casablanca/Republic Records."
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
                        img_portrait: '../img/artists/portrait/Powers_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Powers_Landscape.jpg',
                        ref: 'powers',
                        location: 'Winter Stage',
                        time: 'sun 19 3:00',
                        info: [
                            "POWERS is an L.A.-based pop duo inspired by found sounds, ‘90s TV shows and other discarded mass culture ephemera. Crista Ru and Mike Del Rio take a collage-like approach to constructing crystalline pop. After building up their songwriting resumé—which includes Selena Gomez, Icona Pop and Kylie Minogue, among others—the duo decided to refocus on their own music and began creating under the name POWERS. As POWERS, they piece together chopped-up live instrumentation, synths, samples, and beats into a sound that’s intricately composed but graced with timeless pop simplicity. In creating songs for their forthcoming album, POWERS continue to embrace their oddball inclinations and exercises"
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
                        location: 'Winter Stage',
                        time: 'sat 18 3:00',
                        info: [
                            "When Riley Knapp and Casey Barth fuse together their diverse layers of electronic, R&B music, the result is a veritable dreamscape of unpredictable sounds. Avant-garde by design, RKCB’s songs are also personal and aspirational. RKCB have premiered new tracks with Vice’s Noisey and enjoyed more than 30 million online streams across SoundCloud, Spotify and more. Not relegated to the internet alone, RKCB have toured with Gallant and sold out shows in their hometown of Los Angeles. The follow-up to debut E.P. “Short Films”, entitled “In Contrast” is up on SoundCloud now."
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
                        location: 'Summer Stage',
                        time: 'sun 19 2:30',
                        info: [
                            "Hailing from North Bergen, New Jersey, this breakout female artist is a force to be reckoned with. Shake, a moniker inspired by her quickness on the basketball court, is an artist in the truest sense. The power of her music comes from her unapologetic honesty. Drawing from her life experiences, her raw emotional perspective is exemplified in her writing, her unique sound, and her creations with the 070 Crew. Shake had no formal voice training or writing background, and taught herself how to play the piano. From the first time she stepped foot in the recording booth, she hit the ground running and hasn’t looked back. In a culture where many millennials are more focused with building a brand over the substance of their message, 070 Shake strays from the pack. Her jams as sweet like honey, but don’t get stung by the bee."
                        ],
                        tweet: 'https://twitter.com/070shake',
                        fb: 'https://www.facebook.com/070shake',
                        inst: 'https://www.instagram.com/070shake',
                        youtube: 'https://www.youtube.com/user/070ShakeVEVO',
                        website: 'https://070shake.com',
                        spotify: 'https://open.spotify.com/artist/12Zk1DFhCbHY6v3xep2ZjI',
                        video: 'https://www.youtube.com/embed/FirPqCMIekA'
                    },
                    'maybird': {
                        name: 'Maybird',
                        img_portrait: '../img/artists/portrait/Maybird_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Maybird_Landscape.jpg',
                        ref: 'maybird',
                        location: 'Summer Stage',
                        time: 'sat 18 2:30',
                        info: [
                            "Maybird was born in the summer of 2013 when singer/songwriter Josh Netsky performed at a small concert in the woods of upstate New York called the Stone Mill gathering. It was there that serendipity brought Netsky and his brother (drummer) Adam Netsky together with long-time guitarist Sam Snyder and new addition Kurt Johnson – and things clicked.",
                            "Mostly recorded in the basement studio at the Stone Mill, as well as various apartments in the Rochester area, their debut ‘Turning Into Water’ EP paints a picture of the sonic array that resulted from that night. The track ‘Big Sun Explosion’ was discovered by Danger Mouse and released on his label 30th Century Record’s first compilation in late 2015. The EP’s release followed shortly after. Currently, the band is recording a follow up LP and exploring some new sounds. "
                        ],
                        tweet: 'https://twitter.com/Maybirdmusic',
                        fb: 'https://www.facebook.com/maybirdmusic/',
                        inst: 'https://www.instagram.com/maybirdmusic/',
                        youtube: 'https://www.youtube.com/channel/UCjU2fJ-tGHcBd36dC7YBMpg',
                        website: 'https://www.facebook.com/maybirdmusic/',
                        spotify: 'https://open.spotify.com/artist/0Aev3tJ4D1LLfG6q9f7fkP',
                        video: 'https://www.youtube.com/embed/2DeqawMMNgQ'
                    },
                },
                'innsbruck': {
                    'beginner': {
                        name: 'Beginner',
                        img_portrait: 'img/artists/portrait/Beginner_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/Beginner_Landscape.jpg',
                        img_yellow: '../img/beginner-yellow.png',
                        ref: 'beginner',
                        location: 'kronehit main stage',
                        time: 'sat 4 21:00',
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
                        location: 'Kronehit main stage',
                        time: 'sat 4 18:30',
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
                        location: 'kronehit main stage',
                        time: 'fri 3 20:45',
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
                        name: 'The Naked and Famous',
                        ref: 'the-naked-and-famous',
                        img_portrait: '../img/artists/portrait/TheNakedAndFamous_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/TheNakedAndFamous_Landscape.jpg',
                        location: 'Kronehit main stage',
                        time: 'sat 4 17:15',
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
                        time: 'sat 4 17:45',
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
                        location: 'indoor stage',
                        time: 'sat 4 14:30',
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
                        location: 'kronehit main stage',
                        time: 'fri 3 18:45',
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
                        time: 'SUN 00:15',
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
                        location: 'indoor stage',
                        time: 'sat 4 16:15',
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
                        location: 'Kronehit main stage',
                        time: 'sat 4 15:00',
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
                        location: 'kronehit main stage',
                        time: 'fri 3 17:00',
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
                        location: 'indoor stage',
                        time: 'SUN 21:30',
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
                        location: 'indoor stage',
                        time: 'sat 3 13:15',
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
                    'famouse-deck-team': {
                        name: 'Famouse Deck Team',
                        ref: 'famouse-deck-team',
                        img_portrait: '../img/artists/portrait/FamousDeckTeam_Portrait.jpg',
                        img_landscape: '../img/artists/landscape/FamousDeckTeam_Landscape.jpg',
                        location: 'tba',
                        time: 'tba',
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
                        location: 'indoor stage',
                        time: 'SUN 01:30',
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
                        location: 'indoor stage',
                        time: 'SUN 22:30',
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
                        location: 'indoor stage',
                        time: 'SUN 02:45',
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
                        // console.log("dfs")
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
