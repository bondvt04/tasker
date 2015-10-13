/**
 * Created by anatoliybondar on 8/31/15.
 */

/**
 * @todo use this error handling:
 *
 * requestDomain.on('error', next);
 *
 * We can then use the default error handler to get a much nicer looking error page & stack trace:
 *
 * app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
 *
 * http://www.asyncdev.net/2013/07/promises-errors-and-express-js/
 */

/**
 * Открываем столько дебаггеров, сколько ядер, с соответствующими портами
 * slc debug src/bin/test-domains-www.js
 *
 * @type {*|exports}
 */

var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var colors = require('colors');
var logger = require("verbose-console-log");

if (cluster.isMaster) {
    if(0) {
        // Fork workers as much as CPUs on this machine
        for (var i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
    } else {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        var message = 'Worker ' + worker.process.pid + ' died, will try start another one...'
        logger.log(message.underline.cyan);
        cluster.fork();
    });
} else {
    var lastErrorHandler = require("../errors/index").handlers.lastErrorHandler;
    var expressErrorHandler = require("../errors/index").handlers.expressErrorHandler;
    var express = require('express'),
        http = require('http');

    var app = express();
    app.set('port', process.env.PORT || 7777);
    require("../debugging/index")(app);




    app.use("/api/auth", require("../routes/auth"));
    app.use("/api", require("../routes/index"));




    //app.use(express.logger('dev'));

    app.use(function(req, res, next) {
        logger.log("++++++++++".red);
    });


    app.use(expressErrorHandler);

    process.on('uncaughtException', function(err) {
        lastErrorHandler(err);
    });

    process.on('uncaughtRejection', function(err) {
        lastErrorHandler(err);
    });



    http.createServer(app).listen(app.get('port'), function(){
        logger.log('Express server listening on port ' + app.get('port'));
    });
}

//app.use('/static', express.static('public'));
//http://localhost:3000/static/images/kitten.jpg
//http://localhost:3000/static/css/style.css
//http://localhost:3000/static/js/app.js
//http://localhost:3000/static/images/bg.png
//http://localhost:3000/static/hello.html