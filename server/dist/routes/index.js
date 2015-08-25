'use strict';

var controller = require('../controllers/index');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    controller.doAction("index", arguments);
});

// get list of nodes
router.get('/nodes', function (req, res, next) {
    controller.doAction("getNodes", arguments);
});

// get one node by id
// @todo 400 if incorrect id, 404 if can't find resource
router.get('/nodes/:id', function (req, res, next) {
    controller.doAction("getOneNode", arguments);
});

// add new node
router.post('/nodes/add', function (req, res, next) {
    controller.doAction("addNode", arguments);
});

// update one node by id
router.put('/nodes/:id', function (req, res, next) {
    controller.doAction("updateNode", arguments);
});

// delete one node by id
router['delete']('/nodes/:id', function (req, res, next) {
    controller.doAction("deleteNode", arguments);
});

module.exports = router;
//# sourceMappingURL=../routes/index.js.map