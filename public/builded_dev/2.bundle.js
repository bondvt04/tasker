webpackJsonp([2,4],{

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./notes/index.js": 3,
		"./tasks/index.js": 169
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @class NotesModule
	 */
	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Module = (function () {
	    function Module(options) {
	        _classCallCheck(this, Module);
	    }

	    _createClass(Module, [{
	        key: "init",
	        value: function init() {
	            var self = this;
	            var promises = arguments;

	            var promise = new Promise(function (resolve, reject) {
	                Promise.all(promises).then(function (arrayOfResults) {
	                    var router = arrayOfResults[0];
	                    console.log("> NotesModule.init()");
	                    resolve(self);
	                }, function (err) {
	                    reject(err);
	                });
	            });

	            return promise;
	        }
	    }]);

	    return Module;
	})();

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    var instance;
	    var promises = arguments;
	    //console.log("^^^", promises);

	    return (function () {
	        var _ref;

	        // fill init function with arguments as is (not as array)
	        return instance = instance || (_ref = new Module()).init.apply(_ref, _toConsumableArray(Array.prototype.slice.call(promises)));
	    })();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/*define([
	    "../../../../test12-dojo/bower_components/dojo/_base/declare",
	    //"../test15-try-to-do-client/modules/notes/hello.jsd"

	    "./controllers/index",
	    "./routers/index"



	    //baseUrl+"controllers/index.js",


	    //"./routers/index.js"
	], function(declare, controllerClass, routerClass){

	    //require([ "./hello.js" ], function(hello){
	    //    console.log("hello");
	    //});

	    var moduleClass = declare(null, {
	        /**
	         * @todo inits via promises
	         *
	        init : function(mainRouter, mainNetwork) {
	            var controller = new controllerClass();
	            var router = new routerClass();

	            if(controller && controller.init && "function" === typeof controller.init) {
	                var controllerReadyPromise = controller.init.bind(controller)(mainRouter, mainNetwork);
	            }

	            controllerReadyPromise.then(function(result) {
	                if(router && router.init && "function" === typeof router.init) {
	                    router.init.bind(router)(mainRouter, mainNetwork, controller);
	                }

	                console.log("init notes controller");
	            }, function(err) {
	                console.error(err);
	            });

	            console.log("init notes module");
	        }
	    });

	    return moduleClass;
	});*/

	//this.model = options.model;

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @class NotesRouter
	 */
	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Router = (function () {
	    function Router(options) {
	        _classCallCheck(this, Router);
	    }

	    _createClass(Router, [{
	        key: "init",
	        value: function init() {
	            var self = this;
	            var promises = arguments;

	            var promise = new Promise(function (resolve, reject) {

	                Promise.all(promises).then(function (arrayOfResults) {
	                    var mainRouter = arrayOfResults[0];
	                    var controller = arrayOfResults[1];

	                    mainRouter.add("notes(/)", function (params, complete) {
	                        controller.doAction("index", arguments);
	                    });
	                    mainRouter.add("notes/add", function (params, complete) {
	                        controller.doAction("add", arguments);
	                    });
	                    mainRouter.add("notes/addffff", function (params, complete) {
	                        controller.doAction("addffff", arguments);
	                    });
	                    mainRouter.add("notes/addfff", function (params, complete) {
	                        controller.doAction("addfff", arguments);
	                    });

	                    //mainRouter.add("notes/lol1", function(params, complete) {
	                    //    console.log("**", arguments);
	                    //    complete();
	                    //});

	                    mainRouter.add("notes/lol2", function () {
	                        console.log("**opa", arguments);

	                        // ^notes\/lol2(?:\?*([^/]*))
	                        // notes/lol22222?hello=world
	                    });

	                    console.log("> NotesRouter.init()");

	                    resolve(self);
	                }, function (err) {
	                    reject(err);
	                });
	            });

	            return promise;
	        }
	    }]);

	    return Router;
	})();

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    var instance;
	    var promises = arguments;
	    //console.log("^^^", promises);

	    return (function () {
	        var _ref;

	        // fill init function with arguments as is (not as array)
	        return instance = instance || (_ref = new Router()).init.apply(_ref, _toConsumableArray(Array.prototype.slice.call(promises)));
	    })();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	//define([
	//    "../../../../../test12-dojo/bower_components/dojo/_base/declare"
	//], function(declare){
	//    var routerClass = declare(null, {
	//
	//        _controller : null,
	//
	//        _routes : {
	//
	//            //"/notes": function () {
	//            //    //console.log("> route /notes");
	//            //},
	//            //"/notes/add" : function() {
	//            //    //console.log("> route /notes/add");
	//            //}
	//        },
	//
	//        init : function(mainRouter, mainNetwork, controller) {
	//            try {
	//                mainRouter.addRoutes({
	//                    "/notes": {callback: controller.actions.index, context: controller},
	//                    "/notes/add": {callback: controller.actions.add, context: controller}
	//                })
	//            } catch(e) {
	//                console.error(e);
	//            }
	//
	//            console.log("init notes router");
	//        }
	//    });
	//
	//    return routerClass;
	//});

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Router = (function () {
	    function Router(options) {
	        _classCallCheck(this, Router);
	    }

	    _createClass(Router, [{
	        key: "init",
	        value: function init(routerEngine) {
	            var self = this;
	            var promise = new Promise(function (resolve, reject) {
	                if (true) {
	                    var router = self._routerEngine = routerEngine;

	                    router.config({
	                        mode: "hash",
	                        keys: true
	                        //root: "/"
	                    });

	                    console.log("> !mainRouter.init()");
	                    resolve(self._routerEngine);
	                } else {
	                    reject(new Error("Error while router.init"));
	                }
	            });

	            return promise;
	        }

	        //getRouterEngine() {
	        //    return this._routerEngine;
	        //}

	    }]);

	    return Router;
	})();

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	//"../../../lib/router.js/router-amd.js"
	__webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (RADRouter) {
	    var instance;

	    return (function () {
	        return instance = instance || new Router().init(RADRouter);
	    })();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/*define([
	    //"dojo/_base/declare",
	    //"dojo/router",
	    //"dojo/topic",
	    //"dojo/hash"
	], function(router, topic, hash){
	    var Router = function() {
	        console.log("> Router");
	    }

	    return Router;

	    /*var routerClass = declare(null, {

	        _currentHash : null,

	        _currentRoute : null,

	        _routes : {},

	        addRoutes : function(routes) {
	            if(routes) {
	                for (var routeName in routes) {
	                    this._routes[routeName] = routes[routeName];
	                }
	            }

	            // check only new routes
	            this.checkRoutesAndRunIfMatch(routes);
	        },

	        checkRoutesAndRunIfMatch : function(routes) {
	            var routesToCheck = routes || this._routes;

	            this._currentHash = hash();

	            if(!this._currentHash) {
	                hash("/");
	                this._currentHash = "/"
	            }

	            if(routesToCheck) {
	                for(var routeName in routesToCheck) {
	                    if(this._currentHash === routeName) {
	                        this._currentRoute = {
	                            name: routeName,
	                            callback: this._routes[routeName].callback,
	                            context: this._routes[routeName].context
	                        };

	                        // run callback
	                        //this._currentRoute.callback();
	                        this._currentRoute.callback.apply(this._currentRoute.context);

	                    }
	                }
	            }
	        },

	        init : function() {
	            var self = this;
	            var promise = new Promise(function(resolve, reject) {

	                //router.register("/user/:id", function (event) {
	                //    console.log("Hash change", event.params.id);
	                //});

	                //console.log(hash());

	                topic.subscribe("/dojo/hashchange", function(changedHash){
	                    self.checkRoutesAndRunIfMatch();
	                });

	                self.checkRoutesAndRunIfMatch();

	                //router.go("hash");
	                //hash("someURL");

	                if (true) {
	                    resolve(self);
	                } else {
	                    reject(new Error("Error while router.init"));
	                }
	            });

	            return promise;
	        }
	    });

	    return routerClass;
	});*/

	//this.model = options.model;

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require, exports, module);
	    } else {
	        root.Router = factory();
	    }
	})(undefined, function (require, exports, module) {

	    var _ALLOWED_MODES = ['node', 'hash', 'history'];
	    var _DEFAULT_OPTIONS = { mode: 'node', keys: true, root: '/', rerouting: true };

	    // parse regular expression
	    var _OPTIONAL_PARAM = /\((.*?)\)/g;
	    var _NAMED_PARAM = /(\(\?)?:\w+/g;
	    var _SPLAT_PARAM = /\*\w+/g;
	    var _ESCAPE_REG_EXP = /[\-{}\[\]+?.,\\\^$|#\s]/g;
	    var _DEFAULT_ROUTE = /.*/;

	    var _FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
	    var _STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

	    function _getRouteKeys(string) {
	        var keys = string.match(/:([^\/]+)/g);
	        for (var i = 0, l = keys ? keys.length : 0; i < l; i += 1) {
	            keys[i] = keys[i].replace(/[:\(\)]/g, '');
	        }
	        return keys;
	    }

	    function _routeToRegExp(route) {
	        route = route.replace(_ESCAPE_REG_EXP, '\\$&').replace(_OPTIONAL_PARAM, '(?:$1)?').replace(_NAMED_PARAM, function (match, optional) {
	            return optional ? match : '([^/?]+)';
	        }).replace(_SPLAT_PARAM, '([^?]*)');

	        console.log('*****', '^' + route + '(?:\\?*([^/]*))');
	        //return new RegExp('^' + route + '(?:\\?*([^/]*))');
	        return new RegExp('^' + route + '(?:\\?([^/]*))?$');
	    }

	    function _clearSlashes(path) {
	        return path.toString().replace(/\/$/, '').replace(/^\//, '');
	    }

	    function _extractParameters(route, fragment) {
	        var params = route.exec(fragment).slice(1);

	        return params.map(function (param, i) {
	            if (i === params.length - 1) return param || null;
	            return param ? decodeURIComponent(param) : null;
	        });
	    }

	    function _parseQuery(qstr) {
	        var query, params, pair;
	        if (typeof qstr === 'string') {
	            query = {};
	            params = qstr.split('&');
	            for (var i = 0; params, i < params.length; i++) {
	                pair = params[i].split('=');
	                query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	            }
	        }
	        return query;
	    }

	    function _prepareArguments(parameters, keys) {
	        var wrapper = {},
	            lastIndex = parameters.length - 1,
	            query = parameters[lastIndex];

	        if (keys && keys.length > 0) {
	            for (var i = 0; i < keys.length; i += 1) {
	                wrapper[keys[i]] = parameters[i];
	            }
	            if (parameters[i]) {
	                wrapper.query = _parseQuery(parameters[i]);
	            }
	            parameters = [wrapper];
	        } else if (query && query.indexOf('=') > -1) {
	            parameters[lastIndex] = _parseQuery(query);
	        }

	        return parameters;
	    }

	    function _asyncDetect(fn) {
	        var result = null,
	            args;

	        args = fn.toString().replace(_STRIP_COMMENTS, '').match(_FN_ARGS)[1];
	        if (args && args.length > 0) {
	            args.split(',').forEach(function (item, index) {
	                if (item.trim() === 'complete') {
	                    result = index;
	                }
	            });
	        }

	        return result;
	    }

	    function RoutingLevel() {
	        this._routes = [];
	        this._options = JSON.parse(JSON.stringify(_DEFAULT_OPTIONS));
	    }

	    RoutingLevel.prototype.add = function (path, callback, options) {
	        var keys, re;

	        if (typeof path == 'function') {
	            options = callback;
	            callback = path;
	            re = _DEFAULT_ROUTE;
	        } else {
	            keys = _getRouteKeys(path);
	            re = _routeToRegExp(path);
	        }

	        this._routes.push({
	            async: options && typeof options.async === 'number' ? options.async : _asyncDetect(callback),
	            path: re,
	            callback: callback,
	            keys: keys,
	            alias: options && options.alias ? options.alias : path,
	            facade: null
	        });

	        // sort DESC by path length
	        this._routes.sort(function (a, b) {
	            return b.alias.length - a.alias.length;
	        });

	        return this;
	    };

	    RoutingLevel.prototype.remove = function (alias) {
	        for (var i = this._routes.length - 1, r; i > -1, r = this._routes[i]; i -= 1) {
	            if (alias === r.alias || alias === r.callback || alias.toString() === r.path.toString()) {
	                this._routes.splice(i, 1);
	            } else if (r._routes.length > 0) {
	                for (var j = r._routes.length - 1; j > -1; j -= 1) {
	                    r._routes[j].remove(alias);
	                }
	            }
	        }

	        return this;
	    };

	    RoutingLevel.prototype.check = function (fragment, array, lastURL) {
	        var match, node, route, params, should;

	        for (var i = 0; i < this._routes.length, route = this._routes[i]; i++) {
	            match = fragment.match(route.path);
	            if (match) {
	                params = _extractParameters(route.path, fragment);
	                keys = this._options.keys ? route.keys : null;
	                params = _prepareArguments(params, keys);
	                should = fragment.slice(0, match[0].length) !== lastURL.slice(0, match[0].length);

	                node = {
	                    callback: route.callback,
	                    params: params,
	                    routes: [],
	                    async: route.async,
	                    rootRerouting: this._options.rerouting || should
	                };
	                array.push(node);

	                if (route.facade) {
	                    fragment = fragment.slice(match[0].length, fragment.length);
	                    lastURL = lastURL.slice(match[0].length, lastURL.length);
	                    route.facade.check(fragment, node.routes, lastURL);
	                }
	                break;
	            }
	        }

	        return array;
	    };

	    RoutingLevel.prototype.drop = function () {
	        this._routes = [];
	        this.config(_DEFAULT_OPTIONS);

	        return this;
	    };

	    RoutingLevel.prototype.config = function (options) {
	        if (typeof options === 'object') {
	            this._options.keys = typeof options.keys === 'boolean' ? options.keys : this._options.keys;
	            this._options.mode = _ALLOWED_MODES.indexOf(options.mode) !== -1 ? options.mode : this._options.mode;
	            this._options.root = options.root ? '/' + _clearSlashes(options.root) + '/' : this._options.root;
	            this._options.rerouting = typeof options.rerouting === 'boolean' ? options.rerouting : this._options.rerouting;
	        }

	        return this;
	    };

	    RoutingLevel.prototype.to = function (alias) {
	        var subrouter, route;
	        for (var i = 0; i < this._routes.length, route = this._routes[i]; i += 1) {
	            if (alias === route.alias) {
	                subrouter = route.facade;
	                if (!subrouter) {
	                    route.facade = subrouter = new RoutingLevel().config(this._options);
	                }
	            }
	        }

	        return subrouter;
	    };

	    var Router = (function (facade) {
	        var router = {},
	            lastURL = '',
	            rollback = false;

	        function applyNested(routes) {
	            return function (param) {
	                if (param === false) {
	                    rollback = true;
	                    router.navigate(lastURL);
	                } else if (typeof param === 'string') {
	                    router.route(param);
	                } else if (routes && routes.length) apply(routes);
	            };
	        }

	        function apply(routes) {
	            var falseToReject;

	            if (routes) for (var i = 0, route; i < routes.length, route = routes[i]; i += 1) {
	                //debugger;
	                if (typeof route.async === 'number') {
	                    route.params.splice(route.async, 0, applyNested(route.routes));
	                }
	                if (route.rootRerouting) {
	                    //console.log("*****", route.params);
	                    falseToReject = route.callback.apply(null, route.params);
	                }
	                if (typeof route.async !== 'number') {
	                    applyNested(route.routes)(falseToReject);
	                }
	            }
	        }

	        router.drop = function () {
	            lastURL = '';
	            return facade.drop();
	        };

	        router.listen = function () {
	            var self = this,
	                current = this.getCurrent();

	            clearInterval(this._interval);
	            this._interval = setInterval(function () {
	                var location = router.getCurrent();
	                if (current !== location) {
	                    current = location;
	                    self.check(self.getCurrent());
	                }
	            }, 50);

	            window.onpopstate = function (e) {
	                if (e.state !== null && e.state !== undefined) {
	                    clearInterval(self._interval);
	                    self.check(self.getCurrent());
	                }
	            };
	        };

	        router.check = function (path) {
	            apply(facade.check(path, [], lastURL));
	            return facade;
	        };

	        router.navigate = function (path) {
	            var mode = facade._options.mode;
	            switch (mode) {
	                case 'history':
	                    history.pushState(null, null, root + _clearSlashes(path));
	                    break;
	                case 'hash':
	                    window.location.href.match(/#(.*)$/);
	                    window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
	                    break;
	                case 'node':
	                    lastURL = path;
	                    break;
	            }
	            return facade;
	        };

	        router.route = function (path) {
	            if (facade._options.mode === 'node') this.check(path);
	            if (!rollback) this.navigate(path);
	            rollback = false;

	            return facade;
	        };

	        router.config = function (options) {
	            return facade.config(options);
	        };

	        router.to = function (alias) {
	            return facade.to(alias);
	        };

	        router.add = function (path, callback, alias) {
	            return facade.add(path, callback, alias);
	        };

	        router.remove = function (alias) {
	            return facade.remove(alias);
	        };

	        router.getCurrent = function () {
	            var mode = facade._options.mode,
	                root = facade._options.root,
	                fragment = lastURL;
	            if (mode === 'history') {
	                fragment = _clearSlashes(decodeURI(location.pathname + location.search));
	                fragment = fragment.replace(/\?(.*)$/, '');
	                fragment = root !== '/' ? fragment.replace(root, '') : fragment;
	                fragment = _clearSlashes(fragment);
	            } else if (mode === 'hash') {
	                var match = window.location.href.match(/#(.*)$/);
	                fragment = match ? match[1] : '';
	                fragment = _clearSlashes(fragment);
	            }

	            return fragment;
	        };

	        return router;
	    })(new RoutingLevel());
	    return Router;
	});

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @class NotesIndexController
	 * @todo lazy load of models etc
	 */
	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controller = (function () {
	    function Controller() {
	        _classCallCheck(this, Controller);
	    }

	    _createClass(Controller, [{
	        key: "init",
	        value: function init() {
	            var self = this;
	            var promises = arguments;

	            var promise = new Promise(function (resolve, reject) {

	                Promise.all(promises).then(function (arrayOfResults) {
	                    var network = arrayOfResults[0];
	                    var noteModel = self._noteModel = arrayOfResults[1];

	                    console.log("> NotesIndexController.init()");

	                    resolve(self);
	                }, function (err) {
	                    reject(err);
	                });
	            });

	            return promise;
	        }
	    }, {
	        key: "__beforeAction",
	        value: function __beforeAction() {}
	    }, {
	        key: "__afterAction",
	        value: function __afterAction(routerComplete) {
	            routerComplete();
	        }
	    }, {
	        key: "doAction",
	        value: function doAction(actionName, args) {
	            var functionName = "_" + actionName + "Action";

	            if (this[functionName] && "function" === typeof this[functionName]) {
	                this.__beforeAction();

	                // fill with arguments as is (not as array)
	                this[functionName].apply(this, _toConsumableArray(Array.prototype.slice.call(args)));
	                this.__afterAction(args[1]);
	            }
	        }
	    }, {
	        key: "_indexAction",
	        value: function _indexAction(routerParams, routerComplete) {
	            console.log("* notes.controller.index");

	            var model = {
	                models: [{ text: "hello" }, { text: "world" }]
	            };

	            var data = {
	                model: model
	            };

	            //var React = require('react');
	            //var Hello = require('../views/components/notes-list.jsx');
	            //
	            //setTimeout(function() {
	            //    React.render(<Hello />, document.getElementById('content'));
	            //}, 5000);

	            __webpack_require__.e/* require */(3, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(11), __webpack_require__(12), __webpack_require__(168)]; (function (ejsRender, React, NotesListReactComponent) {
	                var html = ejsRender(data);
	                document.getElementById("content").innerHTML = html;

	                React.render(React.createElement(NotesListReactComponent, { src: "http://jscoderetreat.com/img/why-js.png", caption: "New York!" }), document.getElementById("notes-list-container"));
	            }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	        }
	    }]);

	    return Controller;
	})();

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(8), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (network, model) {
	    var instance;
	    var promises = arguments;
	    //console.log("^^^", promises);

	    return (function () {
	        var _ref;

	        // fill init function with arguments as is (not as array)
	        return instance = instance || (_ref = new Controller()).init.apply(_ref, _toConsumableArray(Array.prototype.slice.call(promises)));
	    })();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	//define([
	//
	//], function(){
	//
	//    var controllerClass = declare(null, {
	//        /**
	//         * Adding webcomponents, needed for this controller's views
	//         * @private
	//         */
	//        _loadViewComponents : function() {
	//            window.appendLinkToHead("modules/notes/views/webcomponents/note.html");
	//        },
	//
	//        _beforeAction : function() {
	//            this._loadViewComponents();
	//        },
	//
	//        _afterAction : function() {
	//
	//        },
	//
	//        init : function() {
	//            //debugger;
	//            var self = this;
	//            var promise = new Promise(function(resolve, reject) {
	//
	//                if (true) {
	//                    resolve(self);
	//                } else {
	//                    reject(new Error("Error while notes.controller.init"));
	//                }
	//            });
	//
	//            return promise;
	//        },
	//
	//        actions : {
	//
	//            index : function() {
	//                this._beforeAction();
	//                console.log(">> notes.controller.actions.index");
	//
	//                data = {
	//                    notes : [
	//                        {text : "hello"},
	//                        {text : "world"},
	//                        {text : "lol"}
	//                    ]
	//                }
	//
	//                html = new EJS({url: '/modules/notes/views/index/index.ejs'}).render(data);
	//                document.getElementById("content").innerHTML = html;
	//
	//                this._afterAction();
	//            },
	//
	//            add : function() {
	//                this._beforeAction();
	//                console.log(">> notes.controller.actions.add");
	//                this._afterAction();
	//            }
	//        }
	//    });
	//
	//    return controllerClass;
	//});

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @class NotesNetwork
	 */
	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Network = (function () {
	    function Network(options) {
	        _classCallCheck(this, Network);
	    }

	    _createClass(Network, [{
	        key: "init",
	        value: function init() {
	            var self = this;
	            var promises = arguments;

	            var promise = new Promise(function (resolve, reject) {
	                Promise.all(promises).then(function (arrayOfResults) {
	                    console.log("> NotesNetwork.init()");
	                    resolve(self);
	                }, function (err) {
	                    reject(err);
	                });
	            });

	            return promise;
	        }
	    }]);

	    return Network;
	})();

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    var instance;
	    var promises = arguments;
	    //console.log("^^^", promises);

	    return (function () {
	        var _ref;

	        // fill init function with arguments as is (not as array)
	        return instance = instance || (_ref = new Network()).init.apply(_ref, _toConsumableArray(Array.prototype.slice.call(promises)));
	    })();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	//define([
	//    "../../../../../test12-dojo/bower_components/dojo/_base/declare"
	//], function(declare){
	//    var routerClass = declare(null, {
	//
	//        _controller : null,
	//
	//        _routes : {
	//
	//            //"/notes": function () {
	//            //    //console.log("> route /notes");
	//            //},
	//            //"/notes/add" : function() {
	//            //    //console.log("> route /notes/add");
	//            //}
	//        },
	//
	//        init : function(mainRouter, mainNetwork, controller) {
	//            try {
	//                mainRouter.addRoutes({
	//                    "/notes": {callback: controller.actions.index, context: controller},
	//                    "/notes/add": {callback: controller.actions.add, context: controller}
	//                })
	//            } catch(e) {
	//                console.error(e);
	//            }
	//
	//            console.log("init notes router");
	//        }
	//    });
	//
	//    return routerClass;
	//});

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Network = (function () {
	    function Network(options) {
	        _classCallCheck(this, Network);
	    }

	    _createClass(Network, [{
	        key: "init",
	        value: function init() {
	            var self = this;
	            var promise = new Promise(function (resolve, reject) {

	                console.log("> !mainNetwork.init()");

	                if (true) {
	                    resolve(self);
	                } else {
	                    reject(new Error("Error while network.init"));
	                }
	            });

	            return promise;
	        }
	    }]);

	    return Network;
	})();

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    var instance;
	    var promises = arguments;
	    //console.log("^^^", promises);

	    return (function () {
	        var _ref;

	        // fill init function with arguments as is (not as array)
	        return instance = instance || (_ref = new Network()).init.apply(_ref, _toConsumableArray(Array.prototype.slice.call(promises)));
	    })();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	//this.model = options.model;

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * NoteModel
	 */
	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = (function () {
	    function Model() {
	        _classCallCheck(this, Model);
	    }

	    _createClass(Model, [{
	        key: "init",
	        value: function init() {
	            var self = this;
	            var promise = new Promise(function (resolve, reject) {

	                self.resetToDefaults();
	                console.log("> Notes.NoteModel.init()");

	                if (true) {
	                    resolve(self);
	                } else {
	                    reject(new Error("Error while model.init"));
	                }
	            });

	            return promise;
	        }
	    }, {
	        key: "resetToDefaults",
	        value: function resetToDefaults() {
	            this._text = "";
	        }
	    }]);

	    return Model;
	})();

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    var instance;
	    var promises = arguments;
	    //console.log("^^^", promises);

	    return (function () {
	        var _ref;

	        // fill init function with arguments as is (not as array)
	        return instance = instance || (_ref = new Model()).init.apply(_ref, _toConsumableArray(Array.prototype.slice.call(promises)));
	    })();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @class TasksModule
	 */
	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Module = (function () {
	    function Module(options) {
	        _classCallCheck(this, Module);
	    }

	    _createClass(Module, [{
	        key: "init",
	        value: function init() {
	            var self = this;
	            var promises = arguments;

	            var promise = new Promise(function (resolve, reject) {
	                Promise.all(promises).then(function (arrayOfResults) {
	                    console.log("> TasksModule.init()");
	                    resolve(self);
	                }, function (err) {
	                    reject(err);
	                });
	            });

	            return promise;
	        }
	    }]);

	    return Module;
	})();

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function (mainRouter, router, mainNetwork, network, controller) {
	    var instance;
	    var promises = arguments;
	    //console.log("^^^", promises);

	    return (function () {
	        var _ref;

	        // fill init function with arguments as is (not as array)
	        return instance = instance || (_ref = new Module()).init.apply(_ref, _toConsumableArray(Array.prototype.slice.call(promises)));
	    })();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	//define(["../../../../test12-dojo/bower_components/dojo/_base/declare"], function(declare){
	//    //var controller = declare("tasksController", null, {
	//    //    doSomething : function() {
	//    //        console.log("asdf");
	//    //    }
	//    //});
	//
	//    var module = declare(null, {
	//        doSomething : function() {
	//            console.log("asdf");
	//        },
	//
	//        init : function() {
	//            console.log("init tasks module");
	//        }
	//    });
	//
	//    return module;
	//});

	//this.model = options.model;

	//"services_router",
	//"./routers/index.js",
	//"services_network",
	//"./networks/index.js",
	//"./controllers/index.js",

/***/ }

});