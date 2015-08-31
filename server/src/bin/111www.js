//#!/usr/bin/env node

// http://stackoverflow.com/questions/16763550/explicitly-adding-req-and-res-to-domain-dont-propagate-error-to-express-middlew

var cluster = require('cluster');

if (cluster.isMaster) {
    // In real life, you'd probably use more than just 2 workers,
    // and perhaps not put the master and worker in the same file.
    //
    // You can also of course get a bit fancier about logging, and
    // implement whatever custom logic you need to prevent DoS
    // attacks and other bad behavior.
    //
    // See the options in the cluster documentation.
    //
    // The important thing is that the master does very little,
    // increasing our resilience to unexpected errors.

    cluster.fork();
    cluster.fork();

    cluster.on('disconnect', function(worker) {
        console.error('disconnect!');
        cluster.fork();
    });

} else {
    var express = require('express');
    var path = require('path');
    var favicon = require('serve-favicon');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');

    var routes = require('../routes/index');

    var app = express();

    // we can now handle uncaught errors
    // app.use(require('express-domain-middleware'));

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));


    app.use('/api', routes);

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });


// express-domain's error handling
//app.use(function errorHandler(err, req, res, next) {
//  console.log('error on request %d %s %s: %j', process.domain.id, req.method, req.url, err);
//  res.send(500, "Something bad happened. :(");
//  if(err.domain) {
//    console.log("########", err.message);
//    //you should think about gracefully stopping & respawning your server
//    //since an unhandled error might put your application into an unknown state
//  }
//});

//app.use(function(req, res, next) {
//  res.status(404).send('Sorry cant find that!');
//});

// error handlers

// development error handler
// will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });


    var debug = require('debug')('server:server');
    var http = require('http');

    /**
     * Get port from environment and store in Express.
     */

    var port = +process.env.PORT || '7777';
    app.set('port', port);

    /**
     * Create HTTP server.
     */
    var server = http.createServer(app);

    /**
     * Listen on provided port, on all network interfaces.
     */
    server.listen(port);
    server.on('error', function(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        var bind = typeof port === 'string'
            ? 'Pipe ' + port
            : 'Port ' + port;

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    });

    server.on('listening', function() {
        var addr = server.address();
        var bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;
        debug('Listening on ' + bind);
    });
}



