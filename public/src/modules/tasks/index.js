/**
 * @class TasksModule
 */
class Module {
    constructor(options) {
        //this.model = options.model;
    }

    init() {
        var self = this;
        var promises = arguments;

        var promise = new Promise(function(resolve, reject) {
            Promise.all(promises).then(function(arrayOfResults) {
                console.log("> TasksModule.init()");
                resolve(self);
            }, function(err) {
                reject(err);
            });
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
    var promises = arguments;
    //console.log("^^^", promises);

    return (function() {
        // fill init function with arguments as is (not as array)
        return (instance = (instance || (new Module()).init(...Array.prototype.slice.call(promises))));
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
