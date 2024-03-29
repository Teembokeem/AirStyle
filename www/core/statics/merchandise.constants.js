(function () {
    'use strict';

    angular
        .module('Statics')
        .constant('Merchandise', function (inputArg) {
            var merchandise = {
                'la-curved': {
                    name: 'Los Angeles Curved Satin Jacket',
                    price: parseFloat(Math.round(40.00 * 100) / 100).toFixed(2),
                    image: 'img/shirt1.png',
                    ref: '/los-angeles-curved-satin-jacket'
                },
                'chill-or-be-chilled': {
                    name: 'Air and Style Hooded Sweatshirt',
                    price: parseFloat(Math.round(20.00 * 100) / 100).toFixed(2),
                    image: 'img/shirt2.png',
                    ref: '/air-and-style-hooded-sweatshirt'
                },
                'amerrickan': {
                    name: 'Los Angeles Bleached T',
                    price: parseFloat(Math.round(22.00 * 100) / 100).toFixed(2),
                    image: 'img/shirt3.png',
                    ref: '/los-angeles-bleached-tee'
                },
            },
                Keys = Object.keys(merchandise),
                constantIdentifier = 'merchandise';


            return locate(inputArg);

            function locate(arg) {
                var key = arg != undefined ? returnOne(arg) : 'all';

                switch (key) {
                    case 'all':
                        return successHandler(merchandise);
                        break;
                    case null || undefined:
                        return errorHandler(arg);
                        break;
                    default:
                        return successHandler(merchandise[key], false);
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