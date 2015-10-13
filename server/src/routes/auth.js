
var OpError = require("../errors/index").classes.OpError;

//var controller = require('../controllers/auth');
var express = require('express');
var router = express.Router();
var logger = require('verbose-console-log');

// Do your next() stuff in controller's actions when you done

router.get('/add', function(req, res, next) {
    console.log("###### auth_controller.addUser");
    res.send("auth_controller.addUser");
    //controller.doAction("index", arguments);
});

router.get('/login', function(req, res, next) {
    controller.doAction("index", arguments);
});

module.exports = router;
