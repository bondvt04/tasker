/**
 * Created by anatoliybondar on 9/14/15.
 */



var fs = require('fs');
var path = require('path');
var SourceMapConsumer = require('source-map').SourceMapConsumer;

Object.defineProperty(global, '__stack', {
    get: function get() {
        var orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function (_, stack) {
            return stack;
        };
        var err = new Error();
        Error.captureStackTrace(err, arguments.callee);
        var stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

Object.defineProperty(global, '__line', {
    get: function get() {
        var result = "";

        //if(__stack && __stack.length) {
        //    if(__stack[0]) {
        //        result += "|" + __stack[0].getLineNumber();
        //    }
        //
        //    if(__stack[1]) {
        //        result += "|" + __stack[1].getLineNumber();
        //    }
        //
        //    if(__stack[2]) {
        //        result += "|" + __stack[2].getLineNumber();
        //    }
        //}

        result = __stack[1].getLineNumber();

        return result;
    }
});

Object.defineProperty(global, '__file', {
    get: function get() {
        var result = "";

        result = __stack[1].getFileName();

        return result;
    }
});

Object.defineProperty(global, '__line0', { get: function get() {
        return __stack && __stack[0] ? __stack[0].getLineNumber() : undefined;
    } });
Object.defineProperty(global, '__file0', { get: function get() {
        return __stack && __stack[0] ? __stack[0].getFileName() : undefined;
    } });
Object.defineProperty(global, '__line1', { get: function get() {
        return __stack && __stack[1] ? __stack[1].getLineNumber() : undefined;
    } });
Object.defineProperty(global, '__file1', { get: function get() {
        return __stack && __stack[1] ? __stack[1].getFileName() : undefined;
    } });
Object.defineProperty(global, '__line2', { get: function get() {
        return __stack && __stack[2] ? __stack[2].getLineNumber() : undefined;
    } });
Object.defineProperty(global, '__file2', { get: function get() {
        return __stack && __stack[2] ? __stack[2].getFileName() : undefined;
    } });
Object.defineProperty(global, '__line3', { get: function get() {
        return __stack && __stack[3] ? __stack[3].getLineNumber() : undefined;
    } });
Object.defineProperty(global, '__file3', { get: function get() {
        return __stack && __stack[3] ? __stack[3].getFileName() : undefined;
    } });

//var logger = console;
var logger = {};
logger.log = function (message1, message2, message3) {

    var filePath = "";
    var lineNumber = NaN;

    function isValidFileName(fileName) {
        if (!fileName || fileName && fileName.match(/v8-debug/) || fileName && fileName.match(/ConsoleAgent/) || fileName && fileName.match(/megaLogger/)) {
            return false;
        }

        return true;
    }

    if (isValidFileName(__file0)) {
        filePath = __file0 + '.map';
        lineNumber = __file0;
    } else if (isValidFileName(__file1)) {
        filePath = __file1 + '.map';
        lineNumber = __file1;
    } else if (isValidFileName(__file2)) {
        filePath = __file2 + '.map';
        lineNumber = __file2;
    } else if (isValidFileName(__file3)) {
        filePath = __file3 + '.map';
        lineNumber = __file3;
    } else {
        return false;
    }

    //console.log("###---", filePath);

    fs.readFile(filePath, function (err, rawSourceMap) {
        if (err) {
            console.error(err);
            return;
            //throw err;
            //
        }

        console.log("#####", rawSourceMap.toString('utf8', 0, rawSourceMap.length));
        var smc = new SourceMapConsumer(rawSourceMap.toString('utf8', 0, rawSourceMap.length));
        console.log(smc.originalPositionFor({
            line: 2,
            column: 28
        }));
        console.log("%%%", smc.sources);
    });

    // async
    //path.exists(__file2+'.map', function(exists) {
    //    if (exists) {
    //        fs.readFile(filePath, {encoding: 'utf-8'}, function(err, rawSourceMap) {
    //            if (err) {
    //                console.error(err);
    //                return false;
    //            }
    //
    //            //var smc = new SourceMapConsumer(rawSourceMap);
    //            //console.log("%%%", smc.sources);
    //        });
    //    }
    //});

    //console.error("^^^"+__file2+":"+__line2+":", message1, message2, message3);
};

module.exports = logger;
//# sourceMappingURL=megaLogger.js.map