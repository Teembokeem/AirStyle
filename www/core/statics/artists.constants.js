(function() {
    'use strict';

    angular
        .module('Statics')
        .constant('Artists', function(inputArg) {
            var artists = {
                'la': {
                    'clyro': {
                        name: 'Biffy Clyro',
                        img_general: '../img/clyro.png',
                        img_yellow: '../img/clyro-yellow.png',
                        ref: 'clyro',
                    },
                    'beginner': {
                        name: 'Beginner',
                        img_general: '../img/beginner.png',
                        img_yellow: '../img/beginner-yellow.png',
                        ref: 'beginner',
                    },
                },
                'innsbruck': {
                    'clyro': {
                        name: 'Biffy Clyro',
                        img_general: '../img/clyro.png',
                        img_yellow: '../img/clyro-yellow.png',
                        ref: 'clyro',
                    },
                    'beginner': {
                        name: 'Beginner',
                        img_general: '../img/beginner.png',
                        img_yellow: '../img/beginner-yellow.png',
                        ref: 'beginner',
                    },
                    'bilderbuch': {
                        name: 'Bilderbuch',
                        ref: 'bilderbuch',
                        img_general: '../img/bilderbuch.jpg'
                    },
                    'the-naked-and-famous': {
                        name: 'The Naked & Famous',
                        ref: 'the-naked-and-famous',
                        img_general: '../img/the-naked-and-famous.jpg'
                    },
                    'funf-sterne-deluxe': {
                        name: 'Funf Sterne Deluxe',
                        ref: 'funf-sterne-deluxe',
                        img_general: '../img/funf-sterne-deluxe.jpg'
                    },
                    'lucky-chops': {
                        name: 'Lucky Chops',
                        ref: 'lucky-chops',
                        img_general: '../img/lucky-chops.jpg'
                    }
                }
            },
                Keys = Object.keys(artists),
                constantIdentifier = 'artists';

 
            return locate(inputArg);

            function locate(arg) {
                var key = arg != undefined ? returnOne(arg) : 'all';

                switch (key) {
                    case 'all': 
                        return successHandler(artists);
                        break;
                    case null || undefined:
                        return errorHandler(arg);                        
                        break;
                    default: 
                        return successHandler(artists[key], false);
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
        });
})();