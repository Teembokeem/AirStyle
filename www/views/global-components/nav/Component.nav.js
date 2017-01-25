(function() {
    'use strict';
    var dir = "/views/global-components/nav/"
    angular.module('Template')
        .component('nav', {
            templateUrl: dir + 'nav.html',
            controller: NavCtrl,
            controllerAs: 'cc'
        });

    NavCtrl.$inject = ['$scope', '$rootScope', '$state', '$window', '$element', '$stateParams', 'Tours'];

    function NavCtrl($scope, $rootScope, $state, $window, $element, $stateParams, Tours) {

        var cc = this;

        cc.venue = $stateParams.tour ? Tours($stateParams.tour) : null;
        cc.logoHover = false;
        cc.stateChange = stateChange;

        function stateChange(state) {
            $state.go(state);
            cc.venue = null;
            if (cc.mobile && cc.noNav == false) cc.noNav = true;
        }

        _setMenuLayout();
        _handleWindowResize();

        $rootScope.$on('noNav', function(e, d) {
            if ($window.innerWidth <= 600) {
                cc.mobile = true;

                cc.toggleNav()
            } else {
                cc.mobile = false;
                // if (!$scope.$$phase) {
                $scope.$apply(function() {
                    // if (!cc.mobile) {
                    cc.noNav = d;
                    console.log('No Nav Event: ',d);
                    // }
                });
                // }
            }
        });

        $rootScope.$on('darkenNav', function(evt, d) {
            cc.darken = !cc.darken;
        })

        $rootScope.$on('tourStopMenuClose', function(e, d) {
            // console.log(e, d)
            cc.venue = d.tour ? Tours(d.tour) : null
        })

        cc.toggleNav = function() {
            cc.noNav = !cc.noNav;
            if (cc.mobile) {
                // console.log("this")
                $element[0].style.backgroundColor == 'black' ? $element[0].style.backgroundColor = '' : $element[0].style.backgroundColor = 'black';

            }
        };
        cc.showHams = false;

        function _handleWindowResize() {
            angular.element(window).on('resize', function() {
                $scope.$apply(function() {
                    _setMenuLayout();
                    console.log();
                });
            });
        }

        function _setMenuLayout() {
            if ($window.innerWidth < 800) {
                cc.noNav = true;
                cc.mobile = true;
                cc.darken = false;
            } else {
                cc.mobile = false;
            }
        }
    }
})();
