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
     *
     * Old implementation: var actionPromise = self[functionName](...Array.prototype.slice.call(args))
     */
    doAction(actionName, args) {
        var self = this;

        var functionName = "_"+actionName+"Action"
        var req = args[0];
        var res = args[1];
        var next = args[2];

        function catchError(err) {
            logger.error(err);
            logger.error("Error stack:", err.stack);
            next(err);
        }

        return new Promise(function(resolve, reject) {
            self.__beforeAction().then(function(beforeActionResult) {
                // action must not know about "beforeActionResult" - only about "args"
                self[functionName](req, res).then(function(actionResult) {
                    self.__afterAction(actionResult, next).then(function(afterActionResult) {
                        resolve(afterActionResult);
                    }).catch(catchError);
                }).catch(catchError);
            }).catch(catchError);
        });
    }

    /**
     * @param actionResult - result from "action" promise
     */
    __afterAction(actionResult) {
        return new Promise(function(resolve, reject) {
            resolve(actionResult);
        });
    }
}

module.exports = ApiControllerAbstract;