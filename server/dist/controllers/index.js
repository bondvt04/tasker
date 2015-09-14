// for consoles
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = require('tracer').colorConsole();
var Node = require("../models/Node");
var ApiControllerAbstract = require("./apiControllerAbstract");

//var querystring = require("querystring");

var Controller = (function (_ApiControllerAbstract) {
    _inherits(Controller, _ApiControllerAbstract);

    function Controller() {
        _classCallCheck(this, Controller);

        _get(Object.getPrototypeOf(Controller.prototype), "constructor", this).call(this);

        logger.log("lol");
    }

    _createClass(Controller, [{
        key: "__beforeAction",
        value: function __beforeAction(req, res, next) {
            // we will render it later if no error
            res.jsonToRender = {};
        }
    }, {
        key: "__afterAction",
        value: function __afterAction(req, res, next, actionResult) {
            return new Promise(function (resolve, reject) {
                actionResult.c = "csdf";
                resolve(actionResult);
            });
        }

        //doAction(actionName, args) {
        //    return new Promise(function(resolve, reject) {
        //        do_.something.wrong();
        //        //throw new Error("lol there are error occured");
        //    });
        //}

        /**
         * Args: [req, res, next]
         */
    }, {
        key: "doAction",
        value: function doAction(actionName, args) {
            logger.log("##### ACTION");

            //var functionName = "_"+actionName+"Action";
            //var self = this;
            //var req = args[0];
            //var res = args[1];
            //var next = args[2];
            //
            //return new Promise(function(resolve, reject) {
            //    if(self[functionName] && "function" === typeof self[functionName]) {
            //        //self.__beforeAction(req, res, next);
            //
            //        // fill with arguments as is (not as array)
            //        var actionPromise = self[functionName](...Array.prototype.slice.call(args));
            //
            //        function doAfterAction(actionResult) {
            //            var afterActionPromise = self.__afterAction(req, res, next, actionResult);
            //
            //            afterActionPromise.then(function(result) {
            //                resolve(result);
            //            }).catch(function(err) {
            //                logger.error(err);
            //                reject(err);
            //            });
            //        }
            //
            //        actionPromise.then(function(result) {
            //            logger.log("### 7");
            //            doAfterAction().then(function(afterActionResult) {
            //                resolve(afterActionResult);
            //            }).catch(function(err) {
            //                reject(err);
            //            });
            //        }).catch(function(err) {
            //            logger.log("### 8");
            //            doAfterAction();
            //            reject(err);
            //        });
            //    }
            //});
        }

        /**
         * Тестим ловлю ошибок
         */
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
                resolve({ a: "asdf", b: "bsdf" });
                //Node.find(function (err, nodes) {
                //    if (err) reject(err);
                //
                //    res.send(nodes);
                //
                //    resolve(nodes);
                //});

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
})(ApiControllerAbstract);

try {
    var controller = new Controller();
} catch (err) {
    logger.error(err);
}

module.exports = controller;
//# sourceMappingURL=../controllers/index.js.map