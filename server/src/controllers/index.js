// for consoles
var logger = require("verbose-console-log");
var Node = require("../models/Node");
var ApiControllerAbstract = require("./apiControllerAbstract");

//var querystring = require("querystring");

class Controller extends ApiControllerAbstract {

    constructor() {
        super(arguments);
    }

    //__beforeAction(req, res, next) {
    //    console.log("Controller.__beforeAction");
    //    return super.__beforeAction.apply(this, arguments);
    //}
    //
    //__afterAction(req, res, next, actionResult) {
    //    console.log("Controller.__afterAction");
    //    return super.__afterAction.apply(this, arguments);
    //}



    //doAction(actionName, args) {
    //    return new Promise(function(resolve, reject) {
    //        do_.something.wrong();
    //        //throw new Error("lol there are error occured");
    //    });
    //}



    /**
     * Тестим ловлю ошибок
     */
    _error500Action(req, res) {
        return new Promise(function(resolve, reject) {
            try {
                console.log("_error500Action");
                lol.hello.ololo();
                throw new Error("zlo");
            } catch(e) {
                console.log("### 1");
                reject(e);
            }
        });
    }

    /**
     * @todo Add filter, tags etc logic
     * @todo do res.end() in the end, not in controller
     */
    _getNodesAction(req, res) {
        return new Promise(function(resolve, reject) {
            resolve({a:"asdf", b:"bsdf"});
            //Node.find(function (err, nodes) {
            //    if (err) reject(err);
            //
            //    res.send(nodes);
            //
            //    resolve(nodes);
            //});

            //Kitten.find({ name: /^Fluff/ }, callback);
        });
    }

    _addNodeAction(req, res) {
        var newNode = new Node(req.body);

        return new Promise(function(resolve, reject) {
            newNode.save(function (err, node) {
                if (err) reject(err);

                console.log("___savePromise", node);
                resolve(node);
            });
        });
    }

    _indexAction(req, res) {
        return new Promise(function(resolve, reject) {
            res.send("just /index action");
            resolve();
        });
    }

    _testAction(req, res) {
        var hello = new Node({
            content: 'Hello, World!'
        });

        var savePromise = new Promise(function(resolve, reject) {
            hello.save(function (err, node) {
                if (err) reject(err);

                console.log("___savePromise", node.content);
                resolve(node);
            });
        });

        var findPromise = new Promise(function(resolve, reject) {
            Node.find(function (err, nodes) {
                if (err) reject(err);

                console.log("___findPromise", nodes);
                resolve(nodes);
            });

            //Kitten.find({ name: /^Fluff/ }, callback);
        });

        return new Promise(function(resolve, reject) {
            Promise.all([
                savePromise,
                findPromise
            ]).then(function(results) {
                resolve(results);
            }).catch(function(err) {
                reject();
            });
        });
    }
}

try {
    var controller = new Controller();
} catch(err) {
    logger.error(err);
}


module.exports = controller;
