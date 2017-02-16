(function () {
    'use strict';

    angular
        .module('Statics')
        .constant('Riders', function (inputArg) {
            var riders = {
                    'Antoine-Truchon': {
                        name: {
                            first: 'Antoine',
                            last: 'Truchon'
                        },
                        nation: 'Canada',
                        sponsors: ['YONEX', 'Absolut Park', 'Giro', 'Pop Headwear'],
                        homeBase: 'Sainte Adele',
                        dob: new Date('12/30/1990'),
                        stance: 'Regular',
                        bio: [
                            "Coming out of Quebec, Canada, Antoine has been killing it these past few seasons and has wonsome of the most prestigious events in the world such as the Toyota Big Air in Japan, the Freestyle.ch in Switzerland and the Style Wars in Australia. Antoine has what it takes to make the ground shake and keep the crowd going crazy. His style is smooth as silk and he’s got a massive bag of heavy tricks. Better watch out!"
                        ],
                        ref: 'Antoine-Truchon',
                        img_portrait: 'img/loRiders/Antoine-Truchon.jpg',
                        tweet: 'https://twitter.com/antoine_truchon',
                        fb: 'https://www.facebook.com/TruchonAntoine/',
                        inst: 'https://www.instagram.com/antoine_truchon/',
                        youtube: 'https://www.youtube.com/embed/qLs0sfklQcs',
                        video: 'https://www.youtube.com/embed/A6uokUtjZHM',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: '90.00',
                                    trick: 'Switch Backside Double Cork 1260 Mute'
                                },
                                innsbruck: {
                                    score: '78.33',
                                    trick: 'Switch Backside Double Cork 1260 Mute'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '44.73',
                                    trick: 'Switch Backside Double Cork 1080 Mute / Frontside 1260 Stalefish'
                                },
                                la: {
                                    score: '71.92',
                                    trick: 'Switch Backside 1260 Mute / Frontside 1260 Stalefish'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '40.51',
                                },
                                innsbruck: {
                                    score: '40.51'
                                },
                                la: {
                                    score: '61.47'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '64.83'
                                },
                                innsbruck: {
                                    score: '43.64'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Billy-Morgan': {
                        name: {
                            first: 'Billy',
                            last: 'Morgan'
                        },
                        nation: 'GB',
                        sponsors: ['Red Bull', 'No Fear', 'Grenade', 'Ride Snowboard'],
                        homeBase: 'South Hampton',
                        dob: new Date('04/02/1989'),
                        stance: 'Goofy',
                        bio: [
                            "There aren’t many pro snowboarders from Great Britain, but Billy Morgan has the type ofdedication to make the best out of any situation. After moving overseas, Billy fine-tuned his skills and developed into an extremely strong rider. He consistently delivers solid contest results and shocks the crowd with his impressive bag of tricks. Billy made history in the 2015 season by stomping the very first Quad Cork ever. Yup, the kid’s insane, and we’re super hyped to have him back on the tou"
                        ],
                        ref: 'Billy-Morgan',
                        img_portrait: 'img/loRiders/Billy-Morgan.jpg',
                        tweet: 'https://twitter.com/billymorgan89',
                        fb: 'https://www.facebook.com/billymorgansnowboarder',
                        inst: 'https://www.instagram.com/billymorgan89/',
                        youtube: 'https://www.youtube.com/user/billymorganvideos/featured',
                        video: 'https://www.youtube.com/embed/_MFNYVPESzA',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '80.32',
                                    trick: 'Cab Triple Underflip 1260 Mute / Backside Triple Cork 1440 Mute'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '0.00',
                                },
                                innsbruck: {
                                    score: '72.03'
                                },
                                la: {
                                    score: '0.00'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '69.34'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                        }
                    },
                    'Boris-Mouton': {
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
                        ref: 'Boris-Mouton',
                        img_portrait: 'img/loRiders/Boris-Mouton.jpg',
                        tweet: 'https://twitter.com/borismouton',
                        fb: 'https://www.facebook.com/BorisMouton/',
                        inst: 'https://www.instagram.com/borismouton/',
                        youtube: 'https://www.youtube.com/channel/UCJLzCFVIOzYVjWhfWuNn_eQ',
                        video: 'https://www.youtube.com/embed/ypcpdIT994g',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '0.00',
                                },
                                innsbruck: {
                                    score: '0.00'
                                },
                                la: {
                                    score: '11.55'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '8.92'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                        }
                    },
                    'Brandon-Davis': {
                        name: {
                            first: 'Brandon',
                            last: 'Davis'
                        },
                        nation: 'USA',
                        sponsors: ['Ride', 'Neff', 'Rockstar'],
                        homeBase: 'Mammoth Lakes',
                        dob: new Date('08/30/1995'),
                        stance: 'Regular',
                        bio: [
                            "Although he’s just now making a name for himself across the globe, Brandon Davis is already anestablished star in the US. Extremely smooth, very stylish, incredibly technical on jumps, and probably one of the finest jibbers out. Brandon is reigning WST World Champion in Slopestlye—please do yourself a favor and check out his winning run from Yabuli; jaw dropping stuff! We can guarantee that you are going to see and hear a lot more of Brandon in the future."
                        ],
                        ref: 'Brandon-Davis',
                        img_portrait: 'img/loRiders/Brandon-Davis.jpg',
                        tweet: '',
                        fb: 'https://www.facebook.com/brandon.davis.5494?fref=ts',
                        inst: 'https://www.instagram.com/brandonjdavis/?hl=en',
                        youtube: '',
                        video: 'https://www.youtube.com/embed/Sgu00dLNVS8',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '22.76',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Chas-Guldemond': {
                        name: {
                            first: 'Chas',
                            last: 'Guldemond'
                        },
                        nation: 'USA',
                        sponsors: ['BAGA Outerwear', 'Under Armour', 'Electric', 'Rockstar', 'Paul Mitchell'],
                        homeBase: 'Reno',
                        dob: new Date('04/22/1987'),
                        stance: 'Goofy',
                        bio: [
                            'Chas Guldemond has cemented his place among the best of the best. Dude is a competition machine—you name it, he’s won it: Toyota Big Air, Dew Tour, Arctic Challenge, and he is a former World Champion in Slopestyle. Chas already has an impressive collection of trophies, the only thing missing is a podium finish at an Air+Style event and Chas is aiming to change that. Welcome back to Air+Style, Chas!'
                        ],
                        ref: 'Chas-Guldemond',
                        img_portrait: 'img/loRiders/anon.jpg',
                        tweet: 'https://twitter.com/chasguldemond',
                        fb: 'https://www.facebook.com/ChuckG.tv/',
                        inst: 'https://www.instagram.com/chasguldemond/',
                        youtube: 'https://www.youtube.com/user/USSANetwork/about',
                        video: 'https://www.youtube.com/embed/K9NdQxzEQ4M',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: '26.00',
                                    trick: 'Cab 1260 Double Cork Melon'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                        }
                    },
                    'Clemens-Millauer': {
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
                        ref: 'Clemens-Millauer',
                        img_portrait: 'img/loRiders/Clemens-Millauer.jpg',
                        tweet: 'https://twitter.com/hashtag/clemensmillauer?src=hash',
                        fb: 'https://www.facebook.com/clemensmillauer/',
                        inst: 'https://www.instagram.com/clemensmillauer/',
                        youtube: 'https://www.youtube.com/user/Clemensgopro',
                        video: 'https://www.youtube.com/embed/JDVl_QOXcfc',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '0.00',
                                },
                                innsbruck: {
                                    score: '56.75'
                                },
                                la: {
                                    score: '2.85'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '56.83'
                                },
                                innsbruck: {
                                    score: '35.26'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Darcy-Sharpe': {
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
                        ref: 'Darcy-Sharpe',
                        img_portrait: 'img/loRiders/Darcy-Sharpe.jpg',
                        tweet: 'https://twitter.com/darcy_sharpe',
                        fb: 'https://www.facebook.com/darcysharpegetsit/',
                        inst: 'https://www.instagram.com/darcysharpe/?hl=en',
                        youtube: 'https://www.youtube.com/user/ShredbotsOFFICIAL/featured',
                        video: 'https://www.youtube.com/watch?v=fbaMT0906ls',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '85.73',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '85.73'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Eric-Beauchemin': {
                        name: {
                            first: 'Eric',
                            last: 'Beauchemin'
                        },
                        nation: 'USA',
                        sponsors: ['Omatic'],
                        homeBase: 'Lake Winola, PA',
                        dob: new Date('01/14/1991'),
                        stance: 'Goofy',
                        bio: [
                            'Eric what? Eric who? Eric Bauchemin. There’s no other way to say it—Eric is a genuine American ripper hailing from Michigan. A graduate of the Stratton Mountain School—the best and most prestigious snowboard school in America—Eric loves competitions, kills kickers and rocks rails. He’s one to keep your eye on at Air+Style.'
                        ],
                        ref: 'Eric-Beauchemin',
                        img_portrait: 'img/loRiders/Eric-Beauchemin.jpg',
                        tweet: 'https://twitter.com/eric_beauchemin',
                        fb: 'https://www.facebook.com/eric.beauchemin',
                        inst: 'https://www.instagram.com/eric_beauchemin/',
                        youtube: 'https://www.youtube.com/embed/pSjILoz9mJA',
                        video: 'https://www.youtube.com/embed/HO3I2k-hD2U',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: '75.67',
                                    trick: 'Frontside Flat 1080 Melon'
                                },
                                innsbruck: {
                                    score: '62.00',
                                    trick: 'Cab 1080 Melon'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '36.92',
                                },
                                innsbruck: {
                                    score: '20.56'
                                },
                                la: {
                                    score: '72.03'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '15.74'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Eric-Willett': {
                        name: {
                            first: 'Eric',
                            last: 'Willett'
                        },
                        nation: 'USA',
                        sponsors: ['GoPro', 'Giro', 'Vans', 'Breckenridge'],
                        homeBase: 'Frisco, CO',
                        dob: new Date('02/01/1988'),
                        stance: 'Goofy',
                        bio: [
                            "Born and raised near Breckenridge, Colorado, Eric Willett started snowboarding at the young age of 6 and really put himself on the map after winning a silver medal at his X Games debut in 2010. He’s an absolute beast on the competition scene and regularly finishes in the top 10 at Air + Style. Proving he has what it takes to go up against the best in the world, Willett is one of our few tour riders who has won gold in a World Cup event (slopestyle at the 2015 Grand Prix in Park City, Utah). He’s a top contender for the 2018 USA Olympics team and is sure to put on a show for Air + Style in 2017!"
                        ],
                        ref: 'Eric-Willett',
                        img_portrait: 'img/loRiders/Eric-Willett.jpg',
                        tweet: 'https://twitter.com/ericwillett1',
                        fb: 'https://www.facebook.com/ericwillettofficial/',
                        inst: 'https://www.instagram.com/eric_willett/?hl=en',
                        youtube: 'https://www.youtube.com/embed/tZ1cL6eSOhs',
                        video: 'https://www.youtube.com/embed/a-mX7esr1i4',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: '71.00',
                                    trick: ''
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: '86.00',
                                    trick: 'Switch Backside 1260 Double Cork'
                                },
                                innsbruck: {
                                    score: '89.00',
                                    trick: 'Switch Backside 1080 Double Cork Indy'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '88.33',
                                    trick: 'Switch Backside 1260 Mute'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: '85.67',
                                    trick: 'Frontside Double Cork 1080'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '75.82',
                                    trick: 'Frontside 1260 Mute / Switch Backside 1260 Mute'
                                },
                                la: {
                                    score: '16.93',
                                    trick: 'Frontside 1260 Mute / Frontside 1260 Mute'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '66.54',
                                },
                                innsbruck: {
                                    score: '52.35'
                                },
                                la: {
                                    score: '66.54'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'He-Wei': {
                        name: {
                            first: 'He',
                            last: 'Wei'
                        },
                        nation: 'China',
                        sponsors: ['Burton', 'Red Bull'],
                        homeBase: 'Ji Lin province',
                        dob: new Date('04/13/1990'),
                        stance: 'Regular',
                        bio: [
                            "Also known as “Tiger,” He Wei is the new face of snowboarding in China. Progressing at anunbelievable rate, Wei has quickly racked up impressing rankings in his young career. No stranger to pressure, Wei landed his first ever Double Cork in competition at the 2014 Air + Style Beijing stop, showing he was a force to be reckoned with. With his 8th place finish at the Redbull Nanshan Open, Wei managed to score the best result of a Chinese rider ever at a world snowboard tour tournament— proving that snowboarding is rapidly evolving in the east. “Tiger” has the drive, talent, and tenacity to usher in a whole new era for snowboarding in China."
                        ],
                        ref: 'He-Wei',
                        img_portrait: 'img/loRiders/He-Wei.jpg',
                        tweet: '',
                        fb: '',
                        inst: '',
                        youtube: 'https://www.youtube.com/user/xiaohu800426',
                        video: 'https://www.youtube.com/embed/4PWqxDoNYy8',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: '71.33',
                                    trick: 'Frontside Double Cork 900'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '2.85',
                                },
                                innsbruck: {
                                    score: '0.00'
                                },
                                la: {
                                    score: '0.00'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '6.88'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Jia-Hao-Zhang': {
                        name: {
                            first: 'Jia Hao',
                            last: 'Zhang'
                        },
                        nation: 'China',
                        sponsors: [],
                        homeBase: '',
                        dob: new Date('04/05/1995'),
                        stance: '',
                        bio: [
                            'Jiahao Zhang is a fresh face to Air + Style. You’ll be seeing and hearing more about this Chinese rider soon.'
                        ],
                        ref: 'Jia-Hao-Zhang',
                        img_portrait: 'img/loRiders/Jia-Hao-Zhang.jpg',
                        tweet: '',
                        fb: '',
                        inst: '',
                        youtube: '',
                        video: '',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '20.39',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Jonas-Boesiger': {
                        name: {
                            first: 'Jonas',
                            last: 'B\xF6siger'
                        },
                        nation: 'Switzerland',
                        sponsors: ['DC', 'Level', 'Smith', 'Union'],
                        homeBase: 'Rickenbach, Switzerland',
                        dob: new Date('04/05/1995'),
                        stance: 'Regular',
                        bio: [
                            'Jonas B\xF6siger is a super-talented young snowboarder from Switzerland. He’s been working hard and stomping it hard, while making it look easy for the past few seasons. Keep your eyes peeled for some dizzying Triple Cork variations and other massive spins. We are looking forward to have him back at Air+Style. It’s gonna be a good show guaranteed!'
                        ],
                        ref: 'Jonas-Boesiger',
                        img_portrait: 'img/loRiders/Jonas-Boesiger.jpg',
                        tweet: 'https://twitter.com/search?f=tweets&vertical=default&q=%23jonasboesiger&src=typd',
                        fb: 'https://www.facebook.com/jonasboesiger',
                        inst: 'https://www.instagram.com/jonasboesiger/',
                        youtube: 'https://www.youtube.com/channel/UCnCphtM477DFoabIUeCJLuQ',
                        video: 'https://www.youtube.com/embed/YdiqXB-r1mc',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: '58.33',
                                    trick: 'Backside Double Cork 1080 Double Grab'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '43.64',
                                },
                                innsbruck: {
                                    score: '49.87'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Junze-Yin': {
                        name: {
                            first: 'Junze',
                            last: 'Yin'
                        },
                        nation: 'China',
                        sponsors: [],
                        homeBase: '',
                        dob: '',
                        stance: '',
                        bio: [
                            'Junze Yin is a fresh face to Air + Style. You’ll be seeing and hearing more about this Chinese rider soon.'
                        ],
                        ref: 'Junze-Yin',
                        img_portrait: 'img/loRiders/Junze-Yin.jpg',
                        tweet: 'https://twitter.com/JunzeYin',
                        fb: 'https://www.facebook.com/junzeyin?ref=br_rs',
                        inst: 'https://www.instagram.com/junzeyin/?hl=en',
                        youtube: '',
                        video: '',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '2.22',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Kalle-Jaervilehto': {
                        name: {
                            first: 'Kalle',
                            last: 'J\xE4rvilehto'
                        },
                        nation: 'Switzerland',
                        sponsors: ['Iso-sy\xF6te Snowpark'],
                        homeBase: 'Rickenbach, Switzerland',
                        dob: new Date('07/21/1995'),
                        stance: 'Regular',
                        bio: [
                            'Kalle J\xE4rvilehto is the full package: highly technical and steezy as hell. Kalle is known for flawless execution of tough tricks and effortless landings. Hold your breath, Kalle is going to put on a show!'
                        ],
                        ref: 'Kalle-Jaervilehto',
                        img_portrait: 'img/loRiders/Kalle-Jaervilehto.jpg',
                        tweet: 'http://webgram.co/kallejarvilehto',
                        fb: 'https://www.facebook.com/kallejarvilehtofficial/',
                        inst: 'https://www.instagram.com/kallejarvilehto/',
                        youtube: 'https://www.youtube.com/user/Skubbeli/videos',
                        video: 'https://www.youtube.com/embed/TWE_xTXg12Y',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '53.24',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '53.24'
                                },
                                innsbruck: {
                                    score: '37.95'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Keita-Inamura': {
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
                        ref: 'Keita-Inamura',
                        img_portrait: 'img/loRiders/Keita-Inamura.jpg',
                        tweet: 'https://twitter.com/keita_imamura',
                        fb: 'https://www.facebook.com/keita.inamura.5',
                        inst: 'https://www.instagram.com/keitainamura/?hl=en',
                        youtube: 'https://www.youtube.com/embed/ri4UDdEElMY',
                        video: 'https://www.youtube.com/embed/LB4S1RE6Hjg',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '41.55',
                                    trick: 'Backside 1440 Mute / Frontside 1260 Melon'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '30.10',
                                },
                                innsbruck: {
                                    score: '0.00'
                                },
                                la: {
                                    score: '0.00'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Kyle-Mack': {
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
                        ref: 'Kyle-Mack',
                        img_portrait: 'img/loRiders/Kyle-Mack.jpg',
                        tweet: 'https://twitter.com/_kylemack',
                        fb: 'https://www.facebook.com/KyleMackSnowboarding',
                        inst: 'https://www.instagram.com/_kylemack/',
                        youtube: 'https://www.youtube.com/channel/UCHITW5rdn2Xu0CZf0tVUzEg/about',
                        video: 'https://www.youtube.com/embed/iAVziG6GNTg',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '64.95',
                                    trick: 'Frontside 1260 Tail / Frontside 1260 Tail'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '61.47',
                                },
                                innsbruck: {
                                    score: '14.51'
                                },
                                la: {
                                    score: '91.89'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '30.09'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Lucien-Koch': {
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
                        ref: 'Lucien-Koch',
                        img_portrait: 'img/loRiders/Lucien-Koch.jpg',
                        tweet: 'https://twitter.com/pzwsak',
                        fb: 'https://www.facebook.com/Lucien-Koch-161059404044433/',
                        inst: 'https://www.instagram.com/lucienkoch/?hl=en',
                        youtube: 'https://www.youtube.com/user/stickydude96/feed',
                        video: 'https://www.youtube.com/results?search_query=Lucien+Koch',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                },
                            },
                            '2017': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Mans-Hedberg': {
                        name: {
                            first: 'Måns',
                            last: 'Hedberg'
                        },
                        nation: 'Sweden',
                        sponsors: ['Horsefeathers', 'Lobster', 'VANS'],
                        homeBase: 'Bollnäs',
                        dob: new Date('12/14/1993'),
                        stance: 'Regular',
                        bio: [
                            "If you don’t know Måns, you’ve been missin’ out! Måns Hedberg is an upcoming young Swedishripper who hails from Bollnäs, a little town not far away from Sweden’s finest snowpark in Kläppen. While Måns absolutely destroys anything in his path, he feels most comfortable on big jumps (lucky for us!). On any given day, Måns is likely to toss out Triple Backflips, Triple Cork variations, and a bunch of different 1260s and 1440s served with a heaping side of style guaranteed to raise more than a few eyebrows."
                        ],
                        ref: 'Mans-Hedberg',
                        img_portrait: 'img/loRiders/Måns-Hedberg.jpg',
                        tweet: '',
                        fb: 'https://www.facebook.com/mans.hedberg2/',
                        inst: 'https://www.instagram.com/hedbergmans/',
                        youtube: 'https://www.youtube.com/user/manshedbergg',
                        video: 'https://www.youtube.com/embed/S1357vJiNK0',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '69.15',
                                    trick: 'Backside Double Cork 1080 Tail / Switch Backside 1260 Tail'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '37.95'
                                },
                                innsbruck: {
                                    score: '11.18'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Mark-McMorris': {
                        name: {
                            first: 'Mark',
                            last: 'McMorris'
                        },
                        nation: 'Canada',
                        sponsors: ['Oakley', "Burton", 'Red Bull', 'DVS', 'BMW'],
                        homeBase: 'Regina',
                        dob: new Date('12/09/1993'),
                        stance: 'Regular',
                        bio: [
                            "He might still be young, but Mark McMorris is one of the biggest names in snowboarding.Quickly establishing himself as a leader on the international competition scene, McMorris has pushed the limits of what’s possible in the sport. He’s won more or less every big snowboard event, landed the first Backside Triple Cork 1440 ever, and has even been on the podium at the Winter Olympics. Not bad... All these impressive achievements are proof that Mark McMorris is part the absolute elite in snowboarding and is still hungry for more."
                        ],
                        ref: 'Mark-McMorris',
                        img_portrait: 'img/loRiders/Mark-McMorris.jpg',
                        tweet: 'https://twitter.com/markmcmorris',
                        fb: 'https://www.facebook.com/markleemcmorris/',
                        inst: 'https://www.instagram.com/maximumgames/',
                        youtube: 'https://www.youtube.com/user/MaximumFamilyGames/about',
                        video: 'https://www.youtube.com/embed/lhFxx_CJ9h4',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '94.00',
                                    trick: 'Cab 1260 Double Cork'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: '32',
                                    trick: 'Cab 1440'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: '85.67',
                                    trick: 'Backside Triple Cork 1440 Mute'
                                },
                                innsbruck: {
                                    score: '73.00',
                                    trick: 'Cab 1260 Indy'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: '58.65',
                                    trick: 'Backside Triple Cork 1440 / Frontside Triple Cork 1440 Mute'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '91.89',
                                },
                                innsbruck: {
                                    score: '44.26'
                                },
                                la: {
                                    score: '33.45'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '74.27'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Markus-Kleveland': {
                        name: {
                            first: 'Markus',
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
                        ref: 'Markus-Kleveland',
                        img_portrait: 'img/loRiders/Markus-Kleveland.jpg',
                        tweet: 'https://twitter.com/MarcusKleveland',
                        fb: 'https://www.facebook.com/MarcusKleveland/',
                        inst: 'https://www.instagram.com/marcuskleveland/?hl=en',
                        youtube: 'https://www.youtube.com/user/goodwintertimes',
                        video: 'https://www.youtube.com/embed/uBzKCKMHaEw',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '8.62',
                                },
                                innsbruck: {
                                    score: '91.89'
                                },
                                la: {
                                    score: '48.19'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '100.00'
                                },
                                innsbruck: {
                                    score: '92.45'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Max-Parrot': {
                        name: {
                            first: 'Max',
                            last: 'Parrot'
                        },
                        nation: 'Canada',
                        sponsors: ['Nobaday Snowboards'],
                        homeBase: 'Bromont',
                        dob: new Date('06/06/1994'),
                        stance: 'Goofy',
                        bio: [
                            'Max started his career in the big leagues right here at Air+Style. Since then he’s won both the Big Air and Slopestyle at the X-Games in Aspen, and won the 2015 Air+Style in Beijing. Max has pushed the envelope by landing the history’s first Quad-Underflip. The young Canadian is insanely talented, hungry, and ready to rip!'
                        ],
                        ref: 'Max-Parrot',
                        img_portrait: 'img/loRiders/Max-Parrot.jpg',
                        tweet: 'https://twitter.com/maxparrot',
                        fb: 'https://www.facebook.com/MaxenceParrot/',
                        inst: 'https://www.instagram.com/maxparrot/',
                        youtube: 'https://www.youtube.com/channel/UC4vR3xW7XtQp-nnKbmG8oLg/feed',
                        video: 'https://www.youtube.com/embed/z096RCS2IgM',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: '81.67',
                                    trick: 'Cab Double Cork 1080 Indy'
                                },
                                innsbruck: {
                                    score: '65.67',
                                    trick: 'Backside Double Cork 1080 Mute'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '66.82',
                                    trick: 'Cab Double Cork 1260 Melon / Cab 1260 Melon'
                                },
                                la: {
                                    score: '49.32',
                                    trick: 'Cab 1260 Melon / Cab 1260 Melon'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '100.00',

                                },
                                innsbruck: {
                                    score: '48.19'
                                },
                                la: {
                                    score: '52.35'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '13.45'
                                },
                                innsbruck: {
                                    score: '100.00'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Maximilian-Preissinger': {
                        name: {
                            first: 'Maximilian',
                            last: 'Preissinger'
                        },
                        nation: 'Germany',
                        sponsors: ['Ride', "Bonfire", 'Absolut Park', 'Planet Sports'],
                        homeBase: 'Starnberg',
                        dob: new Date('07/05/1998'),
                        stance: 'Regular',
                        bio: [
                            "Although he’s still just a teen, Maximilian Preissinger is one of the biggest players in the field(literally). The six-foot-two Bavarian Giant goes equally big on his board, and we’re more than happy to have him back at Air + Style."
                        ],
                        ref: 'Maximilian-Preissinger',
                        img_portrait: 'img/loRiders/Maximilian-Preissinger.jpg',
                        tweet: 'https://twitter.com/hashtag/MaximilianPreissinger?src=hash',
                        fb: 'https://www.facebook.com/maximilian.preissinger',
                        inst: 'https://www.instagram.com/maximilianpreissinger/?hl=en',
                        youtube: 'https://www.youtube.com/user/Itsmaxilp',
                        video: 'https://youtube.com/embed/UBtAdDhwaC0',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '20.56',
                                },
                                innsbruck: {
                                    score: '0.00'
                                },
                                la: {
                                    score: '14.51'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '32.64'
                                },
                                innsbruck: {
                                    score: '18.06'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Michael-Ciccarelli': {
                        name: {
                            first: 'Michael',
                            last: 'Ciccarelli'
                        },
                        nation: 'Canada',
                        sponsors: ['Burton', "Anon", 'Monster'],
                        homeBase: 'Ontario',
                        dob: new Date('09/04/1996'),
                        stance: 'Goofy',
                        bio: [
                            'Notorious for his extremely smooth style and technical bangers, Mikey Ciccarelli is a strong talent coming up from Ontario, Canada, doing the hard stuff and making it look too easy. Keep your eyes on him.'
                        ],
                        ref: 'Michael-Ciccarelli',
                        img_portrait: 'img/loRiders/Michael-Ciccarelli.jpg',
                        tweet: 'https://twitter.com/mikeyciccarelli',
                        fb: 'https://www.facebook.com/MikeyJCiccarelli/',
                        inst: 'https://www.instagram.com/mikeyciccarelli/',
                        youtube: 'https://www.youtube.com/channel/UCOIY95WW3gJw3qGAhrNGtQA',
                        video: 'https://www.youtube.com/embed/MNAjd23f24Y',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '23.67',
                                },
                                innsbruck: {
                                    score: '61.47'
                                },
                                la: {
                                    score: '40.51'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '60.68'
                                },
                                innsbruck: {
                                    score: '79.70'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Michael-Schaerer': {
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
                        ref: 'Michael-Schaerer',
                        img_portrait: 'img/loRiders/Michael-Schaerer.jpg',
                        tweet: 'https://twitter.com/michaelscherer',
                        fb: 'https://www.facebook.com/michael.scharer.58',
                        inst: 'https://www.instagram.com/michael_schaerer17/',
                        youtube: 'https://www.youtube.com/embed/V7uQyml9oic',
                        video: '',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '4.44',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Mons-Roeisland': {
                        name: {
                            first: 'Mons',
                            last: 'Røisland'
                        },
                        nation: 'Norway',
                        sponsors: ['DC', "Sweet Protection", 'Oakley', 'Union', 'Monster'],
                        homeBase: 'Høvik',
                        dob: new Date('01/28/1997'),
                        stance: 'Regular',
                        bio: [
                            "After a breakout park in DC’s 2011 movie “IT” alongside riders like Torstein Horgmo and MatsHofgaard, Mons Røisland showed he had what it takes to stand out as the only am on DC’s pro team. His chops on the contest circuit aren’t too shabby either; in 2015 Møns bronze medaled at the X-Games Slopestyle event, landing a bad ass Switch Backside Triple 1620 in his run. Keep your eye out for this Norwegian beast—he’s sure to throw down some bangers at Air + Style."
                        ],
                        ref: 'Mons-Roeisland',
                        img_portrait: 'img/loRiders/Mons-Røisland.jpg',
                        tweet: 'https://twitter.com/monsroisland',
                        fb: 'https://www.facebook.com/mons.roisland',
                        inst: 'https://www.instagram.com/monsroisland/?hl=en',
                        youtube: 'https://www.youtube.com/channel/UCkpTd7h2Mn2P_QpjZHj8A6w',
                        video: 'https://www.youtube.com/embed/hhJQ_uq2NFU',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '33.45',
                                },
                                innsbruck: {
                                    score: '33.45'
                                },
                                la: {
                                    score: '5.72'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '69.34'
                                },
                                innsbruck: {
                                    score: '30.09'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Moritz-Thoenen': {
                        name: {
                            first: 'Moritz',
                            last: 'Thoenen'
                        },
                        nation: 'Schweiz',
                        sponsors: ['Vimana', 'Union', 'Dragon'],
                        homeBase: 'Hilterfingen',
                        dob: new Date('12/09/1996'),
                        stance: 'Regular',
                        bio: [
                            "Making his Air + Style debut this year, Moritz Thoenen is another fine specimen in a whole armyof upcoming Swiss athletes. His rail game is insane, he does the biggest tricks with ease on big jumps, and his style makes the hardest tricks look so incredibly easy. His switch riding is so damn good, you would need a whole day to figure out if he is Regular or Goofy."
                        ],
                        ref: 'Moritz-Thoenen',
                        img_portrait: 'img/loRiders/Moritz-Thoenen.jpg',
                        tweet: 'https://twitter.com/hashtag/MoritzThoenen?src=hash',
                        fb: 'https://www.facebook.com/moritzthoenen/',
                        inst: 'https://www.instagram.com/moritzthoenen/',
                        youtube: 'https://www.youtube.com/user/Preiselbersauce',
                        video: 'https://www.youtube.com/embed/cKaMYH17fqA',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '46.68'
                                },
                                innsbruck: {
                                    score: '25.16'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Nikolas-Baden': {
                        name: {
                            first: 'Nikolas',
                            last: 'Baden'
                        },
                        nation: 'USA',
                        sponsors: ['Adidas Eyewear', 'Steamboat Ski Resort', 'Oakley'],
                        homeBase: 'Steamboat Springs, Colorado',
                        dob: new Date('01/13/1998'),
                        stance: 'Goofy',
                        bio: [
                            "Coming out of Steamboat Springs, Colorado, Nik Baden is a true all around talent: double corksin the pipe, insane rail tricks, and even the biggest kickers are blasted with triples like it ain’t no thing. Anything left to say? We are delighted to have Nik back at Air + Style."
                        ],
                        ref: 'Nikolas-Baden',
                        img_portrait: 'img/loRiders/Nikolas-Baden.jpg',
                        tweet: 'https://twitter.com/nikbaden',
                        fb: 'https://www.facebook.com/nik.baden',
                        inst: 'https://www.instagram.com/nikbaden/',
                        youtube: 'https://www.youtube.com/user/nickbaden1',
                        video: 'https://youtube.com/embed/Y2jgFlbIST8',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: '59.67',
                                    trick: 'Cab 900 Mute Grab'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '11.18',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Nicola-Dioli': {
                        name: {
                            first: 'Nicola',
                            last: 'Dioli'
                        },
                        nation: 'Italia',
                        sponsors: ['Union', 'Dragon', 'Seiser Alm', 'Funky'],
                        homeBase: 'Caspoggio',
                        dob: new Date('11/23/1993'),
                        stance: 'Goofy',
                        bio: [
                            'Nicola Diola is an Italian ripper coming out of the province of Lombardy, an area renowned more often for its simple and delicious dishes than for producing killer snowboard talents. Nonetheless, Nicola is an incredibly good rider and has forever changed the snowboard landscape in Italy. He’s the first Italian snowboarder to land a Triple Cork—a trick he seems to know well enough to pull one off in his sleep. Nicola, welcome to Air+Style!'
                        ],
                        ref: 'Nicola-Dioli',
                        img_portrait: 'img/loRiders/Nicola-Dioli.jpg',
                        tweet: 'https://twitter.com/niqoo_dioli',
                        fb: 'https://www.facebook.com/nicola.dioli',
                        inst: 'https://www.instagram.com/nicolinoo93/',
                        youtube: 'https://www.youtube.com/channel/UCj7a7DokEyQgiJ8gOEXDoOg',
                        video: 'https://www.youtube.com/embed/Bqqj9jvttxk',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '18.06',
                                },
                                innsbruck: {
                                    score: '27.60'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Philipp-Kundratitz': {
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
                        ref: 'Philipp-Kundratitz',
                        img_portrait: 'img/loRiders/Philipp-Kundratitz.jpg',
                        tweet: 'https://twitter.com/pkundratitz',
                        fb: 'https://www.facebook.com/pkundratitz/',
                        inst: 'https://www.instagram.com/philippkundratitz/?hl=en',
                        youtube: 'https://www.youtube.com/user/phkundi/featured',
                        video: 'https://www.youtube.com/embed/eaubnFoblUE',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '35.26',
                                },
                                innsbruck: {
                                    score: '13.45'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },

                        }
                    },
                    'Roope-Tonteri': {
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
                            'Roope has been a fixture on the contest circuit ever since he won the World Rookie Finals in 2011, and it’s impossible to imagine the scene (and podium) without him. Roope loves showdowns, and taking it to the next level. His trademarks are technical tricks and a crispy, clean style. We are happy to have him back at Air+Style and are eagerly waiting for a next episode of the “Tonteri Show”!'
                        ],
                        ref: 'Roope-Tonteri',
                        img_portrait: 'img/loRiders/Roope-Tonteri.jpg',
                        tweet: 'https://twitter.com/roopetonteri',
                        fb: 'https://www.facebook.com/roopetonteri',
                        inst: 'https://www.instagram.com/roopetonteri/?hl=en',
                        youtube: 'https://www.youtube.com/user/MRoope1/featured',
                        video: 'https://www.youtube.com/embed/ADtHfgj0qqM',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: '83.00',
                                    trick: 'Cab 1440'
                                },
                                innsbruck: {
                                    score: '92.00',
                                    trick: 'Backside 1260 Mute Grab'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: '85.33',
                                    trick: 'Cab 1260 Late Cork Indy'
                                },
                                innsbruck: {
                                    score: '41.33',
                                    trick: 'Cab 1260 Indy'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '59.05',
                                    trick: 'Cab 1440 Mute / Method'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '0.00',
                                },
                                innsbruck: {
                                    score: '0.00'
                                },
                                la: {
                                    score: '78.02'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '79.70'
                                },
                                innsbruck: {
                                    score: '46.68'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Ryan-Stassel': {
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
                        ref: 'Ryan-Stassel',
                        img_portrait: 'img/loRiders/anon.jpg',
                        tweet: 'https://twitter.com/ryanstassel',
                        fb: 'https://www.facebook.com/RyanStassel',
                        inst: 'https://www.instagram.com/ryanstassel/',
                        youtube: 'https://www.youtube.com/channel/UCVwfOQ-VEPBIs3lFbT_SVYA',
                        video: 'https://www.youtube.com/embed/8d20BDGTP4o',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: 'N/A',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Sebastien-Konijnenberg': {
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
                        ref: 'Sebastien-Konijnenberg',
                        img_portrait: 'img/loRiders/Sebastien-Konijnenberg.jpg',
                        tweet: 'https://twitter.com/search?q=Sebastien%20Konijnenberg&src=typd',
                        fb: 'https://www.facebook.com/seb.konijn',
                        inst: 'https://www.instagram.com/sebkonijnenberg/',
                        youtube: 'https://www.youtube.com/channel/UCZRJLAArf5Ox7d7FlY8NG0g',
                        video: 'https://www.youtube.com/embed/C6rQC9m3NgE',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '8.92',
                                },
                                innsbruck: {
                                    score: '4.44'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Sebastien-Toutant': {
                        name: {
                            first: 'Sebastien',
                            last: 'Toutant'
                        },
                        nation: 'Canada',
                        sponsors: ["O'Neill", 'Red Bull', 'Oakley', 'Giro'],
                        homeBase: 'Montreal',
                        dob: new Date('11/09/1992'),
                        stance: 'Goofy',
                        bio: [
                            'Sebastien Toutant A.K.A. Seb Toots has definitely left his mark on the competition scene over the past couple of seasons. Seb has won tons of them, including some of the more prestigious titles like Air+Style, the X-Games and the US Open. Seb can stomp the toughest stunts with precision, making a Triple Cork or Heelside BS 9 look like a piece of cake... no wonder he secured another win at 2016’s Air+Style in Innsbruck. Dude’s got a deep bag of wild trick and a pair of brass cojones to match. And if you need more proof, check out his video parts online—banger after banger!'
                        ],
                        ref: 'Sebastien-Toutant',
                        img_portrait: 'img/loRiders/Sebastien-Toutant.jpg',
                        tweet: 'https://twitter.com/sebtoots',
                        fb: 'https://www.facebook.com/SebToutant',
                        inst: 'https://www.instagram.com/sebtoots/',
                        youtube: 'https://www.youtube.com/user/sebtoutant/about',
                        video: 'https://www.youtube.com/embed/iC50vqQVB4Q',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: '93.00',
                                    trick: 'Cab 1260 Double Cork Melon Grab'
                                },
                                innsbruck: {
                                    score: '93.00',
                                    trick: 'Cab 1260 Double Cork'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: '82.00',
                                    trick: 'Backside 1080 Double Rodeo'
                                },
                                innsbruck: {
                                    score: '89.07',
                                    trick: 'Frontside 1080 Double Cork Mute Grab'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: '79.33',
                                    trick: 'Cab Double Cork 1080 Indy'
                                },
                                innsbruck: {
                                    score: '83.33',
                                    trick: 'Cab Double Cork 1260 Melon'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '43.76',
                                    trick: 'Frontside Double Cork 1080 Mute / Backside Double Rodeo 1260 Double Grab'
                                },
                                la: {
                                    score: '70.13',
                                    trick: 'Backside Triple Cork 1440 Mute / Frontside Double Cork 1080 Mute'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '0.00',
                                },
                                innsbruck: {
                                    score: '100.00'
                                },
                                la: {
                                    score: '56.75'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '92.45'
                                },
                                innsbruck: {
                                    score: '64.83'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Sebbe-DeBuck': {
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
                        ref: 'Sebbe-DeBuck',
                        img_portrait: 'img/loRiders/Sebbe-DeBuck.jpg',
                        tweet: 'https://twitter.com/sebbedebuck',
                        fb: 'https://www.facebook.com/sebbedebuckfanpage/',
                        inst: 'https://www.instagram.com/sebbedebuck/?hl=en',
                        youtube: 'https://www.youtube.com/user/SBESmag',
                        video: 'https://www.youtube.com/embed/1w3Yctj9cpQ',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '5.72',
                                },
                                innsbruck: {
                                    score: '11.55'
                                },
                                la: {
                                    score: '20.56'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '49.87'
                                },
                                innsbruck: {
                                    score: '20.39'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Seppe-Smits': {
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
                        ref: 'Seppe-Smits',
                        img_portrait: 'img/loRiders/Seppe-Smits.jpg',
                        tweet: 'https://twitter.com/seppesmits',
                        fb: 'https://www.facebook.com/seppesmits',
                        inst: 'https://www.instagram.com/seppe.smits/',
                        youtube: 'https://www.youtube.com/channel/UCsB-UA97KRwpF-tdC2Vr6LA',
                        video: 'https://www.youtube.com/embed/tES39s-LJsQ',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: '91.67',
                                    trick: 'Backside 1080 Double Cork'
                                },
                                innsbruck: {
                                    score: '88.67',
                                    trick: 'Cab 1440'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: '27.00',
                                    trick: 'Backside 1080 Double Cork'
                                },
                                innsbruck: {
                                    score: '91.13',
                                    trick: 'Cab 1260 Mute Grab'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: '64.67',
                                    trick: 'Backside Double Cork 1080 Nose'
                                },
                                innsbruck: {
                                    score: '80.00',
                                    trick: 'Cab 1260 Mute'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '39.98',
                                    trick: 'Cab 1260 Indy / Backside Double Cork 1080 Nose'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '27.60',
                                },
                                innsbruck: {
                                    score: '56.83'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Stale-Sandbech': {
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
                        ref: 'Stale-Sandbech',
                        img_portrait: 'img/loRiders/Stale-Sandbech.jpg',
                        tweet: 'https://twitter.com/stalesandbech',
                        fb: 'https://www.facebook.com/stalesandbech/',
                        inst: 'https://www.instagram.com/stalesandbech/',
                        youtube: 'https://www.youtube.com/channel/UCO8tCaCIbmveFmeKL2DO0hw',
                        video: 'https://www.youtube.com/embed/e4tEOuDXA7Y',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: '73.00',
                                    trick: ''
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: '82.00',
                                    trick: 'Backside 1080 Mute Grab'
                                },
                                innsbruck: {
                                    score: '73.00',
                                    trick: 'Backside 1260 Mute Grab'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: '92.00',
                                    trick: 'Backside 1440 Mute'
                                },
                                innsbruck: {
                                    score: '89.00',
                                    trick: 'Backside Triple Cork 1440 Mute'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: 'N/A',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '81.89',
                                    trick: 'Backside Triple Cork 1440 Indy/Frontside 1080 Indy'
                                },
                                la: {
                                    score: '65.65',
                                    trick: 'Backside Triple Cork 1440 Indy / Backside 1440 Indy'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '72.03',
                                },
                                innsbruck: {
                                    score: '78.02'
                                },
                                la: {
                                    score: '44.26'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: 'N/A',
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Sven-Thorgren': {
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
                        ref: 'Sven-Thorgren',
                        img_portrait: 'img/loRiders/Sven-Thorgren.jpg',
                        tweet: 'https://twitter.com/sventhorgren?lang=sv',
                        fb: 'https://www.facebook.com/sven.thorgren',
                        inst: 'https://www.instagram.com/sventhorgren/',
                        youtube: 'https://www.youtube.com/channel/UCABshgGP243EXCx3oDP251w',
                        video: 'https://www.youtube.com/embed/caxzNEeSzUQ',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: '80.67',
                                    trick: 'Backside Double Rodeo 1260 Melon'
                                },
                                innsbruck: {
                                    score: '15.33',
                                    trick: 'Backside Double Rodeo 1080 Nose'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: '96.00',
                                    trick: 'Backside 1440 Mute Grab'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '49.78',
                                    trick: 'Cab 1260 Roastbeef / Cab 1260 Roastbeef'
                                },
                                la: {
                                    score: '44.72',
                                    trick: 'Cab 1260 Nose Roastbeef Double Grab / Backside 1440 Mute'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '84.61',
                                },
                                innsbruck: {
                                    score: '66.54'
                                },
                                la: {
                                    score: '84.61'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '85.73'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Tor-Lundstrom': {
                        name: {
                            first: 'Tor',
                            last: 'Lundström'
                        },
                        nation: 'Sweden',
                        sponsors: ['Bataleon', 'Von Zipper', '686', 'Monster'],
                        homeBase: 'Gothenheim',
                        dob: new Date('01/02/1992'),
                        stance: 'Goofy',
                        bio: [
                            "Tor rocks every party ‘til the bitter end and is guaranteed good times. He’ll tear up a bar tab likenothing, but that doesn’t mean he’s slippin’—far from it, actually. Tor learns tricks super fast, keeps pushes himself constantly, and permanently raises his riding to the next level every season. Last year he proved he could hang with the best of ‘em with his Air + Style debut, throwing down a Triple Backside 1440... no big deal! This year he wants to be on the podium, and we’re more than happy to have him back on the tour."
                        ],
                        ref: 'Tor-Lundstrom',
                        img_portrait: 'img/loRiders/Tor-Lundstrom.jpg',
                        tweet: '',
                        fb: 'https://www.facebook.com/tor.lundstrom/?fref=ts',
                        inst: 'https://www.instagram.com/torlundstrom/?hl=en',
                        youtube: '',
                        video: 'https://www.youtube.com/embed/5FMDigc3Uho',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: '96.00',
                                    trick: 'Backside Double 1440'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '66.79',
                                    trick: 'Frontside 1080 Mute / Backside Double Cork 1080 Mute'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '44.26',
                                },
                                innsbruck: {
                                    score: '30.10'
                                },
                                la: {
                                    score: '17.51'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '40.74'
                                },
                                innsbruck: {
                                    score: '22.76'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Torgeir-Bergrem': {
                        name: {
                            first: 'Torgeir',
                            last: 'Bergrem'
                        },
                        nation: 'SWE',
                        sponsors: ['Bataleon', 'Von Zipper', '686', 'Monster'],
                        homeBase: 'Kl\xE6bu, Trondheim',
                        dob: new Date('09/20/1991'),
                        stance: 'Goofy',
                        bio: [
                            'Mr. Bergrem is an absolute all-round talent. Whether it’s a kinked rail or a massive powder jump, he slays everything. You gotta love a dude that is down for anything and has the skills to kill it. This 25 year old Norwegian has already ridden several times at Air+Style. He not only shines with highly technical tricks but also with a rad style. Triple 1620s, how sick is that?!'
                        ],
                        ref: 'Torgeir-Bergrem',
                        img_portrait: 'img/loRiders/Torgeir-Bergrem.jpg',
                        tweet: 'https://twitter.com/search?q=Torgeir%20Bergrem&src=typd',
                        fb: 'https://www.facebook.com/Torgeirbergrem/',
                        inst: 'https://www.instagram.com/torgeirbergrem/?hl=en',
                        youtube: 'https://www.youtube.com/results?sp=EgIQAQ%253D%253D&q=Torgeir+Bergrem',
                        video: 'https://www.youtube.com/embed/Xufl_l142dU',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '88.67',
                                    trick: 'Cab 1260'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: '89.00',
                                    trick: 'Cab 1260'
                                },
                                innsbruck: {
                                    score: '47.00',
                                    trick: 'Backside 1080 Mute Grab'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: '77.67',
                                    trick: 'Backside Double Cork 1260 Mute'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: '83.00',
                                    trick: 'Backside 1260 Mute Grab'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '76.65',
                                    trick: 'Cab 1260 Mute / Backside Triple Cork 1440 Mute'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '52.35',
                                },
                                innsbruck: {
                                    score: '84.61'
                                },
                                la: {
                                    score: '26.85'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: '25.16'
                                },
                                innsbruck: {
                                    score: '60.68'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            }
                        }
                    },
                    'Yuki-Kadono': {
                        name: {
                            first: 'Yuki',
                            last: 'Kadono'
                        },
                        nation: 'Japan',
                        sponsors: ['Oakley', 'Ride', 'Red Bull'],
                        homeBase: 'Kyougo',
                        dob: new Date('05/18/1996'),
                        stance: 'Regular',
                        bio: [
                            "After a recent string of impressive results, Yuki is Japan's rising star in Big Air and Slopestyle. Last season he won the first Air+Style event in Los Angeles and finished the season with a second place overall ranking in the Air+Style Tour. Yuki also won the Burton US Open Slopestyle in 2015, stomping back to back BS Triple Cork 1620s in the bottom of the landings. Yuki has good style, the sickest tricks, and pop that looks like he’s trying to become the newest astronaut down at the Space Center."
                        ],
                        ref: 'Yuki-Kadono',
                        img_portrait: 'img/loRiders/Yuki-Kadono.jpg',
                        tweet: 'https://twitter.com/yukikadono',
                        fb: 'https://www.facebook.com/Yuki-Kadono-508672239221517/',
                        inst: 'https://www.instagram.com/yukikadono/?hl=ja',
                        youtube: 'https://www.youtube.com/channel/UCiHTsIAZiZwcB1kZxHqhgDA/feed',
                        video: 'https://www.youtube.com/embed/aGFh3s-pHlE',
                        scores: {
                            '2011': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2012': {
                                beijing: {
                                    score: '77.00',
                                    trick: 'Backside 1080 Double Cork'
                                },
                                innsbruck: {
                                    score: '16.00',
                                    trick: 'Backside 1260 Melon Grab'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2013': {
                                beijing: {
                                    score: '97.67',
                                    trick: 'Backside Triple Cork 1440 Mute'
                                },
                                innsbruck: {
                                    score: '85.33',
                                    trick: 'Cab 1260 Melon'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2014': {
                                beijing: {
                                    score: '91.00',
                                    trick: 'Backside Double Cork 1260 Mute'
                                },
                                innsbruck: {
                                    score: 'N/A'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                            '2015': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '72.22',
                                    trick: 'Backside 1620 Mute / Backside 1260 Mute'
                                },
                                la: {
                                    score: '95.26',
                                    trick: 'Backside Triple Cork 1620 Mute / Switch Backside Triple Cork 1620 Melon'
                                }
                            },
                            '2016': {
                                beijing: {
                                    score: '78.02',
                                },
                                innsbruck: {
                                    score: '5.72'
                                },
                                la: {
                                    score: '100.00'
                                }
                            },
                            '2017': {
                                beijing: {
                                    score: 'N/A'
                                },
                                innsbruck: {
                                    score: '40.74'
                                },
                                la: {
                                    score: 'N/A'
                                }
                            },
                        }
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
