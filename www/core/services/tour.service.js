(function () {
    'use strict';
    angular
        .module('Services')
        .factory('tourService', tour);

    tour.$inject = ['urlService', '$timeout', '$q', '$http'];
    function tour(urlService, $timeout, $q, $http) {
        var service = {
            getTourStop: getTourStop
        };

        return service;

        ////////////////
        function getTourStop(location) {
            var deferred = $q.defer();
            $http.get(urlService.api + '/tour/' + location)
                .then(function (res) {
                    deferred.resolve(res);
                }, function (err) {
                    deferred.reject(err)
                })
            return deferred.promise;
        }
    }
})();
