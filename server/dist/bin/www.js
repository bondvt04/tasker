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

"use strict";

var colors = require('colors');
var logger = require("verbose-console-log");

var OpError = require("../errors/index").classes.OpError;
var lastErrorHandler = require("../errors/index").handlers.lastErrorHandler;
var expressErrorHandler = require("../errors/index").handlers.expressErrorHandler;

var express = require('express'),
    http = require('http'),
    path = require('path'),
    domain = require('domain'),
    cluster = require('cluster'),
    http = require('http'),
    numCPUs = require('os').cpus().length,
    fs = require('fs');
var routes = require("../routes/index");
//routes = [];

if (1 && cluster.isMaster) {
    //logger.log("###", numCPUs);

    if (0) {
        // fork workers
        for (var i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
    } else {
        // fork only one worker
        cluster.fork();
    }

    // when a worker dies create a new one
    cluster.on('exit', function (worker, code, signal) {
        logger.log('worker '.red + worker.process.pid + ' died'.red);
        logger.log("NEW WORKER".green);
        cluster.fork();
    });
} else {

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

    app.use(function (req, res, next) {
        logger.log("++++++++++".red);
    });

    app.use(expressErrorHandler);
    process.on('uncaughtException', function (err) {
        lastErrorHandler(err);
    });

    http.createServer(app).listen(app.get('port'), function () {
        logger.log('Express server listening on port ' + app.get('port'));
    });
}
//# sourceMappingURL=../bin/www.js.map