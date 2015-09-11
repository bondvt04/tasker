/**
 * One domain per router
 */

'use strict';

var controller = require('../controllers/index');
var express = require('express');
var router = express.Router();
var domain = require('domain');

var reqDomain = domain.create();
reqDomain.add(router);
reqDomain.add(Promise);

reqDomain.on('error', function (err) {
    console.log("^^^^^^^^^^^^^^^^^^^ routerError!!!", err);
    throw err;
    reqDomain.dispose();
});

//reqDomain.run();

router.get('/', function (req, res, next) {

    controller.doAction("index", arguments);
});

// test, how works error handling
router.get('/nodes/500', function (req, res, next) {
    var controllerPromise = controller.doAction("error500", arguments);
});

// get list of nodes
router.get('/nodes', function (req, res, next) {

    //reqDomain.run(function() {
    //    setTimeout(function() {
    //        throw new Error("asdfqwer");
    //    }, 5000);
    //});

    reqDomain.run(function () {
        var Promise = require("promise");

        //throw new Error("asdfasdfasdf");

        var controllerPromise = new Promise(function (resolve, reject) {
            do_.something.wrong();
            //throw new Error("lol there are error occured");
        });

        //var controllerPromise = controller.doAction("lol", arguments);
        controllerPromise.then(function (result) {
            console.log("#################### not zlo");
        })['catch'](function (err) {
            console.error("######", err);
            throw new Error("asdfasdfasdf");
            //throw err;
            //next(err);
        });
    });

    /*var controllerPromise = controller.doAction("getNodes", arguments);
    controllerPromise.then(function(result) {
        res.json(res.jsonToRender);
        //next();
    }).catch(function(err) {
        console.err(err);
    });*/
});

// get one node by id
// @todo 400 if incorrect id, 404 if can't find resource
router.get('/nodes/:id', function (req, res, next) {
    var controllerPromise = controller.doAction("getOneNode", arguments);
    controllerPromise.then(function (result) {
        res.json(res.jsonToRender);
        //next();
    })['catch'](function (err) {
        console.err(err);
    });
});

// add new node
router.post('/nodes/add', function (req, res, next) {
    var controllerPromise = controller.doAction("addNode", arguments);
    controllerPromise.then(function (result) {
        res.json(res.jsonToRender);
        //next();
    })['catch'](function (err) {
        console.err(err);
    });
});

// update one node by id
router.put('/nodes/:id', function (req, res, next) {
    var controllerPromise = controller.doAction("updateNode", arguments);
    controllerPromise.then(function (result) {
        res.json(res.jsonToRender);
        //next();
    })['catch'](function (err) {
        console.err(err);
    });
});

// delete one node by id
router['delete']('/nodes/:id', function (req, res, next) {
    var controllerPromise = controller.doAction("deleteNode", arguments);
    controllerPromise.then(function (result) {
        res.json(res.jsonToRender);
        //next();
    })['catch'](function (err) {
        console.err(err);
    });
});

module.exports = router;
//# sourceMappingURL=../routes/index.js.map