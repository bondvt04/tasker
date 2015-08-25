'use strict';

var controller = require('../controllers/index');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    controller.doAction("index", arguments);
});

router.get('/nodes', function (req, res, next) {
    controller.doAction("getNodes", arguments);
});

module.exports = router;
//# sourceMappingURL=../routes/index.js.map