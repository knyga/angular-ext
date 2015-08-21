angular.extModule('AppChain', [])
    .run(['$rootScope', function($rootScope) {

    }])
    .extController('AppChainParentCtrl', ['$scope', function ($scope) {
        'use strict';

        $scope.getState = function() {
            return 'parent';
        };
    }])
    .extController('AppChainCtrl', ['AppChainParentCtrl'], ['$scope',
        function ($scope, $state, $stateParams, formMenuItems) {
            'use strict';
            var parentState = $scope.getState();

            $scope.getState = function() {
                return 'this is not a ' + parentState;
            };
        }
    ]);
