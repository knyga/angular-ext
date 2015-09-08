# angular-ext
Extention to angular that allows to inherit(extend) controllers.

## Installation
### Bower
```bower install --save angular-ext``` or add `angular-ext` to dependencies of your bower.json and do ```bower install```.
Add `angular-ext.js` script after angular.

### Manually
Take file ```angular-ext.js``` from dist folder.
Add `angular-ext.js` script after angular.

## How to use
```javascript
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
        function ($scope) {
            'use strict';
            var parentState = $scope.getState();

            $scope.getState = function() {
                return 'this is not a ' + parentState;
            };
        }
    ]);
```

Controller's ```AppChainCtrl``` scope will be mixedin with the scope of ```AppChainParentCtrl```. You can do multiple inheritences.

###Licence
angular-ext

Copyright (C) 2015  Oleksandr Knyga, oleksandrknyga@gmail.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
