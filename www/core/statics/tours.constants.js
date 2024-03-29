(function () {
    'use strict';

    angular
        .module('Statics')
        .constant('Tours', function (inputArg) {
            var tours = {
                    recap_video: 'https://www.youtube.com/embed/W31Z3CgTTO4?&theme=dark&autohide=2&showinfo=0"',
                    'beijing': {
                        title: 'BEIJING',
                        ref: 'beijing',
                        date_semantic: 'NOV 18 + 19',
                        dest: 'app.tour-stops',
                        video: 'https://www.youtube.com/embed/IFHcflZbBq0?&theme=dark&autohide=2&showinfo=0',
                        city_block_image: '../img/beijing_city_block.jpg'
                    },
                    'innsbruck': {
                        title: 'INNSBRUCK',
                        ref: 'innsbruck',
                        date_semantic: 'FEB 3 + 4',
                        dest: 'app.tour-stops',
                        recap: {
                            title: '2017 Highlights',
                            video: 'https://www.youtube.com/embed/_E0PGhcdo2g?&theme=dark&autohide=2&showinfo=0'
                        },
                        video: 'https://www.youtube.com/embed/GxzXcur0gbg?&theme=dark&autohide=2&showinfo=0',
                        city_block_image: '../img/innsbruck_city_block.jpg',
                        schedule: [{
                            date: 'Fri Feb 3',
                            stages: [{
                                name: 'Ramp',
                                lineup: [{
                                    name: 'The Hunna',
                                    ref: 'the-hunna',
                                    time_mult: 20,
                                    time_dur: 2,
                                    time_semantic: '18:00'
                                }, {
                                    name: 'Qualification Men Run 1',
                                    ref: '',
                                    time_mult: 28,
                                    time_dur: 4,
                                    time_semantic: '20:00'
                                }, ]
                            }, {
                                name: 'Main Stage',
                                lineup: [{
                                    name: 'Qualification Men Run 2',
                                    ref: '',
                                    time_mult: 16,
                                    time_dur: 4,
                                    time_semantic: '17:00'
                                }, {
                                    name: 'Millencolin',
                                    ref: 'millencolin',
                                    time_mult: 23,
                                    time_dur: 3,
                                    time_semantic: '18:45'
                                }, {
                                    name: 'Bilderbuch',
                                    ref: 'bilderbuch',
                                    time_mult: 31,
                                    time_dur: 5,
                                    time_semantic: '20:45'
                                }]
                            }, ]
                        }, {
                            date: 'Sat Feb 4',
                            stages: [{
                                name: 'Ramp',
                                lineup: [{
                                    name: 'Semifinals Men Run 1 - 3',
                                    ref: '',
                                    time_mult: 2,
                                    time_dur: 6,
                                    time_semantic: '13:30'
                                }, {
                                    name: 'Qualification Women Run 1-3',
                                    ref: '',
                                    time_mult: 12,
                                    time_dur: 4,
                                    time_semantic: '16:00'
                                }, {
                                    name: 'Finals Women',
                                    ref: '',
                                    time_mult: 26,
                                    time_dur: 2,
                                    time_semantic: '19:30'
                                }, {
                                    name: 'Finals Men',
                                    ref: '',
                                    time_mult: 28,
                                    time_dur: 4,
                                    time_semantic: '20:00'
                                }, ]
                            }, {
                                name: 'Main Stage',
                                lineup: [{
                                    name: 'SSIO',
                                    ref: 'ssio',
                                    time_mult: 8,
                                    time_dur: 4,
                                    time_semantic: '15:00'
                                }, {
                                    name: 'The Naked And Famous',
                                    ref: 'the-naked-and-famous',
                                    time_mult: 17,
                                    time_dur: 3,
                                    time_semantic: '17:15'
                                }, {
                                    name: 'Biffy Clyro',
                                    ref: 'clyro',
                                    time_mult: 21,
                                    time_dur: 3,
                                    time_semantic: '18:30'
                                }, {
                                    name: 'Beginner',
                                    ref: 'beginner',
                                    time_mult: 32,
                                    time_dur: 4,
                                    time_semantic: '21:00'
                                }]
                            }, {
                                name: 'Indoor Stage',
                                lineup: [{
                                    name: 'Counterfeit',
                                    ref: 'counterfeit',
                                    time_mult: 1,
                                    time_dur: 3,
                                    time_semantic: '13:15'
                                }, {
                                    name: 'Lucky Chops',
                                    ref: 'lucky-chops',
                                    time_mult: 6,
                                    time_dur: 4,
                                    time_semantic: '14:30'
                                }, {
                                    name: '257ers',
                                    ref: '257ers',
                                    time_mult: 13,
                                    time_dur: 4,
                                    time_semantic: '16:15'
                                }, {
                                    name: 'F\xFCnf Sterne Deluxe',
                                    ref: 'funf-sterne-deluxe',
                                    time_mult: 19,
                                    time_dur: 4,
                                    time_semantic: '17:45'
                                }]
                            }, ]
                        }],
                        afterparty: {
                            date: 'Sat Feb 4',
                            stage: 'Indoor Stage',
                            lineup: [{
                                name: 'Waz Wreckaz',
                                ref: 'wax-wreckaz',
                                time_mult: 34,
                                time_dur: 4,
                                time_semantic: '21:30'
                            }, {
                                name: 'Red Bull WRTC',
                                ref: 'red-bull',
                                time_mult: 38,
                                time_dur: 6,
                                time_semantic: '22:30'
                            }, {
                                name: 'Tomm\xA5 \u20aca$h',
                                ref: 'tommy-cash',
                                time_mult: 45,
                                time_dur: 4,
                                time_semantic: '00:15'
                            }, {
                                name: 'Pendulum DJ Set & Verse',
                                ref: 'pendulum',
                                time_mult: 50,
                                time_dur: 4,
                                time_semantic: '01:30'
                            }, {
                                name: 'Violett Shock',
                                ref: 'violett-shock',
                                time_mult: 55,
                                time_dur: 9,
                                time_semantic: '02:45'
                            }, ]
                        },
                        faq_general: [{
                            question: 'Where is the Air + Style Festival Innsbruck-Tirol located?',
                            answer: 'In the Olympiaworld in Innsbruck (Olympiastrasse 10, 6020 Innsbruck)'
                        }, {
                            question: 'Will there be shuttles?',
                            answer: 'Yes there will be shuttles running from Innsbruck Main Station (Bus Platform 4) before and after the event',
                            main: true
                        }, {
                            question: 'How many stages are there?',
                            answer: '2 stages: The outdoor KroneHit Mainstage and an Indoor Stage.'
                        }, {
                            question: 'What are the festival hours?',
                            answer: '[FR: 16:30 – 22:00 SA: 12:30 – 22:00 SA Party: 21:330 – 05:00]',
                            main: true
                        }, {
                            question: 'What are the box office hours?',
                            answer: '[Fr: 15:30-19:00 Sa: 11:30-19:00] The box office is located at Entry North (Main Entry)'
                        }, {
                            question: 'Will there be lockers at the festival?',
                            answer: 'No, only at the Aftershow Party'
                        }, {
                            question: 'Is there a timetable for the bands?',
                            answer: 'Yes.  In our festival program on the App or on site on the big screens and info boards.'
                        }, {
                            question: 'Where can I find a festival map?',
                            answer: 'In the app or in our progam guide, on site on big screens and info boards.'
                        }, {
                            question: 'Where can I download the Air + Style App?',
                            answer: 'You can search for Air + Style in your app store and will find it right away.'
                        }, {
                            question: 'Is there a reentry if I need to grab something from home?',
                            answer: 'Yes. Or ticket is only valid for one -time entry but if you show your wristband with your vaildated ticket you will be able to get back in. We will make sure you dont want to leave though :)'
                        }, {
                            question: 'Is this festival for all ages?',
                            answer: 'No, children under 6 years old are not allowed to attend the event and if youare between 6 and 14 you can only get in with an accompagning adult. The law for protecting the youth is applicable for all areas of the event.',
                            main: true
                        }, {
                            question: 'Is there an age limit for the party?',
                            answer: 'Yes, you need to be over 16 to be allowed to enter. There will be ID checks.'
                        }, {
                            question: 'Can I bring my own drinks/food?',
                            answer: 'No, but we have lots of beverages there ;)'
                        }, {
                            question: 'Do Vendors accept Debit/Credit Cards?',
                            answer: 'No, we are a cash only event. There will be an ATM on site.'
                        }, {
                            question: 'I lost something onsite, what do I do?',
                            answer: 'Go to the information tent at Entry North (Main Entry). After the event all lost items will be handed over to Olympiaworld.'
                        }, {
                            question: 'Could I bring my dog?',
                            answer: 'No. We just want the best for your pet and on that day, it’s best if he or she stays home.'
                        }, {
                            question: 'Can I bring my professional camera?',
                            answer: 'No. You are only allowed to bring a digital camera without detachable lenses.'
                        }, {
                            question: 'Is this festival handcap friendly?',
                            answer: 'Yes! Please use Entry South for Entry ONLY.  There are no special viewing areas but there are assigned areas you can go to for preferred viewing. Please  send an email to office@air-style.com for further information and map. We will also grant a ticket for yor accompagning person.'
                        }, {
                            question: 'Will the festival stay open if there is rain?',
                            answer: 'Yes, as long as the athlets can ride safely we will continue. There is also the Indoor stage you can visit if you dont want to get wet..'
                        }, {
                            question: "What's the family ticket?",
                            answer: 'We have created a ticket category especially for Families. You buy your regular ticket and for only 5 Euro more you an get access for your child (if  he/she is under 14). Please use Entry South as this will be less crowed and gets  you straight into Learn To Area.'
                        }, {
                            question: "What's the Learn To Area?",
                            answer: 'Together with our partners we have created a fun-filled activities such asmini snowboard ramp and skate mini ramp. Please note that the Lear nto Area is only open Saturday and closes at 7pm.'
                        }, {
                            question: "What's special about the VIP ticket?",
                            answer: 'You have your own entry (Entry West of Tivoli Stadium) will fast entry, you have your heated indoor area with awesome views onto venue plus you have the  exclusive outdoor areas close to the action on both ramp and stages Please note that VIP area is cashless this year- still you can fill up your card with cash or credit/debit card at the recharge point in the main indoor VIP area.'
                        }, {
                            question: "What's the difference between VIP and VIP Gold ticket?",
                            answer: 'VIP Gold gets you to all areas of VIP, plus you have your own area to hang out where you get free drinks and free food all day long. Please note that the VIP Gold exclusive area is only open Saturday, but you can  hang out at the VIP area on Friday and get food and drink vouchers.'
                        }, {
                            question: "Where do I park?",
                            answer: 'We recommend you take the shuttle as there is hardly any parking around the venue. There is a parking deck at Tivoli stadium but this will fill up fast and costs you 8 Euro.'
                        }, {
                            question: "Where do I change my ticket/get my wristband?",
                            answer: 'There will be ticket change points at Entry North and South.'
                        }, {
                            question: "Is there good food?",
                            answer: 'We will have a great selection for foodtrucks for all kinds of dietary needs!'
                        }, ],
                        faq_banlist: {
                            yesList: [
                                'Backpacks (medium)',
                                'Cell Phones/Chargers',
                                'Chapstick/Lip Balm',
                                'Sealed Cigarettes',
                                'Dancing Shoes',
                                'Camera (non-pro, no detachable lenses)',
                                'Ear Plugs',
                                'Eye Drops (subject to testing)',
                                'Fanny Packs/Hip Bags',
                                'Gum',
                                'Hats',
                                'Makeup',
                                'Purses/Handbags',
                                'Smiles',
                                'Sunglasses',
                            ],
                            noList: [
                                'Aerosol Products/Aerosol Cans',
                                'Air Horns',
                                'Audio Recording Devices',
                                'Bikes',
                                'Blankets/Towels',
                                'Bottles (glass or metal)',
                                'Cameras or Video Cameras (detachable lens)',
                                'Chains/Chain Wallets',
                                'Chairs',
                                'Coolers',
                                'Drones, Remote Control Aircraft/Toys/Cars',
                                'Drugs or Drug Paraphernalia',
                                'e-Cigs/Vapes',
                                'Fireworks/Explosives/Road Flares',
                                'Flags',
                                'Flyers/Sampling/Giveaways',
                                'Glow Sticks/LED Gloves',
                                'Guns/Ammunition/Tasers',
                                'Hoverboards',
                                'Hula Hoops',
                                'Instruments',
                                'Knives/Weapons/Sharp Objects',
                                'Laser Pointers',
                                'Mace/Pepper Spray',
                                'Outside Food or Beverage',
                                'Pets/Animals (unless ADA approved)',
                                'Selfie Sticks/Narcissists/Tripods',
                                'Sharpies/Markers/Paint Pens',
                                'Skateboards/Skates',
                                'Squirt Guns/Toy Guns/Sling Shots',
                                'Sharp Objects',
                                'Batteries',
                                'Umbrellas',
                            ]
                        },
                        partners: [{
                                img: 'img/Kombilogo _Innsbruck-Tirol_web.png',
                                // dim: 100,
                                link: 'http://www.tyrol.com/places/a-innsbruck'
                            }, {
                                img: 'img/Logo 1c neg mit Outline ohne abfall.png',
                                // dim: 100,
                                link: 'http://www.da-ist-was-los.at/'
                            }, {
                                img: 'img/bt_2d_com_1c_white.png',
                                // dim: 120,
                                link: 'https://www.blue-tomato.com/de-DE/'
                            }, {
                                img: 'img/Logo_Hofer.svg.png',
                                // dim: 120,
                                link: 'https://www.hofer.at/'
                            }, {
                                img: 'img/OEBB_RGB.png',
                                // dim: 120,
                                link: 'https://www.oebb.at/en'
                            }, {
                                img: 'img/Kronehit-Logo.svg.png',
                                // dim: 120,
                                link: 'http://www.kronehit.at/'
                            }, {
                                img: 'img/TT_Logo_4c.png',
                                // dim: 120,
                                link: 'http://www.tt.com/'
                            }, {
                                img: 'img/Logo_Adlers_Raute_CMYK_RZ.png',
                                // dim: 120,
                                link: 'http://www.adlers-innsbruck.com/en/home.html'
                            }, {
                                img: 'img/Olympiaworld.png',
                                // dim: 120,
                                link: 'http://www.olympiaworld.at/en/'
                            }, {
                                id: 'line',
                                img: 'img/line-logo-white.svg',
                                link: 'http://www.thelinehotel.com/'
                            }, {
                                id: 'kuehtai',
                                img: 'img/kuehtai_Logo.png',
                                link: 'http://www.kuehtai.info/'
                            }

                        ]
                    },
                    'la': {
                        title: 'LOS ANGELES',
                        ref: 'la',
                        date_semantic: 'FEB 18 + 19',
                        dest: 'app.tour-stops',
                        recap: {
                            video: 'https://www.youtube.com/embed/Ay3jvf_hN6g?&theme=dark&autohide=2&showinfo=0',
                            title: 'Los Angeles 2017'
                        },
                        video: 'https://www.youtube.com/embed/gi_iUovqnjI?&theme=dark&autohide=2&showinfo=0',
                        city_block_image: '../img/la_city_block.jpg',
                        schedule: [{
                            date: 'Sat Feb 18',
                            stages: [{
                                name: 'Ramp',
                                lineup: [{
                                    name: 'Qualification Run 1',
                                    ref: '',
                                    time_mult: 25,
                                    time_dur: 3,
                                    time_semantic: '7:15'
                                }, {
                                    name: 'Qualification Run 2',
                                    ref: '',
                                    time_mult: 34,
                                    time_dur: 3,
                                    time_semantic: '9:15'
                                }, ]
                            }, {
                                name: 'Winter Stage',
                                lineup: [{
                                    name: 'RKCB',
                                    ref: 'rkcb',
                                    time_mult: 8,
                                    time_dur: 3,
                                    time_semantic: '3:00'
                                }, {
                                    name: 'The Shelters',
                                    ref: 'the-shelters',
                                    time_mult: 14,
                                    time_dur: 3,
                                    time_semantic: '4:30'
                                }, {
                                    name: 'Atmosphere',
                                    ref: 'atmosphere',
                                    time_mult: 20,
                                    time_dur: 4,
                                    time_semantic: '6:00'
                                }, {
                                    name: 'Chromeo',
                                    ref: 'chromeo',
                                    time_mult: 28,
                                    time_dur: 4,
                                    time_semantic: '8:00'
                                }, {
                                    name: 'Flume',
                                    ref: 'flume',
                                    time_mult: 36,
                                    time_dur: 5,
                                    time_semantic: '10:00'
                                }]
                            }, {
                                name: 'Summer Stage',
                                lineup: [{
                                    name: 'Maybird',
                                    ref: 'maybird',
                                    time_mult: 6,
                                    time_dur: 2,
                                    time_semantic: '2:30'
                                }, {
                                    name: 'PHANTOMS',
                                    ref: 'phantoms',
                                    time_mult: 11,
                                    time_dur: 3,
                                    time_semantic: '3:45'
                                }, {
                                    name: 'St Lucia',
                                    ref: 'st-lucia',
                                    time_mult: 17,
                                    time_dur: 3,
                                    time_semantic: '5:15'
                                }, {
                                    name: 'Vic Mensa',
                                    ref: 'vic-mensa',
                                    time_mult: 24,
                                    time_dur: 4,
                                    time_semantic: '7:00'
                                }, {
                                    name: 'Vince Staples',
                                    ref: 'vince-staples',
                                    time_mult: 32,
                                    time_dur: 4,
                                    time_semantic: '9:00'
                                }]
                            }]
                        }, {
                            date: 'Sun Feb 19',
                            stages: [{
                                name: 'Ramp',
                                lineup: [{
                                    name: 'Semifinals Run 1',
                                    ref: '',
                                    time_mult: 18,
                                    time_dur: 2,
                                    time_semantic: '5:30'
                                }, {
                                    name: 'Semifinals Run 2 & 3',
                                    ref: '',
                                    time_mult: 24,
                                    time_dur: 4,
                                    time_semantic: '7:00'
                                }, {
                                    name: 'Superfinal Run 1-3',
                                    ref: '',
                                    time_mult: 33,
                                    time_dur: 3,
                                    time_semantic: '9:15'
                                }, {
                                    name: 'Award Ceremony',
                                    ref: '',
                                    time_mult: 36,
                                    time_dur: 2,
                                    time_semantic: '10:00'
                                }, ]
                            }, {
                                name: 'Winter Stage',
                                lineup: [{
                                    name: 'Seb Isaac',
                                    ref: '',
                                    time_mult: 4,
                                    time_dur: 2,
                                    time_semantic: '2:10'
                                }, {
                                    name: 'POWERS',
                                    ref: 'powers',
                                    time_mult: 8,
                                    time_dur: 3,
                                    time_semantic: '3:00'
                                }, {
                                    name: 'Marian Hill',
                                    ref: 'marian-hill',
                                    time_mult: 14,
                                    time_dur: 3,
                                    time_semantic: '4:30'
                                }, {
                                    name: 'TV on the Radio',
                                    ref: 'tv-on-the-radio',
                                    time_mult: 20,
                                    time_dur: 4,
                                    time_semantic: '6:00'
                                }, {
                                    name: 'YG',
                                    ref: 'yg',
                                    time_mult: 28,
                                    time_dur: 4,
                                    time_semantic: '8:00'
                                }, {
                                    name: 'Major Lazer',
                                    ref: 'major-lazer',
                                    time_mult: 37,
                                    time_dur: 5,
                                    time_semantic: '10:15'
                                }]
                            }, {
                                name: 'Summer Stage',
                                lineup: [{
                                    name: '070 Shake',
                                    ref: '070-shake',
                                    time_mult: 6,
                                    time_dur: 2,
                                    time_semantic: '2:30'
                                }, {
                                    name: 'XYLO',
                                    ref: 'xylo',
                                    time_mult: 11,
                                    time_dur: 3,
                                    time_semantic: '3:45'
                                }, {
                                    name: 'RUSS',
                                    ref: 'russ',
                                    time_mult: 17,
                                    time_dur: 3,
                                    time_semantic: '5:15'
                                }, {
                                    name: 'Louis the Child',
                                    ref: 'louis-the-child',
                                    time_mult: 24,
                                    time_dur: 4,
                                    time_semantic: '7:00'
                                }, {
                                    name: 'Zhu',
                                    ref: 'Zhu',
                                    time_mult: 32,
                                    time_dur: 5,
                                    time_semantic: '9:00'
                                }]
                            }, ]
                        }],
                        faq_general: [{
                                question: 'Which bands/artists will be playing each day?',
                                answer: 'TBA'
                            }, {
                                question: 'When will tickets be on sale?',
                                answer: 'On sale now! General Admission 2-day Passes and 2-day VIP',
                                main: true
                            }, {
                                question: ' Is Air + Style 2017 Fest all ages?',
                                answer: 'Yes, it’s an All Ages show. Ages 10 and under are free',
                                main: true
                            }, {
                                question: 'What time does the festival start?',
                                answer: '2:00 PM are doors.',
                                main: true
                            }, {
                                question: 'Are there hotels nearby?',
                                answer: 'Yes, our official hotel partner is with The Line Hotel located at 3515 Wilshire Blvd Los Angeles, CA 90010. They are offering courtesy rates of $199 King, $219 Double, $219 Hollywood Hills View King , $239 Hollywood Hills View Double' +
                                    '<br><br><a href="https://gc.synxis.com/rez.aspx?Hotel=68711&Chain=17841&arrive=2/15/2017&depart=2/20/2017&adult=1&child=0&group=170215AIRS_001" target="_blank">Click here</a> to book the special courtesy rates.',
                                main: true
                            }, {
                                question: 'Is this festival ADA approved?',
                                answer: 'Yes, for all info regarding wheelchair accessibility, service animals, and anything else you may need to know, ',
                                hasPdf: true,
                                link: '[click here]',
                                pdf: 'AirandStyleADAInformation.pdf'
                            }, {
                                question: 'Is there a last and found?',
                                answer: "Yes, On Event Days (Feb 18-19): Located at Guest Services Booth Post-Event. (Feb 19-21): Catering tent in Lot 1, 11am-4pm only. After Feb 21: Email info@air-style.com",
                            }, {
                                question: 'Is there somewhere to store my bike?',
                                answer: "Yep! in partnership with the LA County Bike Coalition, CLIF will be operating a bike valet so that you can get to the festival on two wheels instead of four.",
                            }, {
                                question: "Where do I park?",
                                answer: 'We have teamed up with Pavement App, a new peer-to-peer parking app with lots of inventory around Expo Park. Pavemint helps users reserve spaces on demand or in advance. Pavemint is only offered on iOS, so you will need to have an iPhone in order to reserve. If you’re also interested in public beta testing, email hello@pavemint.com to be added to the waitlist.'
                            }, {
                                question: 'Are there ins and outs?',
                                answer: 'No.'
                            }, {
                                question: 'Are there lockers on site?',
                                answer: 'Yes, you can rent lockers here(http://bit.ly/2jRWyqy) for 1 or 2 days and even get unlimited charging for your mobile device. Pre order now.'
                            }, {
                                question: 'Is there free water?',
                                answer: 'Yes there are water refill stations.'
                            }, {
                                question: 'Can I bring an empty water bottle?',
                                answer: 'Yes.'
                            }, {
                                question: 'Are there shade tents?',
                                answer: 'There will be shade spots all around the venue. Not necessarily a tent.'
                            }, {
                                question: "What's the camera policy?",
                                answer: 'Professional photographers must obtain a photo pass using our press submission form. Do not email your request. Photo passes are not required for standard cameras with lenses under 15 cm long or handheld video devices under 6″. Professional video cameras are not permitted.'
                            }, {
                                question: "Can I bring my child?",
                                answer: 'Yes, it’s an All Ages show'
                            }, {
                                question: "Are you hiring volunteers for the festival?",
                                answer: 'We will not be hiring volunteers for this event'
                            }, {
                                question: "Will there be first aid on site?",
                                answer: 'Yes, First aid locations are offered throughout the venue. Please refer to your festival map, or contact the nearest staff member.'
                            }, {
                                question: "What about bringing my medical prescriptions (asthma, insulin, etc.)?",
                                answer: 'Please bring it to the main medical tent and they will store it for you.'
                            }, {
                                question: "Will there be ATMs on site?",
                                answer: 'Yes.'
                            }, {
                                question: "Is there a map of the festival?",
                                answer: 'You can find a map here: (Link coming soon!)'
                            }, {
                                question: "Is there a mobile app for the festival?",
                                answer: 'Yes, you can download for your mobile device here: ANDROID: https://play.google.com/store/apps/details?id=com.air.style&hl=en IOS: https://itunes.apple.com/us/app/air-+-style-2016/id1067868468?mt=8'
                            }, {
                                question: "I am mobility impaired. Are there places for me to view the concert?",
                                answer: 'Yes there will be ADA platforms at each performance area.'
                            },
                            // {
                            //     question: "Will I need a special wristband to use ADA viewing areas?",
                            //     answer: 'Yes there will be ADA platforms at each performance area.'
                            // },
                            {
                                question: "Where do I go for lost and found?",
                                answer: 'You can go to the main info hub inside the venue and they will be able to assist you. For any lost items post-show please email.'
                            },
                            // {
                            //     question: "Are single day tickets available?",
                            //     answer: 'Not yet. A+S team we need to decide what we want to put here.'
                            // },
                            {
                                question: "When is my wristband being shipped?",
                                answer: 'We are using digital tickets.'
                            }, {
                                question: "How will I know when my passes have shipped?",
                                answer: 'People are receiving their digital tickets immediately.'
                            }, {
                                question: "How do I update/change my email or billing address?",
                                answer: 'http://support.frontgatetickets.com/'
                            }, {
                                question: "How do I update/change my email or billing address?",
                                answer: 'http://support.frontgatetickets.com/ Contact Front Gate: 888.512.SHOW (7469) Info@fontgatetickets.com'
                            }, {
                                question: "I didn't receive a confirmation of my purchase.",
                                answer: "http://support.frontgatetickets.com/ Contact Front Gate: 888.512.SHOW (7469) Info@fontgatetickets.com"
                            }, {
                                question: "What type of credit card can I use to purchase passes?",
                                answer: "Any major credit card"
                            }, {
                                question: "What is the price for a GA ticket? How much is it with all fees added in? What about VIP and single day?",
                                answer: "2-Day GA Tickets $139.00 + $7.29 service fee. 2-Day VIP Tickets $229.00 + $10.17 service fee. Single Tickets aren't sold."
                            }, {
                                question: "Will I be able to see every single band on the lineup?",
                                answer: "Yes, but not the entirety of each artist set if you would like to see every artist, there is some crossover in the beginning of the day but not the full set length."
                            },
                        ],
                        faq_banlist: {
                            yesList: [
                                'All Ages Welcome',
                                'Baby Strollers',
                                'Backpacks (medium)',
                                'Camelbaks(empty)',
                                'Cell Phones/Chargers',
                                'Chapstick/Lip Balm',
                                'Sealed Cigarettes',
                                'Dancing Shoes',
                                'Camera (non-pro, no detachable lenses)',
                                'Ear Plugs',
                                'Eye Drops (subject to testing)',
                                'Fanny Packs/Hip Bags',
                                'Gum',
                                'Hats',
                                'Makeup',
                                'Parasols',
                                'Purses/Handbags',
                                'Smiles',
                                'Sunglasses',
                                'Sun Block (non-aerosol)',
                                'Walkie talkies',
                                'Water Bottles(empty plastic reusable)'
                            ],
                            noList: [
                                'Aerosol Products/Aerosol Cans',
                                'Air Horns',
                                'Audio Recording Devices',
                                'Bikes',
                                'Blankets/Towels',
                                'Bottles (glass or metal)',
                                'Cameras or Video Cameras (detachable lens)',
                                'Chains/Chain Wallets',
                                'Chairs',
                                'Coolers',
                                'Drones, Remote Control Aircraft/Toys/Cars',
                                'Drugs or Drug Paraphernalia',
                                'e-Cigs/Vapes',
                                'Fireworks/Explosives/Road Flares',
                                'Flags',
                                'Flyers/Sampling/Giveaways',
                                'Glow Sticks/LED Gloves',
                                'Guns/Ammunition/Tasers',
                                'Hoverboards',
                                'Hula Hoops',
                                'Ins & Outs',
                                'Instruments',
                                'Kites/Sky Lanterns',
                                'Knives/Weapons/Sharp Objects',
                                'Laser Pointers',
                                'Mace/Pepper Spray',
                                'Massagers',
                                'Outside Food or Beverage',
                                'Pets/Animals (unless ADA approved)',
                                'Selfie Sticks/Narcissists/Tripods',
                                'Sharpies/Markers/Paint Pens',
                                'Skateboards/Skates',
                                'Squirt Guns/Toy Guns/Sling Shots',
                                'Stuffed Animals',
                                'Totems',
                                'Umbrellas',
                            ]
                        },
                        partners: [{
                                id: 'go90',
                                img: 'img/go90_LOGO.png',
                                // dim: 120,
                                link: 'http://www.go90.com'
                            },
                            // 'img/partner-2.png',
                            {
                                id: 'coors-light',
                                img: 'img/coors-light-mountain-logo.png',
                                // dim: 100,
                                link: 'http://www.coors.com'
                            }, {
                                id: 'hansens',
                                img: 'img/Hansens-Logo-new-2016.png',
                                // dim: 120,
                                link: 'https://www.hansens.com/'
                            }, {
                                id: 'subaru',
                                img: 'img/SOA_CIM_HOR_LRG_4C.JPG',
                                // dim: 120,
                                link: 'http://www.subaru.com/'
                            }, {
                                id: 'clif',
                                img: 'img/CLIF.png',
                                // dim: 100,
                                link: 'http://www.clifbar.com'
                            }, {
                                id: 'stoli',
                                img: 'img/Stoli.png',
                                // dim: 120,
                                link: 'http://stoli.com/'
                            }, {
                                id: 'foro',
                                img: 'img/foro_logo-2.png',
                                // dim: 120,
                                link: 'http://www.theforo.com'
                            }, {
                                id: 'healthade',
                                img: 'img/Health_Ade_Master_Logo-03.png',
                                // dim: 120,
                                link: 'http://health-ade.com/'
                            }, {
                                id: 'justwater',
                                img: 'img/JUSTWATERlogo.png',
                                link: 'http://www.justwater.com/'
                            }, {
                                id: 'halfpops',
                                img: 'img/HP_Logo_RGB.png',
                                // dim: 120,
                                link: 'https://www.halfpops.com/'
                            }, {
                                id: 'bear_mountain',
                                img: 'img/BBMR_Primary_White.png',
                                // dim: 120,
                                link: 'https://www.bigbearmountainresort.com'
                            }, {
                                id: 'mammoth',
                                img: 'img/MAMMOTH_PRIMARY_LOGO_white.png',
                                // dim: 120,
                                link: 'http://www.mammothmountain.com/'
                            }, {
                                id: 'pep_boys',
                                img: 'img/Pep-Boys-Logo_Blk_Wht_with-Stroke.png',
                                // dim: 120,
                                link: 'https://www.pepboys.com/'
                            }, {
                                id: 'techron',
                                img: 'img/Techron_Logo_White.png',
                                // dim: 120,
                                link: 'http://www.techron.com/'
                            }, {
                                id: 'extra_mile',
                                img: 'img/EM full color flat.png',
                                // dim: 120,
                                link: 'http://www.chevronwithtechron.com/extramile.aspx'
                            }, {
                                id: 'downey',
                                img: 'img/downey.png',
                                // dim: 120,
                                link: 'http://www.chevronwithtechron.com/extramile.aspx'
                            }, {
                                id: 'intelligentsia',
                                img: 'img/Intelligentsia.png',
                                // dim: 120,
                                link: 'https://www.intelligentsiacoffee.com/'
                            }, {
                                id: 'flood',
                                img: 'img/FLOOD_MAGAZINE_PRESENTS.png',
                                // dim: 120,
                                link: 'http://floodmagazine.com'
                            }, {
                                id: 'nylon',
                                img: 'img/pinkNYLON_logo.png',
                                // dim: 120,
                                link: 'http://www.nylon.com/'
                            }, {
                                id: 'stereogum',
                                img: 'img/Stereogum_white.png',
                                // dim: 120,
                                link: 'http://www.stereogum.com/'
                            }, {
                                id: 'vibe',
                                img: 'img/vibe.png',
                                // dim: 120,
                                link: 'http://www.vibe.com/'
                            }, {
                                id: 'skedaddle',
                                img: 'img/skedaddle.png',
                                // dim: 120,
                                link: 'https://www.letskedaddle.com/'
                            }
                        ],
                        hotel_partners: [{
                            id: 'line',
                            img: 'img/line-logo-white.svg',
                            link: 'http://www.thelinehotel.com/'
                        }]
                    }
                },

                Keys = Object.keys(tours),
                constantIdentifier = 'tours';


            return locate(inputArg);

            function locate(arg) {

                switch (arg) {
                    case 'all':
                        return successHandler(tours);
                        break;
                    case null || undefined:
                        return errorHandler(arg);
                        break;
                    default:
                        return successHandler(tours[arg], false);
                        break;
                };
            };

            function returnOne(queryKey) {
                return Keys.filter(function (key) {
                    return queryKey == key;
                })[0];
            }

            function errorHandler(failedArg) {
                console.info('could not find matching key for ' + constantIdentifier + ': ');
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
