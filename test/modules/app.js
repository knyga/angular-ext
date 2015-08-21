angular.extModule('App', [])
    .run(['$rootScope', function($rootScope) {

    }]);

angular.extModule('App')
    .extController('AppParentCtrl', ['$scope', function ($scope) {
        'use strict';

        $scope.parent = 'I am parent';
    }
    ]);

angular.extModule('App')
    .extController('AppCtrl', ['AppParentCtrl'], ['$scope',
        function ($scope) {
            'use strict';

            $scope.child = 'I am child';
        }
    ]);
