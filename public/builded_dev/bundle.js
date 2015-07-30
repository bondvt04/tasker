/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/builded_dev/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// одна сущность, вроде:
	// data
	//   -role:knowledge|knowledge+learn|cloth|cloth+diary
	//   -owner
	//   -history_of_changes
	// стало быть, все модули можно реализовать, как плагины, которые могут работать с этими сущностями
	// но тогда все маршруты и нетворк должны быть инкапсулированы в модулях

	//http://dojotoolkit.org/reference-guide/1.10/dojo/_base/declare.html#dojo-base-declare
	//http://habrahabr.ru/post/209662/
	//https://scotch.io/tutorials/use-ejs-to-template-your-node-application
	//http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/
	// подключаем компоненты https://github.com/substack/browserify-handbook?md-time=1436784389971#reusable-components
	// webpack --progress --colors



	// просто про webpack - кукбук - http://habrahabr.ru/post/245991/ - лоадеры картинок и стилей супер!!!

	/*require([
	    //"./config/amd.js",
	    //"./config/modules.js"
	], function(amdConfig, modulesConfig){

	    // load aliases and pathes to AMD require system
	    //require.config(amdConfig);

	    // load modules
	    console.log(modulesConfig.modules);

	    var zlo = [];
	    //
	    require(zlo, function() {
	        console.log("asdf");
	    });

	    //require(modulesConfig.modules, function(){
	    //    debugger;
	    //    console.log(arguments);
	    //});


	    //setTimeout(function() {
	    //    require([
	    //        "services_router",
	    //    ], function(routerPromise){
	    //        routerPromise.then(function(router) {
	    //            console.log(">>>", router.getName());
	    //        });
	    //    });
	    //}, 5000);


	    //require([
	    //    "services_network",
	    //], function(networkPromise){
	    //    networkPromise.then(function(network) {
	    //        network.setName("aaaaa");
	    //        console.log("+1", network.getName());
	    //
	    //        setTimeout(function() {
	    //            console.log("+2", network.getName());
	    //        }, 5000);
	    //    });
	    //});
	    //
	    //require([
	    //    "services_network",
	    //], function(networkPromise){
	    //    networkPromise.then(function(network) {
	    //        network.setName("bbbbb");
	    //        console.log("++2", network.getName());
	    //
	    //        setTimeout(function() {
	    //            console.log("++", network.getName());
	    //        }, 5000);
	    //    });
	    //});
	    //
	    //setTimeout(function() {
	    //    require([
	    //        "services_network",
	    //    ], function(networkPromise){
	    //        networkPromise.then(function(network) {
	    //            console.log(">>>", network.getName());
	    //        });
	    //    });
	    //}, 5000);

	    /*require([
	        "services_router",
	        "services_network",
	    ], function(router, network){
	        //router.init();
	        //network.init();


	        //require([
	        //    //"modules_tasks",
	        //    "modules_notes"
	        //], function() {
	        //    var modules = arguments;
	        //
	        //    try {
	        //        var router = new routerClass();
	        //        var routerReadyPromise = router.init();
	        //    } catch(e) {
	        //        console.error(e);
	        //    }
	        //
	        //    try {
	        //        var network = new networkClass();
	        //        var networkReadyPromise = network.init();
	        //    } catch(e) {
	        //        console.error(e);
	        //    }
	        //
	        //    Promise.all([
	        //        routerReadyPromise,
	        //        networkReadyPromise
	        //    ]).then(function(arrayOfResults) {
	        //        var router = arrayOfResults[0];
	        //        var network = arrayOfResults[1];
	        //
	        //        /**
	        //         * Init all modules
	        //         *
	        //        (function initModules() {
	        //            for(var i in modules) {
	        //                (function() {
	        //                    var module = new modules[i]();
	        //
	        //                    if(module && module.init && "function" === typeof module.init) {
	        //                        module.init.bind(module)(router, network);
	        //                    }
	        //                })();
	        //            }
	        //        })();
	        //
	        //    }, function(err) {
	        //        console.error(err);
	        //    });
	        //});
	    });
	});*/


	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__], __WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
	    __webpack_require__(2)();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./config/amd": 3,
		"./config/amd.js": 3,
		"./config/modules": 4,
		"./config/modules.js": 4,
		"./index": 1,
		"./index.js": 1,
		"./modules/notes/111index": 5,
		"./modules/notes/111index.js": 5,
		"./modules/notes/controllers/index": 6,
		"./modules/notes/controllers/index.js": 6,
		"./modules/notes/index": 7,
		"./modules/notes/index.js": 7,
		"./modules/notes/models/Note": 8,
		"./modules/notes/models/Note.js": 8,
		"./modules/notes/routers/index": 9,
		"./modules/notes/routers/index.js": 9,
		"./modules/notes/views/index/note.ejs": 11,
		"./modules/tasks/index": 13,
		"./modules/tasks/index.js": 13,
		"./modules/tasks/models/Task": 14,
		"./modules/tasks/models/Task.js": 14
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {
	        paths : {
	            services_router: '../services/router/index.js',
	            services_network: '../services/network/index.js'
	            //modules_notes: '../modules/notes/index.js'
	        }
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));





/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {
	        modules: [
	            //diary: "",
	            //"../modules/notes/index.js"
	        ]
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return "Hello, notes!";
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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    !(function webpackMissingModule() { var e = new Error("Cannot find module \"dojo/_base/declare\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(declare){

	    var controllerClass = declare(null, {
	        /**
	         * Adding webcomponents, needed for this controller's views
	         * @private
	         */
	        _loadViewComponents : function() {
	            window.appendLinkToHead("modules/notes/views/webcomponents/note.html");
	        },

	        _beforeAction : function() {
	            this._loadViewComponents();
	        },

	        _afterAction : function() {

	        },

	        init : function() {
	            //debugger;
	            var self = this;
	            var promise = new Promise(function(resolve, reject) {

	                if (true) {
	                    resolve(self);
	                } else {
	                    reject(new Error("Error while notes.controller.init"));
	                }
	            });

	            return promise;
	        },

	        actions : {

	            index : function() {
	                this._beforeAction();
	                console.log(">> notes.controller.actions.index");

	                data = {
	                    notes : [
	                        {text : "hello"},
	                        {text : "world"},
	                        {text : "lol"}
	                    ]
	                }

	                html = new EJS({url: '/modules/notes/views/index/index.ejs'}).render(data);
	                document.getElementById("content").innerHTML = html;

	                this._afterAction();
	            },

	            add : function() {
	                this._beforeAction();
	                console.log(">> notes.controller.actions.add");
	                this._afterAction();
	            }
	        }
	    });

	    return controllerClass;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return "Hello, notes!";
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../../../test12-dojo/bower_components/dojo/_base/declare\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function(declare){
	    var NoteClass = declare(null, {
	        constructor: function(){
	            console.debug("this is Note object #" + NoteClass.counter++);
	        }
	    });

	    NoteClass.counter = 0;

	    return NoteClass;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    !(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../../../test12-dojo/bower_components/dojo/_base/declare\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(declare){
	    var routerClass = declare(null, {

	        _controller : null,

	        _routes : {

	            //"/notes": function () {
	            //    //console.log("> route /notes");
	            //},
	            //"/notes/add" : function() {
	            //    //console.log("> route /notes/add");
	            //}
	        },

	        init : function(mainRouter, mainNetwork, controller) {
	            try {
	                mainRouter.addRoutes({
	                    "/notes": {callback: controller.actions.index, context: controller},
	                    "/notes/add": {callback: controller.actions.add, context: controller}
	                })
	            } catch(e) {
	                console.error(e);
	            }

	            console.log("init notes router");
	        }
	    });

	    return routerClass;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	hello

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../../test12-dojo/bower_components/dojo/_base/declare\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function(declare){
	    //var controller = declare("tasksController", null, {
	    //    doSomething : function() {
	    //        console.log("asdf");
	    //    }
	    //});

	    var module = declare(null, {
	        doSomething : function() {
	            console.log("asdf");
	        },

	        init : function() {
	            console.log("init tasks module");
	        }
	    });

	    return module;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../../../test12-dojo/bower_components/dojo/_base/declare\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function(declare){
	    var Task = declare(null, {
	        constructor: function(){
	            console.debug("this is Task object #" + Task.counter++);
	        }
	    });

	    Task.counter = 0;

	    return Task;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ]);