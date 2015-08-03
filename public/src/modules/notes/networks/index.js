/**
 * @class NotesNetwork
 */
class Network {
    constructor(options) {

    }

    init() {
        var self = this;
        var promise = new Promise(function(resolve, reject) {

            //self._router = routerEngine;
            console.log("> NotesNetwork.init()");

            if (true) {
                resolve(self);
            } else {
                reject(new Error("Error while notes.network.init"));
            }
        });

        return promise;
    }
}

define([
    "services_network"
], function(mainNetwork) {
    var instance;

    return (function() {
        return (instance = (instance || (new Network()).init()));
    })();
});

//define([
//    "../../../../../test12-dojo/bower_components/dojo/_base/declare"
//], function(declare){
//    var routerClass = declare(null, {
//
//        _controller : null,
//
//        _routes : {
//
//            //"/notes": function () {
//            //    //console.log("> route /notes");
//            //},
//            //"/notes/add" : function() {
//            //    //console.log("> route /notes/add");
//            //}
//        },
//
//        init : function(mainRouter, mainNetwork, controller) {
//            try {
//                mainRouter.addRoutes({
//                    "/notes": {callback: controller.actions.index, context: controller},
//                    "/notes/add": {callback: controller.actions.add, context: controller}
//                })
//            } catch(e) {
//                console.error(e);
//            }
//
//            console.log("init notes router");
//        }
//    });
//
//    return routerClass;
//});