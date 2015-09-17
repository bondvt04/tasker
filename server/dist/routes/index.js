

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var controller = require('../controllers/index');
var express = require('express');
var router = express.Router();
var logger = require('verbose-console-log');

var Hello = (function () {
    function Hello() {
        _classCallCheck(this, Hello);
    }

    _createClass(Hello, [{
        key: 'getGreeting',
        value: function getGreeting() {
            return "Hello, World!";
        }
    }]);

    return Hello;
})();

router.get('/', function (req, res, next) {

    controller.doAction("index", arguments);
});

// test, how works error handling
router.get('/nodes/500', function (req, res, next) {
    var controllerPromise = controller.doAction("error500", arguments);
});

// get list of nodes
router.get('/nodes', function (req, res, next) {

    //console.error("@@@"+__file+":"+__line+":aaaaaaaaaaaaaa");
    logger.log("asdf", "qwer");

    try {
        asdf.qwer();
    } catch (err) {
        logger.error("ttt", 1234, 1234);
    }

    //throw new Error("qwerqwerqwer");

    //logger.log("Hello, world!");
    //logger.error("Hello, world!!!");

    //var Promise = require("promise");
    //
    ////throw new Error("asdfasdfasdf");
    //
    //var controllerPromise = new Promise(function(resolve, reject) {
    //    do_.something.wrong();
    //    //throw new Error("lol there are error occured");
    //});
    //
    ////var controllerPromise = controller.doAction("lol", arguments);
    //controllerPromise.then(function(result) {
    //    console.log("#################### not zlo")
    //}).catch(function(err) {
    //    console.error("######", err);
    //    throw new Error("<<<<<<<< asdfasdfasdf >>>>>>>>");
    //    //throw err;
    //    //next(err);
    //});

    //var controllerPromise = controller.doAction("getNodes", arguments);
    //controllerPromise.then(function(result) {
    //    res.json(res.jsonToRender);
    //    next();
    //}).catch(function(err) {
    //    console.err(err);
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