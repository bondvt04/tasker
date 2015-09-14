/**
 * Created by anatoliybondar on 9/14/15.
 */

"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = require('tracer').colorConsole();

var ApiControllerAbstract =

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
};

module.exports = ApiControllerAbstract;
//# sourceMappingURL=../controllers/apiControllerAbstract.js.map