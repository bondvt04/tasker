var routes = require("../routes/index");

app.use(function domainMiddleware(req, res, next) {

    var reqDomain = domain.create();

    res.on('close', function () {
        reqDomain.dispose();
    });

    res.on('finish', function () {
        reqDomain.dispose();
    });

    reqDomain.on('error', function (err) {
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


app.use("/api", routes);