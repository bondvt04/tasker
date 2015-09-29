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
    //logger.log("###", numCPUs);

    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        var message = 'Worker ' + worker.process.pid + ' died, will try start another one...'
        logger.log(message.underline.cyan);
        cluster.fork();
    });

    //if(0) {
    //    // fork workers
    //    for (var i = 0; i < numCPUs; i++) {
    //        cluster.fork();
    //    }
    //} else {
    //    // fork only one worker
    //    cluster.fork();
    //}
    //
    //
    //// when a worker dies create a new one
    //cluster.on('exit', function(worker, code, signal) {
    //    logger.log('worker '.red + worker.process.pid + ' died'.red);
    //    logger.log("NEW WORKER".green);
    //    cluster.fork();
    //});

} else {
    var lastErrorHandler = require("../errors/index").handlers.lastErrorHandler;
    var expressErrorHandler = require("../errors/index").handlers.expressErrorHandler;
    var express = require('express'),
        http = require('http'),
        routes = require("../routes/index");

    var app = express();

    //var createDomain = domain.create;
    //app.use(function(req, res, next) {
    //    var domain = createDomain();
    //
    //    domain.on('error', function(err) {
    //        logger.log("<<<asdf>>>");
    //
    //        domain.dispose();
    //    });
    //
    //    domain.enter();
    //    next();
    //});







    app.use("/api", routes);



    // all environments
    app.set('port', process.env.PORT || 7777);


    //app.use(express.logger('dev'));

    app.use(function(req, res, next) {
        logger.log("++++++++++".red);
    });


    app.use(expressErrorHandler);
    process.on('uncaughtException', function(err) {
        lastErrorHandler(err);
    });



    http.createServer(app).listen(app.get('port'), function(){
        logger.log('Express server listening on port ' + app.get('port'));
    });
}