angular.module('BoozeBot-cms')

    .controller('AppCtrl', function ($scope, $state, $rootScope, $log) {
        console.log('Loaded!');
        // Manager.getBooms().then(function(data) {
        //   console.log('DATA', data);
        // })

        // $scope.$on()

        var vm = this;

        $rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams) {
            // $rootScope.contentTitle = ;
            vm.contentTitle = toState.name
            console.log("your root scope", $rootScope.contentTitle)

            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                event.preventDefault();
            })
        })

        vm.orders = [
            {
                name: 'Ben',
                total: 35.00,
                status: "PD"
            },
            {
                name: 'Adam',
                total: 35.00,
                status: "AS"
            },
            {
                name: 'Craig',
                total: 35.00,
                status: "AC"
            },
            {
                name: 'Ben',
                total: 35.00,
                status: "PD"
            },
            {
                name: 'Adam',
                total: 35.00,
                status: "IP"
            },
            {
                name: 'Craig',
                total: 35.00,
                status: "CP"
            }
        ]

    });
