(function () {
    'use strict';

    angular
        .module('Statics')
        .constant('Tours', function (inputArg) {
            var tours = {
                'beijing': {
                    title: 'BEIJING',
                    ref: 'beijing',
                    date_semantic: 'NOV 18 + 19',
                    dest: 'app.tour-stops',
                    video: 'https://www.youtube.com/embed/PhBNiSlcbRk'
                },
                'innsbruck': {
                    title: 'INNSBRUCK',
                    ref: 'innsbruck',
                    date_semantic: 'FEB 3 + 4',
                    dest: 'app.tour-stops',
                    video: 'https://www.youtube.com/embed/PhBNiSlcbRk'
                },
                'la': {
                    title: 'LOS ANGELES',
                    ref: 'la',
                    date_semantic: 'FEB 18 + 19',
                    dest: 'app.tour-stops',
                    video: 'https://www.youtube.com/embed/PhBNiSlcbRk'
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