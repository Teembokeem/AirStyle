(function () {
    'use strict';
    angular.module('Rankings.view.module')
        .component('rankingsList', {
            bindings: {

            },
            templateUrl: 'views/rankings/rankings-list/rankings-list.html',
            controller: rankingsListCtrl,
            controllerAs: 'cc'
        })

    rankingsListCtrl.$inject = ['$log', 'Riders'];

    function rankingsListCtrl($log, Riders) {
        var cc = this;

        cc.currentFilter = 'overall';
        cc.currentYear = '2016';
        cc.filterAthletes = filterAthletes;

        function filterAthletes(param) {
            if (param == 'overall') {
                cc.filterList = cc.filterList.sort(function (a, b) {
                    return b.scores[cc.currentYear].overall - a.scores[cc.currentYear].overall
                });
            }
            else {

                cc.filterList = cc.filterList.sort(function (a, b) {
                    return b.scores[cc.currentYear][param].score - a.scores[cc.currentYear][param].score
                })
            }
            cc.currentFilter = param;
        };

        function chooseOption() {
        }

        cc.$onInit = function () {

            // cc.rankingsListContent = [
            //     {
            //         name: 'Sven Thorgren',
            //         ref: 'sthorgren',
            //         image: '../img/Sven-Thorgren.jpg',
            //         origin: 'Sweden',
            //         scores: {
            //             '2015': {
            //                 overall: '201.76',
            //                 beijing: {
            //                     score: 79.61,
            //                     eventName: 'Beijing'
            //                 },
            //                 innsbruck: {
            //                     score: 62.54,
            //                     eventName: 'Innsbruck'
            //                 },
            //                 la: {
            //                     score: 59.61,
            //                     eventName: 'Los Angeles'
            //                 }
            //             },
            //             '2016': {
            //                 overall: '235.75',
            //                 beijing: {
            //                     eventName: 'beijing',
            //                     score: 84.61
            //                 },
            //                 innsbruck: {
            //                     eventName: 'innsbruck',
            //                     score: 66.54
            //                 },
            //                 la: {
            //                     eventName: 'los angeles',
            //                     score: 84.61
            //                 }
            //             }
            //         },
            //     },
            //     {
            //         name: 'Antoine Truchon',
            //         ref: 'atruchon',
            //         image: '../img/Antoine-Truchon.jpg',
            //         origin: 'Sweden',
            //         scores: {
            //             '2015': {
            //                 overall: '205.54',
            //                 beijing: {
            //                     score: 52.35,
            //                     eventName: 'Beijing'
            //                 },
            //                 innsbruck: {
            //                     score: 48.19,
            //                     eventName: 'Innsbruck'
            //                 },
            //                 la: {
            //                     score: 100.00,
            //                     eventName: 'Los Angeles'
            //                 }
            //             },
            //             '2016': {
            //                 overall: '205.72',
            //                 beijing: {
            //                     eventName: 'beijing',
            //                     score: 42.61
            //                 },
            //                 innsbruck: {
            //                     eventName: 'innsbruck',
            //                     score: 84.79
            //                 },
            //                 la: {
            //                     eventName: 'los angeles',
            //                     score: 78.32
            //                 }
            //             }
            //         },
            //     },
            //     {
            //         name: 'Max Parrot',
            //         ref: 'mparrot',
            //         image: '../img/Max-Parrot.jpg',
            //         origin: 'Sweden',
            //         scores: {
            //             '2015': {
            //                 overall: '238.16',
            //                 beijing: {
            //                     score: 63.47,
            //                     eventName: 'Beijing'
            //                 },
            //                 innsbruck: {
            //                     score: 92.49,
            //                     eventName: 'Innsbruck'
            //                 },
            //                 la: {
            //                     score: 82.20,
            //                     eventName: 'Los Angeles'
            //                 }
            //             },
            //             '2016': {
            //                 overall: '194.31',
            //                 beijing: {
            //                     eventName: 'beijing',
            //                     score: 72.03
            //                 },
            //                 innsbruck: {
            //                     eventName: 'innsbruck',
            //                     score: 78.02
            //                 },
            //                 la: {
            //                     eventName: 'los angeles',
            //                     score: 42.26
            //                 }
            //             }
            //         },
            //     },
            //     {
            //         name: 'Keita Inamura',
            //         ref: 'kinamura',
            //         image: '../img/Keita-Inamura.jpg',
            //         origin: 'Sweden',
            //         scores: {
            //             '2015': {
            //                 overall: '221.40',
            //                 beijing: {
            //                     score: 72.01,
            //                     eventName: 'Beijing'
            //                 },
            //                 innsbruck: {
            //                     score: 69.20,
            //                     eventName: 'Innsbruck'
            //                 },
            //                 la: {
            //                     score: 80.19,
            //                     eventName: 'Los Angeles'
            //                 }
            //             },
            //             '2016': {
            //                 overall: '185.43',
            //                 beijing: {
            //                     eventName: 'beijing',
            //                     score: 66.54
            //                 },
            //                 innsbruck: {
            //                     eventName: 'innsbruck',
            //                     score: 52.35
            //                 },
            //                 la: {
            //                     eventName: 'los angeles',
            //                     score: 66.54
            //                 }
            //             }
            //         },
            //     },
            //     {
            //         name: 'Billy Morgan',
            //         ref: 'bmorgan',
            //         image: '../img/Billy-Morgan.jpg',
            //         scores: {
            //             '2015': {
            //                 overall: '223.29',
            //                 beijing: {
            //                     score: 60.28,
            //                     eventName: 'Beijing'
            //                 },
            //                 innsbruck: {
            //                     score: 95.38,
            //                     eventName: 'Innsbruck'
            //                 },
            //                 la: {
            //                     score: 67.63,
            //                     eventName: 'Los Angeles'
            //                 }
            //             },
            //             '2016': {
            //                 overall: '218.52',
            //                 beijing: {
            //                     eventName: 'beijing',
            //                     score: 78.02
            //                 },
            //                 innsbruck: {
            //                     eventName: 'innsbruck',
            //                     score: 58.16
            //                 },
            //                 la: {
            //                     eventName: 'los angeles',
            //                     score: 82.34
            //                 }
            //             }
            //         },
            //     },
            //     {
            //         name: 'Torgeir Bergrem',
            //         ref: 'tbergrem',
            //         image: '../img/Torgeir-Bergrem.jpg',
            //         origin: 'Sweden',
            //         scores: {
            //             '2015': {
            //                 overall: '215.79',
            //                 beijing: {
            //                     score: 49.77,
            //                     eventName: 'Beijing'
            //                 },
            //                 innsbruck: {
            //                     score: 83.29,
            //                     eventName: 'Innsbruck'
            //                 },
            //                 la: {
            //                     score: 82.73,
            //                     eventName: 'Los Angeles'
            //                 }
            //             },
            //             '2016': {
            //                 overall: '169.90',
            //                 beijing: {
            //                     eventName: 'beijing',
            //                     score: 91.89
            //                 },
            //                 innsbruck: {
            //                     eventName: 'innsbruck',
            //                     score: 44.26
            //                 },
            //                 la: {
            //                     eventName: 'los angeles',
            //                     score: 33.45
            //                 }
            //             }
            //         },
            //     }
            // ]


            cc.rankingsListContent = Riders('all');
            calculateTotals(cc.rankingsListContent);
            console.log('sah dude', cc.rankingsListCtrl);
        }

        function calculateTotals(arr) {
            arr.forEach(function (rider) {
                console.log(rider)
                Object.keys(rider.scores).forEach(function (year) {
                    var total = 0;
                    Object.keys(rider.scores[year]).forEach(function (city) {
                        // console.log(rider.scores[year][city].score, city, year)
                        // console.log(rider[scores][year][city])
                        if (rider.scores[year][city].score != 'N/A') total += parseInt(rider.scores[year][city].score);
                        console.log("updated total?", total);
                    });
                    rider.scores[year].overall = total;
                });
            });
        };
    }
})();