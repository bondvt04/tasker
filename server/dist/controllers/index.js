"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = require("../models/Node");
var Promise = require("promise");
//var querystring = require("querystring");

var Controller = (function () {
    function Controller() {
        _classCallCheck(this, Controller);
    }

    _createClass(Controller, [{
        key: "__beforeAction",
        value: function __beforeAction(req, res, next) {
            // we will render it later if no error
            res.jsonToRender = {};
        }
    }, {
        key: "__afterAction",
        value: function __afterAction(req, res, next, result) {}
        //return new Promise(function(resolve, reject) {
        //    console.log("### 3");
        //    resolve(result);
        //    //next();
        //});

        /**
         * Args: [req, res, next]
         */

    }, {
        key: "doAction",
        value: function doAction(actionName, args) {
            var functionName = "_" + actionName + "Action";
            var self = this;
            var req = args[0];
            var res = args[1];
            var next = args[2];

            return new Promise(function (resolve, reject) {
                if (self[functionName] && "function" === typeof self[functionName]) {
                    var actionPromise;

                    (function () {
                        var doAfterAction = function doAfterAction() {
                            try {
                                console.log("---^^^---");

                                //var afterActionPromise = self.__afterAction(req, res, next, result);

                                console.log("---&&&---");

                                afterActionPromise.then(function (result) {
                                    console.log("### 4");
                                    resolve(result);
                                })["catch"](function (err) {
                                    console.log("### 5");
                                    reject(err);
                                }).done(function () {
                                    console.log("### 6");
                                });
                            } catch (e) {
                                console.log(e);
                                console.error(e);
                            }
                        };

                        self.__beforeAction(req, res, next);

                        // fill with arguments as is (not as array)
                        actionPromise = self[functionName].apply(self, _toConsumableArray(Array.prototype.slice.call(args)));

                        actionPromise.then(function (result) {
                            console.log("### 7");
                            doAfterAction().then(function (afterActionResult) {
                                resolve(afterActionResult);
                            })["catch"](function (err) {
                                reject(err);
                            });
                        })["catch"](function (err) {
                            console.log("### 8");
                            doAfterAction();
                            reject(err);
                        });
                    })();
                }
            });
        }
    }, {
        key: "_error500Action",
        value: function _error500Action(req, res) {
            return new Promise(function (resolve, reject) {
                try {
                    console.log("_error500Action");
                    lol.hello.ololo();
                    throw new Error("zlo");
                } catch (e) {
                    console.log("### 1");
                    reject(e);
                }
            });
        }

        /**
         * @todo Add filter, tags etc logic
         * @todo do res.end() in the end, not in controller
         */
    }, {
        key: "_getNodesAction",
        value: function _getNodesAction(req, res) {
            return new Promise(function (resolve, reject) {
                Node.find(function (err, nodes) {
                    if (err) reject(err);

                    res.send(nodes);

                    resolve(nodes);
                });

                //Kitten.find({ name: /^Fluff/ }, callback);
            });
        }
    }, {
        key: "_addNodeAction",
        value: function _addNodeAction(req, res) {
            var newNode = new Node(req.body);

            return new Promise(function (resolve, reject) {
                newNode.save(function (err, node) {
                    if (err) reject(err);

                    console.log("___savePromise", node);
                    resolve(node);
                });
            });
        }
    }, {
        key: "_indexAction",
        value: function _indexAction(req, res) {
            return new Promise(function (resolve, reject) {
                res.send("just /index action");
                resolve();
            });
        }
    }, {
        key: "_testAction",
        value: function _testAction(req, res) {
            var hello = new Node({
                content: 'Hello, World!'
            });

            var savePromise = new Promise(function (resolve, reject) {
                hello.save(function (err, node) {
                    if (err) reject(err);

                    console.log("___savePromise", node.content);
                    resolve(node);
                });
            });

            var findPromise = new Promise(function (resolve, reject) {
                Node.find(function (err, nodes) {
                    if (err) reject(err);

                    console.log("___findPromise", nodes);
                    resolve(nodes);
                });

                //Kitten.find({ name: /^Fluff/ }, callback);
            });

            return new Promise(function (resolve, reject) {
                Promise.all([savePromise, findPromise]).then(function (results) {
                    resolve(results);
                })["catch"](function (err) {
                    reject();
                });
            });
        }
    }]);

    return Controller;
})();

module.exports = new Controller();
//# sourceMappingURL=../controllers/index.js.map