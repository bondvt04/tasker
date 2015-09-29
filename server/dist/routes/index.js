

var OpError = require("../errors/index").classes.OpError;

var controller = require('../controllers/index');
var express = require('express');
var router = express.Router();
var logger = require('verbose-console-log');

// Do your next() stuff in controller's actions when you done

router.get('/', function (req, res, next) {
    controller.doAction("index", arguments);
});

// test, how works error handling
router.get('/nodes/500', function (req, res, next) {
    controller.doAction("error500", arguments);
});

// get list of nodes
router.get('/nodes', function (req, res, next) {
    //throw new OpError("lol2");
    //next(new Error("asdf"));

    //var promise = controller.doAction("getNodes", arguments);

    //controller.doAction("getNodes", arguments).then(function(result) {
    //    logger.log(result);
    //}).catch(function(err) {
    //    logger.error(err);
    //});

    //var controllerPromise = controller.doAction("getNodes", arguments);
    //controllerPromise.then(function(result) {
    //    res.json(res.jsonToRender);
    //    next();
    //}).catch(function(err) {
    //    logger.err(err);
    //    next(err);
    //});
});

// get one node by id
// @todo 400 if incorrect id, 404 if can't find resource
router.get('/nodes/:id', function (req, res, next) {
    var controllerPromise = controller.doAction("getOneNode", arguments);
    controllerPromise.then(function (result) {
        res.json(res.jsonToRender);
        //next();
    })['catch'](function (err) {
        logger.err(err);
    });
});

// add new node
router.post('/nodes/add', function (req, res, next) {
    var controllerPromise = controller.doAction("addNode", arguments);
    controllerPromise.then(function (result) {
        res.json(res.jsonToRender);
        //next();
    })['catch'](function (err) {
        logger.err(err);
    });
});

// update one node by id
router.put('/nodes/:id', function (req, res, next) {
    var controllerPromise = controller.doAction("updateNode", arguments);
    controllerPromise.then(function (result) {
        res.json(res.jsonToRender);
        //next();
    })['catch'](function (err) {
        logger.err(err);
    });
});

// delete one node by id
router['delete']('/nodes/:id', function (req, res, next) {
    var controllerPromise = controller.doAction("deleteNode", arguments);
    controllerPromise.then(function (result) {
        res.json(res.jsonToRender);
        //next();
    })['catch'](function (err) {
        logger.err(err);
    });
});

module.exports = router;
//# sourceMappingURL=../routes/index.js.map