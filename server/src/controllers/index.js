var Node = require("../models/Node");

//var querystring = require("querystring");

class Controller {

    __beforeAction(req, res, next) {
        // we will render it later if no error
        res.jsonToRender = {};
    }

    __afterAction(req, res, next, result) {
        //return new Promise(function(resolve, reject) {
        //    console.log("### 3");
        //    resolve(result);
        //    //next();
        //});
    }

    /**
     * Args: [req, res, next]
     */
    doAction(actionName, args) {
        var functionName = "_"+actionName+"Action";
        var self = this;
        var req = args[0];
        var res = args[1];
        var next = args[2];

        var Promise = require("promise");

        return new Promise(function(resolve, reject) {
            if(self[functionName] && "function" === typeof self[functionName]) {
                //self.__beforeAction(req, res, next);

                resolve();

                // fill with arguments as is (not as array)
                /*var actionPromise = self[functionName](...Array.prototype.slice.call(args));

                function doAfterAction() {
                    //process.on('uncaughtException', function (err) {
                    //    console.log("lol error");
                    //    console.error(err);
                    //});

                    //try {
                        console.log("---^^^---1");
                        throw new Error("zlo");
                        console.log("---^^^---2");
                        var afterActionPromise = self.__afterAction(req, res, next, result);

                        console.log("---&&&---");

                        afterActionPromise.then(function(result) {
                            console.log("### 4");
                            resolve(result);
                        }).catch(function(err) {
                            console.log("### 5");
                            reject(err);
                        }).done(function() {
                            console.log("### 6");
                        });
                    //} catch(e) {
                        //console.log(e);
                        //console.error(e);
                        //throw e;
                    //}
                }

                actionPromise.then(function(result) {
                    console.log("### 7");
                    doAfterAction().then(function(afterActionResult) {
                        resolve(afterActionResult);
                    }).catch(function(err) {
                        reject(err);
                    });
                }).catch(function(err) {
                    console.log("### 8");
                    doAfterAction();
                    reject(err);
                });*/
            }
        });
    }

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
            Node.find(function (err, nodes) {
                if (err) reject(err);

                res.send(nodes);

                resolve(nodes);
            });

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

module.exports = new Controller();
