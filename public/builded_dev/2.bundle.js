webpackJsonp([2],{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./tasks/index.js": 5
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
	webpackContext.id = 3;


/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return "tasks module";
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


/***/ }

});