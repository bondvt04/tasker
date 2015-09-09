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

var express = require('express'),
    http = require('http'),
    path = require('path'),
    domain = require('domain'),
    cluster = require('cluster'),
    http = require('http'),
    numCPUs = require('os').cpus().length,
    fs = require('fs'),
    routes = [];

if (cluster.isMaster) {
    //console.log("###", numCPUs);


    if(0) {
        // fork workers
        for (var i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
    } else {
        // fork only one worker
        cluster.fork();
    }


    // when a worker dies create a new one
    cluster.on('exit', function(worker, code, signal) {
        cluster.fork();
    });

} else {

    var app = express();

    //var favicon = require('serve-favicon');
    //app.use(favicon(__dirname + '/public/favicon.ico'));

    //domains
    // one domain for each request
    app.use(function domainMiddleware(req, res, next) {

        var reqDomain = domain.create();

        res.on('close', function () {
            reqDomain.dispose();
        });

        res.on('finish', function () {
            reqDomain.dispose();
        });

        reqDomain.on('error', function (err) {
            // http://stackoverflow.com/questions/16763550/explicitly-adding-req-and-res-to-domain-dont-propagate-error-to-express-middlew
            // delegate to express error-middleware
            next(err);

            reqDomain.dispose();
        });

        // Adding the request and response objects to the domain
        // makes the express error-middleware to not being called.
        reqDomain.add(req);
        reqDomain.add(res);

        reqDomain.run(next);
    });

    routes = require("../routes/index");
    app.use("/api", routes);

    // all environments
    app.set('port', process.env.PORT || 7777);
    //app.set('views', __dirname + '/views');
    //app.set('view engine', 'jade');
    //app.use(express.logger('dev'));
    app.use(express.static(path.join(__dirname, 'public')));

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

    app.use(function(err, req, res, next) {
        console.log('ERROR MIDDLEWARE', err);
        res.writeHeader(500, {'Content-Type' : "text/html"});
        res.write("<h1>" + err.name + "</h1>");
        res.end("<p>" + err.message + "</p>");
    });

    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });
}