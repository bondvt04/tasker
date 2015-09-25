"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colors = require('colors');
var logger = require("verbose-console-log");
var Node = require("../models/Node");
var ApiControllerAbstract = require("./apiControllerAbstract");

var Controller = (function (_ApiControllerAbstract) {
    _inherits(Controller, _ApiControllerAbstract);

    function Controller() {
        _classCallCheck(this, Controller);

        _get(Object.getPrototypeOf(Controller.prototype), "constructor", this).call(this, arguments);
    }

    /**
     * Тестим ловлю ошибок
     */
    //_error500Action(req, res) {
    //    return new Promise(function(resolve, reject) {
    //        try {
    //            logger.log("_error500Action");
    //            lol.hello.ololo();
    //            throw new Error("zlo");
    //        } catch(e) {
    //            logger.log("### 1");
    //            reject(e);
    //        }
    //    });
    //}

    /**
     * @todo Add filter, tags etc logic
     * @todo do res.end() in the end, not in controller
     */

    _createClass(Controller, [{
        key: "_getNodesAction",
        value: function _getNodesAction(req, res) {
            logger.log("Controller.doAction1");
            return new Promise(function (resolve, reject) {
                logger.log("Controller.doAction2");
                //resolve({a:"asdf777", b:"bsdf888"});

                //logger.log("###", Node);

                Node.find(function (err, nodes) {
                    logger.log("######");
                    if (err) reject(err);

                    resolve(nodes);
                });

                //Kitten.find({ name: /^Fluff/ }, callback);
            });
        }

        //_addNodeAction(req, res) {
        //    var newNode = new Node(req.body);
        //
        //    return new Promise(function(resolve, reject) {
        //        newNode.save(function (err, node) {
        //            if (err) reject(err);
        //
        //            logger.log("___savePromise", node);
        //            resolve(node);
        //        });
        //    });
        //}

        //_indexAction(req, res) {
        //    return new Promise(function(resolve, reject) {
        //        res.send("just /index action");
        //        resolve();
        //    });
        //}

        //_testAction(req, res) {
        //    var hello = new Node({
        //        content: 'Hello, World!'
        //    });
        //
        //    var savePromise = new Promise(function(resolve, reject) {
        //        hello.save(function (err, node) {
        //            if (err) reject(err);
        //
        //            logger.log("___savePromise", node.content);
        //            resolve(node);
        //        });
        //    });
        //
        //    var findPromise = new Promise(function(resolve, reject) {
        //        Node.find(function (err, nodes) {
        //            if (err) reject(err);
        //
        //            logger.log("___findPromise", nodes);
        //            resolve(nodes);
        //        });
        //
        //        //Kitten.find({ name: /^Fluff/ }, callback);
        //    });
        //
        //    return new Promise(function(resolve, reject) {
        //        Promise.all([
        //            savePromise,
        //            findPromise
        //        ]).then(function(results) {
        //            resolve(results);
        //        }).catch(function(err) {
        //            reject();
        //        });
        //    });
        //}
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