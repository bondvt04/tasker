/**
 * Created by anatoliybondar on 9/14/15.
 */

var logger = require('tracer').colorConsole();

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
}

module.exports = ApiControllerAbstract;