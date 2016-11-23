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

    rankingsListCtrl.$inject = ['$log'];

    function rankingsListCtrl($log) {
        var cc = this;
        cc.filterAthletes = filterAthletes;

        function filterAthletes(param) {
            if (param == 'overall') {
                cc.filterList = cc.filterList.sort(function (a, b) {
                    return b.overall - a.overall
                })
            }
            else {
                var indexObj = cc.filterList[0].scores.filter(function (score) {
                    return score.event == param
                })[0];

                var index = cc.filterList[0].scores.indexOf(indexObj);

                cc.filterList = cc.filterList.sort(function (a, b) {
                    return b.scores[index].score - a.scores[index].score
                })
            }
        };

        cc.$onInit = function () {

            cc.rankingsListContent = [
                {
                    name: 'Sven Thorgren',
                    ref: 'sthorgren',
                    image: '../img/Sven-Thorgren.jpg',
                    origin: 'Sweden',
                    scores: [
                        {
                            event: 'beijing',
                            score: 84.61
                        },
                        {
                            event: 'innsbruck',
                            score: 66.54
                        },
                        {
                            event: 'los angeles',
                            score: 84.61
                        }
                    ],
                    overall: '235.75'
                },
                {
                    name: 'Antoine Truchon',
                    ref: 'atruchon',
                    image: '../img/Antoine-Truchon.jpg',
                    origin: 'Sweden',
                    scores: [
                        {
                            event: 'beijing',
                            score: 52.35
                        },
                        {
                            event: 'innsbruck',
                            score: 48.19
                        },
                        {
                            event: 'los angeles',
                            score: 100.00
                        }
                    ],
                    overall: '200.54'
                },
                {
                    name: 'Max Parrot',
                    ref: 'mparrot',
                    image: '../img/Max-Parrot.jpg',
                    origin: 'Sweden',
                    scores: [
                        {
                            event: 'beijing',
                            score: 72.03
                        },
                        {
                            event: 'innsbruck',
                            score: 78.02
                        },
                        {
                            event: 'los angeles',
                            score: 42.26
                        }
                    ],
                    overall: '194.31'
                },
                {
                    name: 'Keita Inamura',
                    ref: 'kinamura',
                    image: '../img/Keita-Inamura.jpg',
                    origin: 'Sweden',
                    scores: [
                        {
                            event: 'beijing',
                            score: 66.54
                        },
                        {
                            event: 'innsbruck',
                            score: 52.35
                        },
                        {
                            event: 'los angeles',
                            score: 66.54
                        }
                    ],
                    overall: '185.43'
                },
                {
                    name: 'Billy Morgan',
                    ref: 'bmorgan',
                    image: '../img/Billy-Morgan.jpg',
                    scores: [
                        {
                            event: 'beijing',
                            score: 78.02
                        },
                        {
                            event: 'innsbruck',
                            score: 5.72
                        },
                        {
                            event: 'los angeles',
                            score: 100.00
                        }
                    ],
                    overall: '183.74'
                },
                {
                    name: 'Torgeir Bergrem',
                    ref: 'tbergrem',
                    image: '../img/Torgeir-Bergrem.jpg',
                    origin: 'Sweden',
                    scores: [
                        {
                            event: 'beijing',
                            score: 91.89
                        },
                        {
                            event: 'innsbruck',
                            score: 44.26
                        },
                        {
                            event: 'los angeles',
                            score: 33.45
                        }
                    ],
                    overall: '169.90'
                }
            ]

            cc.filterList = cc.rankingsListContent;
        }
    }
})();