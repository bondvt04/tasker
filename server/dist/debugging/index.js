/**
 * Created by anatoliybondar on 9/30/15.
 */

"use strict";

var CriticalError = require("../errors/index").classes.CriticalError;

module.exports = function (app) {
    if (!app) {
        throw new CriticalError("There are 'app' param expected!");
    }

    if ("dev" === process.env.NODE_ENV) {
        app.use(require('morgan')('combined'));
    }
};
//# sourceMappingURL=../debugging/index.js.map