/**
 * Created by anatoliybondar on 9/29/15.
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

module.exports = OpError;