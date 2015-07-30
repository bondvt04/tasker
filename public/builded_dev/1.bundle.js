webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {\n    return {\n        modules: [\n            //diary: \"\",\n            //\"../modules/notes/index.js\"\n        ]\n    }\n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/config/modules.js\n ** module id = 2\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/config/modules.js?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("var map = {\n\t\"./config/amd\": 4,\n\t\"./config/amd.js\": 4,\n\t\"./config/modules\": 2,\n\t\"./config/modules.js\": 2,\n\t\"./index\": 1,\n\t\"./index.js\": 1,\n\t\"./modules/notes/111index\": 5,\n\t\"./modules/notes/111index.js\": 5,\n\t\"./modules/notes/controllers/index\": 6,\n\t\"./modules/notes/controllers/index.js\": 6,\n\t\"./modules/notes/index\": 7,\n\t\"./modules/notes/index.js\": 7,\n\t\"./modules/notes/models/Note\": 8,\n\t\"./modules/notes/models/Note.js\": 8,\n\t\"./modules/notes/routers/index\": 9,\n\t\"./modules/notes/routers/index.js\": 9,\n\t\"./modules/notes/views/index/note.ejs\": 11,\n\t\"./modules/tasks/index\": 13,\n\t\"./modules/tasks/index.js\": 13,\n\t\"./modules/tasks/models/Task\": 14,\n\t\"./modules/tasks/models/Task.js\": 14\n};\nfunction webpackContext(req) {\n\treturn __webpack_require__(webpackContextResolve(req));\n};\nfunction webpackContextResolve(req) {\n\treturn map[req] || (function() { throw new Error(\"Cannot find module '\" + req + \"'.\") }());\n};\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = 3;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src ^\\.\\/.*$\n ** module id = 3\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src_^\\.\\/.*$?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {\n    return {\n        paths : {\n            services_router: '../services/router/index.js',\n            services_network: '../services/network/index.js'\n            //modules_notes: '../modules/notes/index.js'\n        }\n    }\n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/config/amd.js\n ** module id = 4\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/config/amd.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {\n    return \"Hello, notes!\";\n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n/*define([\n    \"../../../../test12-dojo/bower_components/dojo/_base/declare\",\n    //\"../test15-try-to-do-client/modules/notes/hello.jsd\"\n\n    \"./controllers/index\",\n    \"./routers/index\"\n\n\n\n    //baseUrl+\"controllers/index.js\",\n\n\n    //\"./routers/index.js\"\n], function(declare, controllerClass, routerClass){\n\n    //require([ \"./hello.js\" ], function(hello){\n    //    console.log(\"hello\");\n    //});\n\n    var moduleClass = declare(null, {\n        /**\n         * @todo inits via promises\n         *\n        init : function(mainRouter, mainNetwork) {\n            var controller = new controllerClass();\n            var router = new routerClass();\n\n            if(controller && controller.init && \"function\" === typeof controller.init) {\n                var controllerReadyPromise = controller.init.bind(controller)(mainRouter, mainNetwork);\n            }\n\n            controllerReadyPromise.then(function(result) {\n                if(router && router.init && \"function\" === typeof router.init) {\n                    router.init.bind(router)(mainRouter, mainNetwork, controller);\n                }\n\n                console.log(\"init notes controller\");\n            }, function(err) {\n                console.error(err);\n            });\n\n            console.log(\"init notes module\");\n        }\n    });\n\n    return moduleClass;\n});*/\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/modules/notes/111index.js\n ** module id = 5\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/modules/notes/111index.js?");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [\n    !(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"dojo/_base/declare\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())\n], __WEBPACK_AMD_DEFINE_RESULT__ = function(declare){\n\n    var controllerClass = declare(null, {\n        /**\n         * Adding webcomponents, needed for this controller's views\n         * @private\n         */\n        _loadViewComponents : function() {\n            window.appendLinkToHead(\"modules/notes/views/webcomponents/note.html\");\n        },\n\n        _beforeAction : function() {\n            this._loadViewComponents();\n        },\n\n        _afterAction : function() {\n\n        },\n\n        init : function() {\n            //debugger;\n            var self = this;\n            var promise = new Promise(function(resolve, reject) {\n\n                if (true) {\n                    resolve(self);\n                } else {\n                    reject(new Error(\"Error while notes.controller.init\"));\n                }\n            });\n\n            return promise;\n        },\n\n        actions : {\n\n            index : function() {\n                this._beforeAction();\n                console.log(\">> notes.controller.actions.index\");\n\n                data = {\n                    notes : [\n                        {text : \"hello\"},\n                        {text : \"world\"},\n                        {text : \"lol\"}\n                    ]\n                }\n\n                html = new EJS({url: '/modules/notes/views/index/index.ejs'}).render(data);\n                document.getElementById(\"content\").innerHTML = html;\n\n                this._afterAction();\n            },\n\n            add : function() {\n                this._beforeAction();\n                console.log(\">> notes.controller.actions.add\");\n                this._afterAction();\n            }\n        }\n    });\n\n    return controllerClass;\n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/modules/notes/controllers/index.js\n ** module id = 6\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/modules/notes/controllers/index.js?");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {\n    return \"Hello, notes!\";\n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/modules/notes/index.js\n ** module id = 7\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/modules/notes/index.js?");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"../../../../../test12-dojo/bower_components/dojo/_base/declare\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function(declare){\n    var NoteClass = declare(null, {\n        constructor: function(){\n            console.debug(\"this is Note object #\" + NoteClass.counter++);\n        }\n    });\n\n    NoteClass.counter = 0;\n\n    return NoteClass;\n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/modules/notes/models/Note.js\n ** module id = 8\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/modules/notes/models/Note.js?");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [\n    !(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"../../../../../test12-dojo/bower_components/dojo/_base/declare\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())\n], __WEBPACK_AMD_DEFINE_RESULT__ = function(declare){\n    var routerClass = declare(null, {\n\n        _controller : null,\n\n        _routes : {\n\n            //\"/notes\": function () {\n            //    //console.log(\"> route /notes\");\n            //},\n            //\"/notes/add\" : function() {\n            //    //console.log(\"> route /notes/add\");\n            //}\n        },\n\n        init : function(mainRouter, mainNetwork, controller) {\n            try {\n                mainRouter.addRoutes({\n                    \"/notes\": {callback: controller.actions.index, context: controller},\n                    \"/notes/add\": {callback: controller.actions.add, context: controller}\n                })\n            } catch(e) {\n                console.error(e);\n            }\n\n            console.log(\"init notes router\");\n        }\n    });\n\n    return routerClass;\n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/modules/notes/routers/index.js\n ** module id = 9\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/modules/notes/routers/index.js?");

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	eval("hello\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/modules/notes/views/index/note.ejs\n ** module id = 11\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/modules/notes/views/index/note.ejs?");

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"../../../../test12-dojo/bower_components/dojo/_base/declare\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function(declare){\n    //var controller = declare(\"tasksController\", null, {\n    //    doSomething : function() {\n    //        console.log(\"asdf\");\n    //    }\n    //});\n\n    var module = declare(null, {\n        doSomething : function() {\n            console.log(\"asdf\");\n        },\n\n        init : function() {\n            console.log(\"init tasks module\");\n        }\n    });\n\n    return module;\n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/modules/tasks/index.js\n ** module id = 13\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/modules/tasks/index.js?");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"../../../../../test12-dojo/bower_components/dojo/_base/declare\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function(declare){\n    var Task = declare(null, {\n        constructor: function(){\n            console.debug(\"this is Task object #\" + Task.counter++);\n        }\n    });\n\n    Task.counter = 0;\n\n    return Task;\n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/modules/tasks/models/Task.js\n ** module id = 14\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/modules/tasks/models/Task.js?");

/***/ }
]);