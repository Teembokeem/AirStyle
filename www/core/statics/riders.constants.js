(function () {
    'use strict';

    angular
        .module('Statics')
        .constant('Riders', function (inputArg) {
            var riders = {
                    'sthorgren': {
                        name: {
                            first: 'Sven',
                            last: 'Thorgren'
                        },
                        ref: 'sthorgren',
                        img_portrait: 'img/loRiders/Sven-Thorgren.jpg',
                    },
                    'mparrot': {
                        name: {
                            first: 'Max',
                            last: 'Parrot'
                        },
                        ref: 'mparrot',
                        img_portrait: 'img/loRiders/Max-Parrot.jpg',
                    },
                    'sSandbech': {
                        name: {
                            first: 'St\xE5le',
                            last: 'Sandbech'
                        },
                        ref: 'sSandbech',
                        img_portrait: 'img/loRiders/Stale-Sandbech.jpg',
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