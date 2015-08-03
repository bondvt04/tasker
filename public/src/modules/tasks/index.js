/**
 * @class TasksModule
 */
class Module {
    constructor(options) {
        //this.model = options.model;
    }

    init(options) {
        var self = this;
        var promise = new Promise(function(resolve, reject) {

            //self._router = routerEngine;
            console.log(">>> TasksModule.init()");
            console.log(options);

            if (true) {
                resolve(self);
            } else {
                reject(new Error("Error while router.init"));
            }
        });

        return promise;
    }
}

define([
    //"services_router",
    //"./routers/index.js",
    //"services_network",
    //"./networks/index.js",
    //"./controllers/index.js",
], function(mainRouter, router, mainNetwork, network, controller) {
    var instance;

    return (function() {
        return (instance = (instance || (new Module()).init(arguments)));
    })();
});

//define(["../../../../test12-dojo/bower_components/dojo/_base/declare"], function(declare){
//    //var controller = declare("tasksController", null, {
//    //    doSomething : function() {
//    //        console.log("asdf");
//    //    }
//    //});
//
//    var module = declare(null, {
//        doSomething : function() {
//            console.log("asdf");
//        },
//
//        init : function() {
//            console.log("init tasks module");
//        }
//    });
//
//    return module;
//});
