(function () {
    'use strict';

    angular
        .module('Statics')
        .constant('Riders', function (inputArg) {
            var riders = {
                'sThorgren': {
                    name: {
                        first: 'Sven',
                        last: 'Thorgren'
                    },
                    nation: 'Sweden',
                    sponsors: ['Nitro', 'Oakley', 'Monster'],
                    homeBase: 'Malung',
                    dob: new Date('04/10/1994'),
                    stance: 'Regular',
                    bio: [
                        'This young Swede is on the warpath, sporting a sick bag of tricks with bangers like cab 1440s and a bunch of Triple Corks. Sven has one of the smoothest styles out there and he stomps the biggest tricks like it ain’t no thang. Sven took home top honors at the Los Angeles Air+Style 2016 and snagged himself the Ring of Glory. Make some noise for the champ!'
                    ],
                    ref: 'sThorgren',
                    img_portrait: 'img/loRiders/Sven-Thorgren.jpg',
                },
                'mParrot': {
                    name: {
                        first: 'Max',
                        last: 'Parrot'
                    },
                    nation: 'Canada',
                    sponsors: [],
                    homeBase: 'Bromont',
                    dob: new Date('06/06/1994'),
                    stance: 'Goofy',
                    bio: [
                        'Max started his career in the big leagues right here at Air+Style. Since then he’s won both the Big Air and Slopestyle at the X-Games in Aspen, and won the 2015 Air+Style in Beijing. Max has pushed the envelope by landing the history’s first Quad-Underflip. The young Canadian is insanely talented, hungry, and ready to rip!'
                    ],
                    ref: 'mParrot',
                    img_portrait: 'img/loRiders/Max-Parrot.jpg',
                },
                'sSandbech': {
                    name: {
                        first: 'St\xE5le',
                        last: 'Sandbech'
                    },
                    nation: 'Norway',
                    sponsors: ['Oakley', 'Rome', 'Monster'],
                    homeBase: 'Oslo',
                    dob: new Date('06/03/1993'),
                    stance: 'Goofy',
                    bio: [
                        'It’s no secret that Ståle is a kicker machine, but he’s also a seriously good pipe-rider. A talented shredder all-around, Ståle is also known to get down in the streets. He is also one of the most consistent guys out there and he’s got a mean bag of tricks at his disposal. After a totally insane Olympic Slopestyle run, Ståle took home a Silver Medal. Ståle had a killer 2014/15 season, winning third at Air+Style in LA, second place in Beijing and a win in Innsbruck—what a year! Ståle had to sit out the Air+Style event in Beijing this season due to an injury, but he has since fully recovered and is riding better than ever. '
                    ],
                    ref: 'sSandbech',
                    img_portrait: 'img/loRiders/Stale-Sandbech.jpg',
                },
                'bMouton': {
                    name: {
                        first: 'Boris',
                        last: 'Mouton'
                    },
                    nation: 'France',
                    sponsors: ['Monster', 'West', 'Vans'],
                    homeBase: 'Bex',
                    dob: new Date('01/24/1997'),
                    stance: 'Goofy',
                    bio: [
                        'He might still be a teenager, but Boris is impressive as all hell. The young French rider has been ripping at many big events over the past few years, quickly making a name for himself. At just 15 years old, Boris went all the way to the finals at the O’Neill Evolution Big Air Contest in Davos, Switzerland, and he’s been on the podium on many other events, often finishing higher than established pros. Boris loves to ride rails and is equally good in the half pipe. He’s got some heavy stunts in his arsenal!'
                    ],
                    ref: 'bMouton',
                    img_portrait: 'img/loRiders/Boris-Mouton.jpg',
                },
                'cGuldemond': {
                    name: {
                        first: 'Chas',
                        last: 'Guldemond'
                    },
                    nation: 'USA',
                    sponsors: ['BAGA Outerwear', 'Rockstar', 'Paul Mitchell'],
                    homeBase: 'Reno',
                    dob: new Date('04/22/1987'),
                    stance: 'Goofy',
                    bio: [
                        'Chas Guldemond has cemented his place among the best of the best. Dude is a competition machine—you name it, he’s won it: Toyota Big Air, Dew Tour, Arctic Challenge, and he is a former World Champion in Slopestyle. Chas already has an impressive collection of trophies, the only thing missing is a podium finish at an Air+Style event and Chas is aiming to change that. Welcome back to Air+Style, Chas!'
                    ],
                    ref: 'cGuldemond',
                    img_portrait: 'img/loRiders/Chas-Guldemond.jpg',
                },
                'cMillauer': {
                    name: {
                        first: 'Clemens',
                        last: 'Millauer'
                    },
                    nation: 'Austria',
                    sponsors: ['Burton', 'Anon', 'Blue Tomato', 'Analog', 'Absolut Park'],
                    homeBase: 'Molln',
                    dob: new Date('12/15/1994'),
                    stance: 'Regular',
                    bio: [
                        'Clemens is a beast armed with an elegant style and a bag of tricks full of bangers... and he just keeps getting better. When he’s not slaying the biggest jumps around the world, Clemens is shredding rails like a boss. He took 8th place at his Air+Style debut in Innsbruck, and we’re psyched to have him back this season. Let’s see if he can move up the ranks this time out.'
                    ],
                    ref: 'cMillauer',
                    img_portrait: 'img/loRiders/Clemens-Millauer.jpg',
                },
                'dSharpe': {
                    name: {
                        first: 'Darcy',
                        last: 'Sharpe'
                    },
                    nation: 'Canada',
                    sponsors: ['Burton', 'Monster'],
                    homeBase: 'Comox, BC',
                    dob: new Date('02/09/1996'),
                    stance: 'Regular',
                    bio: [
                        'Darcy Sharpe is part of the next generation of talented and ambitious North American snowboarders. He’s lived his whole life strapped in, having started snowboarding when he was only 5 years old. Darcy later graduated from the Whistler Valley Snowboard Academy. No question, Darcy kills it on any terrain: backnation, pipe, jumps, rails, whatever. No wonder he’s become a fixture on the WST scene. We saw some heavy stuff at Air+Style Beijing, securing him a well-deserved third-place finish, and we’re even more stoked for what’s to come!'
                    ],
                    ref: 'dSharpe',
                    img_portrait: 'img/loRiders/Darcy-Sharpe.jpg',
                },
                'eBeauchemin': {
                    name: {
                        first: 'Eric',
                        last: 'Beauchemin'
                    },
                    nation: 'USA',
                    sponsors: [],
                    homeBase: 'Lake Winola, PA',
                    dob: new Date('01/14/1991'),
                    stance: 'Goofy',
                    bio: [
                        'Eric what? Eric who? Eric Bauchemin. There’s no other way to say it—Eric is a genuine American ripper hailing from Michigan. A graduate of the Stratton Mountain School—the best and most prestigious snowboard school in America—Eric loves competitions, kills kickers and rocks rails. He’s one to keep your eye on at Air+Style.'
                    ],
                    ref: 'eBeauchemin',
                    img_portrait: 'img/loRiders/Eric-Beauchemin.jpg',
                },
                'jB\xF6siger': {
                    name: {
                        first: 'Jonas',
                        last: 'B\xF6siger'
                    },
                    nation: 'Switzerland',
                    sponsors: ['DC', 'Smith', 'Union'],
                    homeBase: 'Rickenbach, Switzerland',
                    dob: new Date('04/05/1995'),
                    stance: 'Regular',
                    bio: [
                        'Jonas B\xF6siger is a super-talented young snowboarder from Switzerland. He’s been working hard and stomping it hard, while making it look easy for the past few seasons. Keep your eyes peeled for some dizzying Triple Cork variations and other massive spins. We are looking forward to have him back at Air+Style. It’s gonna be a good show guaranteed!'
                    ],
                    ref: 'jB\xF6siger',
                    img_portrait: 'img/loRiders/Jonas-Bosiger.jpg',
                },
                'kJ\xE4rvilehto': {
                    name: {
                        first: 'Kalle',
                        last: 'J\xE4rvilehto'
                    },
                    nation: 'Switzerland',
                    sponsors: ['Iso-sy\xF6te', 'Snowpark'],
                    homeBase: 'Rickenbach, Switzerland',
                    dob: new Date('07/21/1995'),
                    stance: 'Regular',
                    bio: [
                        'Kalle J\xE4rvilehto is the full package: highly technical and steezy as hell. Kalle is known for flawless execution of tough tricks and effortless landings. Hold your breath, Kalle is going to put on a show!'
                    ],
                    ref: 'kJ\xE4rvilehto',
                    img_portrait: 'img/loRiders/Kalle-Jarvilehto.jpg',
                },
                'kInamura': {
                    name: {
                        first: 'Keita',
                        last: 'Inamura'
                    },
                    nation: 'Japan',
                    sponsors: ['Billabong', 'NSP'],
                    homeBase: 'Aichi, Japan',
                    dob: new Date('03/09/1997'),
                    stance: 'Regular',
                    bio: [
                        'Keita is a young buck making a name for himself. He’s surprised established pros by killing it on the contest circuit, taking wins at the Billabong Attack 2014 in Japan and the World Rookie Finals. Keita celebrated his Air+Style debut last year with a 6th place finish. You can expect Keita to bring out the big guns again this season, that’s for sure!'
                    ],
                    ref: 'kInamura',
                    img_portrait: 'img/loRiders/Keita-Inamura.jpg',
                },
                'kMack': {
                    name: {
                        first: 'Kyle',
                        last: 'Mack'
                    },
                    nation: 'USA',
                    sponsors: ['Rockstar', 'Oakley'],
                    homeBase: 'West Bloomfield, Michigan',
                    dob: new Date('07/06/1997'),
                    stance: 'Goofy',
                    bio: [
                        'Kyle is a young American ripper who has been killing it at events all over the globe. Back at 2013’s O’Neill Evolution, he wowed the crowd with a Triple Frontside Rodeo 1440. A week later he won the Snowboarding Grand Prix in Park City. Another year, another win for Kyle at the Style Wars in Australia. Not one to rest on his laurels, Kyle has kept right on crushing it. Had you ever seen a Backside Triple 1440 Japan or a Frontside Double Cork 1440 Tail Grab before Kyle busted those out at 2016’s Air+Style in Los Angeles? His riding is so scary good, it just might give you goosebumps.'
                    ],
                    ref: 'kMack',
                    img_portrait: 'img/loRiders/Kyle-Mack.jpg',
                },
                'lKoch': {
                    name: {
                        first: 'Lucien',
                        last: 'Koch'
                    },
                    nation: 'Switzerland',
                    sponsors: ['Drake', "O'Neill", 'Smith', 'Level'],
                    homeBase: 'Grabs',
                    dob: new Date('01/02/1997'),
                    stance: 'Regular',
                    bio: [
                        'Don’t sleep on Lucien. The dude is a beast with an elegant style, a bag of tricks full of bangers, and he’s progressing at lightspeed. He is the Swiss champion in both Slopestyle and Big Air. Events like Air+Style are seemingly made for him. No stranger to big competition, Lucien rode in the Olympics, grabbed 3rd at the 2014 Freestyle.ch, and he’s got a FIS World Cup win to boot.'
                    ],
                    ref: 'lKoch',
                    img_portrait: 'img/loRiders/Lucien-Koch.jpg',
                },
                'mKleveland': {
                    name: {
                        first: 'Marcus',
                        last: 'Kleveland'
                    },
                    nation: 'Norway',
                    sponsors: ['Nitro', "Volcom", 'Red Bull'],
                    homeBase: 'Dombas',
                    dob: new Date('04/25/1999'),
                    stance: 'Goofy',
                    bio: [
                        'Marcus Kleveland is one of the young guns to watch. Dude started pulling 1260s at 12 years old and has kept right on ruling it. A year later he landed a Backside Triple Cork 1440 Mute. Marcus is still far from a finished product, with the potential to push the limits of snowboarding. He rode away from a Quad Cork 1800. He won the whole enchilada at Air+Style Beijing with jaw dropping tricks such as a Cab Triple 1620. Pure insanity!'
                    ],
                    ref: 'mKleveland',
                    img_portrait: 'img/loRiders/Marcus-Kleveland.jpg',
                },
                'mCiccarelli': {
                    name: {
                        first: 'Michael',
                        last: 'Ciccarelli'
                    },
                    nation: 'Canada',
                    sponsors: ['Burton', "Anon"],
                    homeBase: 'Ontario',
                    dob: new Date('09/04/1996'),
                    stance: 'Goofy',
                    bio: [
                        'Notorious for his extremely smooth style and technical bangers, Mikey Ciccarelli is a strong talent coming up from Ontario, Canada, doing the hard stuff and making it look too easy. Keep your eyes on him.'
                    ],
                    ref: 'mCiccarelli',
                    img_portrait: 'img/loRiders/Michael-Ciccarelli.jpg',
                },
                'mSch\xE4rer': {
                    name: {
                        first: 'Michael',
                        last: 'Sch\xE4rer'
                    },
                    nation: 'Switzerland',
                    sponsors: ['Nitro', 'TSG'],
                    homeBase: 'Spiez',
                    dob: new Date('12/23/1996'),
                    stance: 'Regular',
                    bio: [
                        'Forget chocolate and heirloom timepieces, Switzerland’s new big export is exceptional snowboard talent. Michael is a masterpiece of the Swiss Snowboard Federation. He’s got some major heavy artillery in his repertoire, like the Switch Backside 1620 and other bangers. Michael is going to celebrate his Air+Style debut this season. Good luck, buddy!  '
                    ],
                    ref: 'mSh\xE4rer',
                    img_portrait: 'img/loRiders/Michael-Scharer.jpg',
                },
                'nDioli': {
                    name: {
                        first: 'Nicola',
                        last: 'Dioli'
                    },
                    nation: 'Italia',
                    sponsors: ['Union', 'Dragon', 'Seiser Alm'],
                    homeBase: 'Caspoggio',
                    dob: new Date('11/23/1993'),
                    stance: 'Goofy',
                    bio: [
                        'Nicola Diola is an Italian ripper coming out of the province of Lombardy, an area renowned more often for its simple and delicious dishes than for producing killer snowboard talents. Nonetheless, Nicola is an incredibly good rider and has forever changed the snowboard landscape in Italy. He’s the first Italian snowboarder to land a Triple Cork—a trick he seems to know well enough to pull one off in his sleep. Nicola, welcome to Air+Style!'
                    ],
                    ref: 'nDioli',
                    img_portrait: 'img/loRiders/Nicola-Dioli.jpg',
                },
                'pKundratitz': {
                    name: {
                        first: 'Philipp',
                        last: 'Kundratitz'
                    },
                    nation: 'Austria',
                    sponsors: ['Nitro', 'Billabong', 'Love'],
                    homeBase: 'Innsbruck',
                    dob: new Date('11/15/1995'),
                    stance: 'Regular',
                    bio: [
                        'It’s been a minute since we’ve had a rider straight out of our backyard. Hailing from Innsbruck, Philipp Kundratitz is one of our favorite up and comers at Air+Style. Gifted beyond his years, Philipp is blessed with enormous pop, immaculate technique and good style. A complete A to Z ripper!'
                    ],
                    ref: 'pKundratitz',
                    img_portrait: 'img/loRiders/Phillip-Kundratitz.jpg',
                },
                'rTonteri': {
                    name: {
                        first: 'Roope',
                        last: 'Tonteri'
                    },
                    nation: 'Finland',
                    sponsors: ['Anon', 'Burton', 'Red Bull'],
                    homeBase: 'Kouvola',
                    dob: new Date('03/18/1992'),
                    stance: 'Goofy',
                    bio: [
                        'Roope has been a fixture on the contest circuit ever since he won the World Rookie Finals in 2010, and it’s impossible to imagine the scene (and podium) without him. Roope loves showdowns, and taking it to the next level. His trademarks are technical tricks and a crispy, clean style. We are happy to have him back at Air+Style and are eagerly waiting for a next episode of the “Tonteri Show”!'
                    ],
                    ref: 'rTonteri',
                    img_portrait: 'img/loRiders/Roope-Tonteri.jpg',
                },
                'rStassel': {
                    name: {
                        first: 'Ryan',
                        last: 'Stassel'
                    },
                    nation: 'USA',
                    sponsors: ['US Snowboarding', 'Bolle'],
                    homeBase: 'Anchorage, Alaska',
                    dob: new Date('10/23/1l992'),
                    stance: 'Regular',
                    bio: [
                        'Ryan Stassel is a young Alaskan ripper with some big tricks and a handful of impressive results under his belt. When he’s not at his adopted home of Tahoe, California, he is traveling the world with his snowboard, laying waste to whatever terrain he comes across. In 2014, Ryan won the Slopestyle event at the USSA Grand Prix in Mammoth, beating top dawgs like Sage Kotsenburg and Shaun White. Ryan, all the best for your Air+Style debut!'
                    ],
                    ref: 'rStassel',
                    img_portrait: 'img/loRiders/Roope-Stassel.jpg',
                },
                'sKonijnenberg': {
                    name: {
                        first: 'Sebastien',
                        last: 'Konijnenberg'
                    },
                    nation: 'France',
                    sponsors: ['Oakley', 'Ripcurl', 'Salomon'],
                    homeBase: 'Les Pacques',
                    dob: new Date('08/18/1997'),
                    stance: 'Goofy',
                    bio: [
                        'Sebastien Konijnenberg is a French up-and-comer who loves big kickers more than a warm baguette. Seems like France has raised a whole army of young shredders slaying every obstacle that comes across their path, killing it on any terrain. Seb Konijnenberg is the perfect example. Seb throws down off the biggest jumps with a dizzying array of different Spins, Flips, Double and Triple Cork variations and he’s just getting started. You’ll be seeing more of Seb, so get used to it! Welcome to Air+Style! '
                    ],
                    ref: 'sKonijnenberg',
                    img_portrait: 'img/loRiders/Sebastien-Konijnenberg.jpg',
                },
                'sDeBuck': {
                    name: {
                        first: 'Sebbe',
                        last: 'De Buck'
                    },
                    nation: 'Belgium',
                    sponsors: ['Dc', 'Anon', 'Monster', 'Union'],
                    homeBase: 'Zoersel',
                    dob: new Date('03/14/1995'),
                    stance: 'Goofy',
                    bio: [
                        'Even though Sebbe grew up miles away from any mountain or ski resort, he didn’t let that stop him from becoming an amazing rider. At just 15 years old, he took home wins at the Belgium Junior Championships in Big Air, Halfpipe and Slopestyle. Triple threat! Since then, Sebbe has only gotten better. He has gnarly stuff like Switch Triple 14s in his locker. Keep your eyes peeled for his consistency, smoothness and premium amplitude! Welcome back, Sebbe! '
                    ],
                    ref: 'sDeBuck',
                    img_portrait: 'img/loRiders/Sebbe-DeBuck.jpg',
                },
                'sToutant': {
                    name: {
                        first: 'Sebastien',
                        last: 'Toutant'
                    },
                    nation: 'Canada',
                    sponsors: ["O'Neill", 'Red Bull', 'Oakley'],
                    homeBase: 'Montreal',
                    dob: new Date('11/09/1992'),
                    stance: 'Goofy',
                    bio: [
                        'Sebastien Toutant A.K.A. Seb Toots has definitely left his mark on the competition scene over the past couple of seasons. Seb has won tons of them, including some of the more prestigious titles like Air+Style, the X-Games and the US Open. Seb can stomp the toughest stunts with precision, making a Triple Cork or Heelside BS 9 look like a piece of cake... no wonder he secured another win at 2016’s Air+Style in Innsbruck. Dude’s got a deep bag of wild trick and a pair of brass cojones to match. And if you need more proof, check out his video parts online—banger after banger!'
                    ],
                    ref: 'sToutant',
                    img_portrait: 'img/loRiders/Sebastien-Toutant.jpg',
                },
                'sSmits': {
                    name: {
                        first: 'Seppe',
                        last: 'Smits'
                    },
                    nation: 'Belgium',
                    sponsors: ['Red Bull', 'Absolut Park'],
                    homeBase: 'Westmalle',
                    dob: new Date('07/13/1991'),
                    stance: 'Goofy',
                    bio: [
                        'Seppe is constantly killing it, no wonder he has been crowned WST Big Air champion in 2012. Seppe has been on the podium at Air+Style a bunch of times, but he has not yet managed to take the top spot. Seppe has what it takes to change that this time out. This friendly Belgian has one of the cleanest styles, he’s super consistent, and he is throwing down the most difficult tricks like it’s nothin’ at all. Always good to see Seppe at Air+Style!'
                    ],
                    ref: 'sSmits',
                    img_portrait: 'img/loRiders/Seppe-Smits.jpg',
                },
                'sSmits': {
                    name: {
                        first: 'Seppe',
                        last: 'Smits'
                    },
                    nation: 'Belgium',
                    sponsors: ['Red Bull', 'Absolut Park'],
                    homeBase: 'Westmalle',
                    dob: new Date('07/13/1991'),
                    stance: 'Goofy',
                    bio: [
                        'Seppe is constantly killing it, no wonder he has been crowned WST Big Air champion in 2012. Seppe has been on the podium at Air+Style a bunch of times, but he has not yet managed to take the top spot. Seppe has what it takes to change that this time out. This friendly Belgian has one of the cleanest styles, he’s super consistent, and he is throwing down the most difficult tricks like it’s nothin’ at all. Always good to see Seppe at Air+Style!'
                    ],
                    ref: 'sSmits',
                    img_portrait: 'img/loRiders/Seppe-Smits.jpg',
                },
                'tBergrem': {
                    name: {
                        first: 'Torgeir',
                        last: 'Bergrem'
                    },
                    nation: 'Norway',
                    sponsors: ['Volcom', 'Nitro', 'Electric'],
                    homeBase: 'Kl\xE6bu, Trondheim',
                    dob: new Date('09/20/1991'),
                    stance: 'Goofy',
                    bio: [
                        'Mr. Bergrem is an absolute all-round talent. Whether it’s a kinked rail or a massive powder jump, he slays everything. You gotta love a dude that is down for anything and has the skills to kill it. This 25 year old Norwegian has already ridden several times at Air+Style. He not only shines with highly technical tricks but also with a rad style. Triple 1620s, how sick is that?!'
                    ],
                    ref: 'tBergrem',
                    img_portrait: 'img/loRiders/Torgeir-Bergrem.jpg',
                },
                'yKadono': {
                    name: {
                        first: 'Yuki',
                        last: 'Kadono'
                    },
                    nation: 'Japan',
                    sponsors: ['Oakley', 'Ride'],
                    homeBase: 'Kyougo',
                    dob: new Date('05/18/1996'),
                    stance: 'Regular',
                    bio: [
                        "After a recent string of impressive results, Yuki is Japan's rising star in Big Air and Slopestyle. Last season he won the first Air+Style event in Los Angeles and finished the season with a second place overall ranking in the Air+Style Tour. Yuki also won the Burton US Open Slopestyle in 2015, stomping back to back BS Triple Cork 1620s in the bottom of the landings. Yuki has good style, the sickest tricks, and pop that looks like he’s trying to become the newest astronaut down at the Space Center."
                    ],
                    ref: 'yKadono',
                    img_portrait: 'img/loRiders/Yuki-Kadono.jpg',
                },
            },
                Keys = Object.keys(riders),
                constantIdentifier = 'riders';


            return locate(inputArg);

            function locate(arg) {
                switch (arg) {
                    case 'all':
                        return successHandler(riders);
                        break;
                    case null || undefined:
                        return errorHandler(arg);
                        break;
                    default:
                        return successHandler(riders[arg], false);
                        break;
                };
            };

            function returnOne(queryKey) {
                return Keys.filter(function (key) {
                    return queryKey == key;
                })[0];
            }

            function errorHandler(failedArg) {
                console.bio('could not find matching key for ' + constantIdentifier + ': ');
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