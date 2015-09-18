/**
 * Created by anatoliybondar on 9/14/15.
 */

var logger = require("verbose-console-log");

class ApiControllerAbstract {

    /**
     * @todo add "isAbstract" like this:
     *
     * if (new.target === ApiControllerAbstract) {
     *     throw new TypeError("Cannot construct Abstract instances directly");
     * }
     */
    constructor() {
        logger.log("ApiControllerAbstract.constructor");
    }

    __beforeAction(req, res, next) {
        return new Promise(function(resolve, reject) {
            logger.log("Controller.__beforeAction");
            resolve();
        });

        // we will render it later if no error
        //res.jsonToRender = {};
    }

    __afterAction(req, res, next, actionResult) {
        return new Promise(function(resolve, reject) {
            logger.log("Controller.__afterAction");
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
    doAction(actionName, args) {
        var self = this;

        var beforeActionPromise = new Promise(function(resolve, reject) {
            self.__beforeAction().then(function(beforeActionResult) {

            }).catch()
        });




        return beforeActionPromise.then(function(beforeActionResult) {
            var actionPromise = self.tttAction();
            actionPromise.then(function(actionResult) {
                var afterActionPromise = self.__afterAction();
                afterActionPromise.then(function(afterActionResult) {

                }).catch(function(err) {
                    logger.error(err);
                });
            }).catch(function(err) {
                logger.error(err);
            });
        }).catch(function(err) {
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

    tttAction() {
        return new Promise(function(resolve, reject) {
            resolve({a:"asdf", b:"bsdf"});
        });
    }
}

module.exports = ApiControllerAbstract;