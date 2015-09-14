/**
 * Created by anatoliybondar on 9/14/15.
 */

Object.defineProperty(global, '__stack', {
    get: function(){
        var orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function(_, stack){ return stack; };
        var err = new Error;
        Error.captureStackTrace(err, arguments.callee);
        var stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

Object.defineProperty(global, '__line', {
    get: function(){
        var result = "";

        if(__stack && __stack.length) {
            if(__stack[0]) {
                result += "|" + __stack[0].getLineNumber();
            }

            if(__stack[1]) {
                result += "|" + __stack[1].getLineNumber();
            }

            if(__stack[2]) {
                result += "|" + __stack[2].getLineNumber();
            }
        }

        return result;
    }
});

var logger = console;
logger.log = function() {
    console.error(__line+"rrrrrrrr");
}

module.exports = logger;