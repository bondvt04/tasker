/**
 * Created by anatoliybondar on 9/14/15.
 */

var colors = require('colors');
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
        //logger.log("ApiControllerAbstract.constructor");
    }

    __beforeAction(req, res, next) {
        logger.log("Controller.__beforeAction1");
        return new Promise(function(resolve, reject) {
            logger.log("Controller.__beforeAction2");
            resolve();
        });

        // we will render it later if no error
        //res.jsonToRender = {};
    }

    /**
     * @param actionResult - result from "action" promise
     */
    __afterAction(req, res, next, actionResult) {
        logger.log("Controller.__afterAction1");
        return new Promise(function(resolve, reject) {
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
    doAction(actionName, args) {
        var self = this;

        var functionName = "_"+actionName+"Action"
        var req = args[0];
        var res = args[1];
        var next = args[2];

        function catchError(err) {
            logger.error(err.message.red);
            logger.error("Error stack:", err.stack);
            next(err);
        }

        return new Promise(function(resolve, reject) {
            self.__beforeAction().then(function(beforeActionResult) {
                // action must not know about "beforeActionResult" - only about "args"
                self[functionName](req, res, next, beforeActionResult).then(function(actionResult) {
                    self.__afterAction(req, res, next, actionResult).then(function(afterActionResult) {
                        resolve(afterActionResult);
                    }).catch(catchError);
                }).catch(catchError);
            }).catch(catchError);
        });
    }
}

module.exports = ApiControllerAbstract;