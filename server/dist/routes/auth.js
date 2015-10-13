

var OpError = require("../errors/index").classes.OpError;

//var controller = require('../controllers/auth');
var express = require('express');
var router = express.Router();
var logger = require('verbose-console-log');

// Do your next() stuff in controller's actions when you done

router.get('/login', function (req, res, next) {
    console.log("###### qwer");
    res.send("qwer");
    //controller.doAction("index", arguments);
});

module.exports = router;
//# sourceMappingURL=../routes/auth.js.map