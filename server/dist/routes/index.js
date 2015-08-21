'use strict';

var controller = require('../controllers/index');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    controller.doAction("index", arguments);
});

module.exports = router;
//# sourceMappingURL=../routes/index.js.map