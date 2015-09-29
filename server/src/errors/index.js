/**
 * Created by anatoliybondar on 9/29/15.
 */

/**
 * Operational error - predicted and caught error
 */
class OpError extends Error {
    constructor(message) {
        super(message);

        this.name = "OpError";
        this.message = message;
        this.type = "operational";
        Error.captureStackTrace(this, this.constructor.name)
    }
}

/**
 * Error, after which we must kill process
 */
class CriticalError extends OpError {
    constructor(message) {
        super(message);

        this.type = "critical";
        Error.captureStackTrace(this, this.constructor.name)
    }
}

/**
 * Launch this AFTER all handlers, because this handler can kill process
 */
function lastErrorHandler(err) {
    // @todo log to db and files
    logger.error(err.message.red);

    if("operational" !== err.type) {
        // This is UNCAUGHT error! So we must crash application in order to not continue app running in unknown state
        // So log, send response to user and then crash
        process.exit(1);
    }
}

/**
 * This handler returns
 */
function expressErrorHandler(err, req, res, next) {
    if(!err.message) {
        // @todo test this
        var message = 'You did next(NOT_ERROR_VAR); stuff!!!!'.underline.red;
        lastErrorHandler(new Error(message));
    }

    logger.error('ERROR MIDDLEWARE'.red, err.message.red, 'Stack:'.yellow, err, err.stack);
    res.writeHeader(500, {'Content-Type' : "text/html"});
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
}