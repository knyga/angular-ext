(function() {
    var getFunctionArguments = function(fn) {
        return fn.toString()
            .replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s))/mg,'')
            .match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1]
            .split(/,/);
    };

    angular.extModule = function() {
        var module = angular.module.apply(this, arguments);
        module.extController = function(name, extdNames, params) {
            if(typeof params === "undefined") {
                params = extdNames;
                extdNames = [];
            }

            var executor = params[params.length-1];
            params.splice(params.length-1, 0, '$controller');
            params[params.length-1] = function() {
                var $controller = arguments[arguments.length-1];
                var argNames = getFunctionArguments(executor);
                var argsMap = {};

                for(var i = 0; i < argNames.length; i++) {
                    argsMap[argNames[i]] = arguments[i];
                }

                for(i = 0; i < extdNames.length; i++) {
                    angular.extend(this, $controller(extdNames[i], argsMap));
                }

                executor.apply(this, arguments);
            };

            return module.controller.call(this, name, params);
        };

        return module;
    };
})();