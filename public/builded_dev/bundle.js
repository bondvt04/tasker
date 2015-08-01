/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

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

	// одна сущность, вроде:
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

	__webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [
	    //"require",
	    __webpack_require__(1),
	    __webpack_require__(2)
	]; (function(amdConfig, modulesConfig){

	    // load aliases and pathes to AMD require system
	    //require.config(amdConfig);

	    // load modules
	    //console.log(modulesConfig.modules);

	    //_.each(modulesConfig.modules, function(value, index) {
	    //    console.log(index+"="+value);
	    //})

	    //var context = require.context("./modules/", false, /[^\/]+\/index\.js/);
	    //
	    //console.log(context.resolve("notes"));

	    if(true) {
	        var zlo = "notes";
	        __webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(3)("./"+zlo+"/index.js")]; (function(note) {
	            console.log("###", note);
	        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});

	        var zlo2 = "tasks"
	        __webpack_require__.e/* require */(2/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(3)("./"+zlo2+"/index.js")]; (function(task) {
	            console.log("###", task);
	        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	    }

	    //
	    //
	    //require.context(
	    //    "./", // context folder
	    //    true, // include subdirectories
	    //    /^\.\/modules\/[^\/]+\/index\.js$/ // RegExp
	    //)(["./" + zlo + "/index.js"], function() {
	    //    console.log("###", arguments);
	    //})

	//console.log("asdf");

	    //var zlo = "notes";
	    //require.ensure([], function(require) {
	    //    require(["./modules/notes/index.js"], function(note) {
	    //        console.log(note);
	    //    });
	    //});




	    //var zlo = [];
	    ////
	    //require(zlo, function() {
	    //    console.log("asdf");
	    //});

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
	    });*/
	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});




/***/ }
/******/ ]);