/**
 * Created by anatoliybondar on 9/14/15.
 */

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var colors = require('colors');
var logger = require("verbose-console-log");

var ApiControllerAbstract = (function () {

    /**
     * @todo add "isAbstract" like this:
     *
     * if (new.target === ApiControllerAbstract) {
     *     throw new TypeError("Cannot construct Abstract instances directly");
     * }
     */

    function ApiControllerAbstract() {
        _classCallCheck(this, ApiControllerAbstract);
    }

    _createClass(ApiControllerAbstract, [{
        key: "__beforeAction",

        //logger.log("ApiControllerAbstract.constructor");
        value: function __beforeAction(req, res, next) {
            logger.log("Controller.__beforeAction1");
            return new Promise(function (resolve, reject) {
                logger.log("Controller.__beforeAction2");
                resolve();
            });

            // we will render it later if no error
            //res.jsonToRender = {};
        }

        /**
         * @param actionResult - result from "action" promise
         */
    }, {
        key: "__afterAction",
        value: function __afterAction(req, res, next, actionResult) {
            logger.log("Controller.__afterAction1");
            return new Promise(function (resolve, reject) {
                logger.log("Controller.__afterAction2");
                actionResult.c = "csdf";
                resolve(actionResult);
                res.send(actionResult);
                //res.send("asdf");
                //res.send("qwer");
                next();
            });
        }

        /**
         * __beforeActionPromise -> actionPromise -> __afterActionPromise
         *
         * Args: [req, res, next]
         *
         * Old implementation: var actionPromise = self[functionName](...Array.prototype.slice.call(args))
         */
    }, {
        key: "doAction",
        value: function doAction(actionName, args) {
            var self = this;

            var functionName = "_" + actionName + "Action";
            var req = args[0];
            var res = args[1];
            var next = args[2];

            function catchError(err) {
                logger.error(err.message.red);
                logger.error("Error stack:", err.stack);
                next(err);
            }

            return new Promise(function (resolve, reject) {
                self.__beforeAction().then(function (beforeActionResult) {
                    // action must not know about "beforeActionResult" - only about "args"
                    self[functionName](req, res, next, beforeActionResult).then(function (actionResult) {
                        self.__afterAction(req, res, next, actionResult).then(function (afterActionResult) {
                            resolve(afterActionResult);
                        })["catch"](catchError);
                    })["catch"](catchError);
                })["catch"](catchError);
            });
        }
    }]);

    return ApiControllerAbstract;
})();

module.exports = ApiControllerAbstract;
//# sourceMappingURL=../controllers/apiControllerAbstract.js.map