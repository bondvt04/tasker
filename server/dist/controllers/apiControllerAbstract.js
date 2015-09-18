/**
 * Created by anatoliybondar on 9/14/15.
 */

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

        logger.log("ApiControllerAbstract.constructor");
    }

    _createClass(ApiControllerAbstract, [{
        key: "__beforeAction",
        value: function __beforeAction(req, res, next) {
            return new Promise(function (resolve, reject) {
                console.log("Controller.__beforeAction");
                resolve();
            });

            // we will render it later if no error
            //res.jsonToRender = {};
        }
    }, {
        key: "__afterAction",
        value: function __afterAction(req, res, next, actionResult) {
            return new Promise(function (resolve, reject) {
                console.log("Controller.__afterAction");
                resolve();
            });

            //return new Promise(function(resolve, reject) {
            //    actionResult.c = "csdf";
            //    resolve(actionResult);
            //});
        }

        /**
         * __beforeActionPromise -> actionPromise -> __afterActionPromise
         *
         * Args: [req, res, next]
         */
    }, {
        key: "doAction",
        value: function doAction(actionName, args) {
            var self = this;

            var beforeActionPromise = self.__beforeAction();

            return beforeActionPromise.then(function (beforeActionResult) {
                var actionPromise = self.tttAction();
                actionPromise.then(function (actionResult) {
                    var afterActionPromise = self.__afterAction();
                    afterActionPromise.then(function (afterActionResult) {})["catch"](function (err) {
                        logger.error(err);
                    });
                })["catch"](function (err) {
                    logger.error(err);
                });
            })["catch"](function (err) {
                logger.error(err);
            });

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
    }, {
        key: "tttAction",
        value: function tttAction() {
            return new Promise(function (resolve, reject) {
                resolve({ a: "asdf", b: "bsdf" });
            });
        }
    }]);

    return ApiControllerAbstract;
})();

module.exports = ApiControllerAbstract;
//# sourceMappingURL=../controllers/apiControllerAbstract.js.map