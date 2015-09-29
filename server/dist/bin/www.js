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



var colors = require('colors');
var logger = require("verbose-console-log");

var express = require('express'),
    http = require('http'),
    path = require('path'),
    domain = require('domain'),
    cluster = require('cluster'),
    http = require('http'),
    numCPUs = require('os').cpus().length,
    fs = require('fs');
//routes = require("../routes/index");
//routes = [];

if (0 && cluster.isMaster) {
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

    //var favicon = require('serve-favicon');
    //app.use(favicon(__dirname + '/public/favicon.ico'));

    //domains
    // one domain for each request
    /*app.use(function domainMiddleware(req, res, next) {
         var reqDomain = domain.create();
         res.on('close', function () {
            reqDomain.exit();
            //reqDomain.dispose();
        });
         res.on('finish', function () {
            //reqDomain.dispose();
            reqDomain.exit();
        });
         logger.log("### asdf");
         reqDomain.on('error', function (err, req, res, next) {
            logger.log("<<< error >>>");
            // http://stackoverflow.com/questions/16763550/explicitly-adding-req-and-res-to-domain-dont-propagate-error-to-express-middlew
            // delegate to express error-middleware
              //reqDomain.dispose();
            //reqDomain.exit();
             // This is UNCAUGHT error! So we must crash application in order to not continue app running in unknown state
            // So log, send response to user and then crash
            //app.set("uncaught_error", true);
             //logger.log("###", app.get("uncaught_error"));
             next(err);
        });
         // Adding the request and response objects to the domain
        // makes the express error-middleware to not being called.
        reqDomain.add(req);
        reqDomain.add(res);
         //reqDomain.run(next);
        //reqDomain.run(function() {
        //    logger.log("### qwer");
        //});
        //next();
        reqDomain.enter();
        //reqDomain.run(next);
         next();
    });*/

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

    var domain = domain.create();

    domain.on("error", function (err) {
        logger.log("***************** zlo".magenta);
    });

    process.on('uncaughtException', function (err) {
        logger.log("***************** zlo".magenta);
    });

    process.on('uncaughtError', function (err) {
        logger.log("***************** zlo".magenta);
    });

    domain.enter();
    app.use("/api/nodes", function (req, res, next) {

        throw new Error("asdf");

        //logger.log("------------- asdf");
        //res.send("asdf");
        //next();
    });

    //app.use("/api", routes);

    // all environments
    app.set('port', process.env.PORT || 7777);

    //app.use(express.logger('dev'));

    // for testing which cluster that serves the request
    //var router = express.Router();
    //router.get('/', function(req, res, next) {
    //    var debug = require("debug")("app:main");
    //    debug("lol");
    //    res.status(200).json({ id: cluster.worker.id });
    //});
    //router.get('/error', function(req, res, next) {
    //
    //    // intentionally force an error
    //    fs.readFile('', process.domain.intercept(function(data) {
    //        // when using intercept we dont need this line anymore
    //        //if (err) throw err;
    //        res.send(data);
    //    }));
    //});
    //app.use('/api', router);

    //app.use("/api", routes);

    /*app.use(function(req, res, next) {
        logger.log("++++++++++".red);
    });
     app.use(function(err, req, res, next) {
         if(!err.message) {
            logger.error('You did next(NOT_ERROR_VAR); stuff!!!!'.underline.red);
            return;
        }
         logger.error('ERROR MIDDLEWARE'.red, err.message.red, 'Stack:'.yellow, err, err.stack);
        res.writeHeader(500, {'Content-Type' : "text/html"});
        res.write("<h1>" + err.name + err.stack + "</h1>");
        res.end("<p>" + err.message + "</p>");
         next(err);
    });
     app.use(function(err, req, res, next) {
         logger.log("###", app.get("uncaught_error"));
        if(app.get("uncaught_error")) {
            process.exit(1);
        }
    });*/

    http.createServer(app).listen(app.get('port'), function () {
        logger.log('Express server listening on port ' + app.get('port'));
    });
}
//# sourceMappingURL=../bin/www.js.map