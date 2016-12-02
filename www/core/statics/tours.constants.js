(function() {
    'use strict';

    angular
        .module('Statics')
        .constant('Tours', function(toursArg) {
            var tours = {
                'beijing': {
                    title: 'BEIJING',
                    ref: 'beijing',
                    date_semantic: 'NOV 18 + 19',
                    dest: 'app.tour-stops'
                },
                'innsbruck': {
                    title: 'INNSBRUCK',
                    ref: 'innsbruck',
                    date_semantic: 'FEB 3 + 4',
                    dest: 'app.tour-stops'
                },
                'la': {
                    title: 'LOS ANGELES',
                    ref: 'la',
                    date_semantic: 'FEB 18 + 19',
                    dest: 'app.tour-stops'
                }
            },
                toursKeys = Object.keys(tours),
                constantIdentifier = 'tours';

 
            return locate(toursArg, successHandler, errorHandler);

            function locate(arg, success, error) {
                var key = arg != undefined ? returnOne(arg) : 'all';

                switch (key) {
                    case 'all': 
                        return success(tours);
                        break;
                    case null || undefined:
                        return error(arg);                        
                        break;
                    default: 
                        return success(tours[key]);
                        break;
                };
            };

            function returnOne(queryKey) {
                return toursKeys.filter(function(key) {
                    return queryKey == key;
                })[0];
            }

            function errorHandler(failedArg) {
                console.info('could not find matching key for ' + constantIdentifier + ': ');
                console.log('Argument: ', failedArg);
                console.log('Available Tours: ')
                toursKeys.forEach(function(tour, index) {
                    console.log(index + 1 + '. ' + tour)
                });
                return new Error();
            }

            function successHandler(asset) {
                return asset;
            }
        });
})();