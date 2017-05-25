var _riders,_years=[],_location,_year;
(function () {
    'use strict';
    angular.module('TourStops.view.module')
        .component('rankings', {
            bindings: {
                riders:'=',
                years:'=',
                location:'='
            },
            templateUrl: 'views/tour-stops/tour-rankings/rankings.view.html',
            controller: rankingsCtrl,
            controllerAs: 'cc'
        })

    rankingsCtrl.$inject = ['$log', '$state', '$stateParams', 'Riders'];

    function rankingsCtrl($log, $state, $stateParams, Riders) {
        var cc = this;

        cc.borderButtonHover = false;
        cc.stateChange = stateChange;

        function stateChange(state, val) {
            val ? $state.go(state, {
                avatar: val
            }) : $state.go(state);
        }

        cc.$onInit = function () {
            _years = cc.years.split('-');
            _location = cc.location;
            _year = parseInt(_years[0]);



            // console.log(cc.riders);
            _riders = cc.riders;
            _.map(_riders,function(e,k) {
            e.scores = _.filter(e.scores,function(item,index) {
                    if(item.year >= _year){
                        return item
                    }
                })
            })

            // console.log(_riders);
            var sortedRiders = _riders.sort(function (a, b) {
                return b.scores[0][_location] - a.scores[0][_location]
            });

            // console.log(sortedRiders);

            // var riders = cc.riders;
            // var sortedRiders = riders.filter(function (rider) {
            //     console.log(rider.scores['2017'].la.score_trick)
            //     return rider.scores['2017'] ? rider.scores['2017'].la.score_trick != null || undefined : false;
            // });
            //
            // console.log(sortedRiders)
            // sortedRiders = sortedRiders.sort(function (a, b) {
            //     return b.scores['2017'].la.score_trick - a.scores['2017'].la.score_trick
            // });
            // _riders = cc.riders;
            cc.laRankingsList = sortedRiders;
        }
    }
})();
