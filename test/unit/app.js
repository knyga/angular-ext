describe('AppCtrl', function() {
    var scope, createController;

    beforeEach(function() {
        module('App');

        inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();

            createController = function() {
                return $controller('AppCtrl', {
                    '$scope': scope
                });
            };
        })
    });

    it('should have a property from parent', function() {
        var controller = createController();
        expect(scope.parent).toBe('I am parent');
        expect(scope.child).toBe('I am child');
    });
});