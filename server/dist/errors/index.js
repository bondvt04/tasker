/**
 * Created by anatoliybondar on 9/29/15.
 */

/**
 * Operational error - predicted and caught error
 */
"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpError = (function (_Error) {
    _inherits(OpError, _Error);

    function OpError(message) {
        _classCallCheck(this, OpError);

        _get(Object.getPrototypeOf(OpError.prototype), "constructor", this).call(this, message);

        this.name = "OpError";
        this.message = message;
        this.type = "operational";
        Error.captureStackTrace(this, this.constructor.name);
    }

    /**
     * Error, after which we must kill process
     */
    return OpError;
})(Error);

var CriticalError = (function (_OpError) {
    _inherits(CriticalError, _OpError);

    function CriticalError(message) {
        _classCallCheck(this, CriticalError);

        _get(Object.getPrototypeOf(CriticalError.prototype), "constructor", this).call(this, message);

        this.type = "critical";
        Error.captureStackTrace(this, this.constructor.name);
    }

    /**
     * Launch this AFTER all handlers, because this handler can kill process
     */
    return CriticalError;
})(OpError);

function lastErrorHandler(err) {
    // @todo log to db and files
    logger.error(err.message.red);

    if ("operational" !== err.type) {
        // This is UNCAUGHT error! So we must crash application in order to not continue app running in unknown state
        // So log, send response to user and then crash
        process.exit(1);
    }
}

/**
 * This handler returns
 */
function expressErrorHandler(err, req, res, next) {
    if (!err.message) {
        // @todo test this
        var message = 'You did next(NOT_ERROR_VAR); stuff!!!!'.underline.red;
        lastErrorHandler(new Error(message));
    }

    logger.error('ERROR MIDDLEWARE'.red, err.message.red, 'Stack:'.yellow, err, err.stack);
    res.writeHeader(500, { 'Content-Type': "text/html" });
    res.write("<h1>" + err.name + err.stack + "</h1>");
    res.end("<p>" + err.message + "</p>");

    lastErrorHandler(err);
}

module.exports = {
    classes: {
        OpError: OpError,
        CriticalError: CriticalError
    },
    handlers: {
        lastErrorHandler: lastErrorHandler,
        expressErrorHandler: expressErrorHandler
    }
};
//# sourceMappingURL=../errors/index.js.map