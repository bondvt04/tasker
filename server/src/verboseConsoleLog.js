/**
 * Created by anatoliybondar on 9/14/15.
 */

var fs = require('fs');
var path = require('path');
var SourceMapConsumer = require('source-map').SourceMapConsumer;

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

Object.defineProperty(global, '__callsite0', {get: function() {return (__stack && __stack[0])?__stack[0]:null;}});
Object.defineProperty(global, '__callsite1', {get: function() {return (__stack && __stack[1])?__stack[1]:null;}});
Object.defineProperty(global, '__callsite2', {get: function() {return (__stack && __stack[2])?__stack[2]:null;}});
Object.defineProperty(global, '__callsite3', {get: function() {return (__stack && __stack[3])?__stack[3]:null;}});



var logger = {};
logger.log = function() {

    var fileInfo = {};
    var loggerArguments = Array.prototype.slice.call(arguments);

    function isValidFileName(fileName) {
        if(
            !fileName
            || (fileName && fileName.match(/v8-debug/))
            || (fileName && fileName.match(/ConsoleAgent/))
            || (fileName && fileName.match(/megaLogger/))
        ) {
            return false;
        }

        return true;
    }

    callsite = __callsite0;

    if(!isValidFileName(callsite.getFileName())) {
        callsite = __callsite1;
        //console.log("===1 ", callsite);
        if(!isValidFileName(callsite.getFileName())) {
            callsite = __callsite2;
            //console.log("===2 ", callsite.getFileName()+":"+callsite.getLineNumber()+":"+callsite.getColumnNumber());
            if(!isValidFileName(callsite.getFileName())) {
                callsite = __callsite3;
                //console.log("===3 ", callsite);
                if(!isValidFileName(callsite.getFileName())) {
                    console.error("There are no valid file!");
                    return false;
                }
            }
        }
    }

    fileInfo = {
        path: callsite.getFileName(),
        mapPath: callsite.getFileName()+".map",
        line: callsite.getLineNumber(),
        column: callsite.getColumnNumber()
    }

    // Check is *.map (source map) file exists
    fs.stat(fileInfo.mapPath, function(err, statObject) {
        if(err) //console.error(err);

            console.log("###", statObject);
    });

    fs.readFile(fileInfo.mapPath, function (err, rawSourceMap) {
        if (err) {
            console.error(err);
            return;
        }

        //console.log("#####", rawSourceMap.toString('utf8', 0, rawSourceMap.length));
        var smc = new SourceMapConsumer(rawSourceMap.toString('utf8', 0, rawSourceMap.length));
        var originalPosition = smc.originalPositionFor({
            line: fileInfo.line,
            column: fileInfo.column
        });

        loggerArguments.unshift(originalPosition.source+":"+originalPosition.line+":"+originalPosition.column);


        console.log.apply(this, loggerArguments);
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
}

module.exports = logger;