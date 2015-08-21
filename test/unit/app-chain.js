describe('AppChainCtrl', function() {
    var scope, createController;

    beforeEach(function() {
        module('AppChain');

        inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();

            createController = function() {
                return $controller('AppChainCtrl', {
                    '$scope': scope
                });
            };
        });
    });

    it('should have a property from parent', function() {
        var controller = createController();
        expect(scope.getState()).toBe('this is not a parent');
    });
});