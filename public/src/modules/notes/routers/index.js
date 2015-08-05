/**
 * @class NotesRouter
 */
class Router {
    constructor(options) {

    }

    init() {
        var self = this;
        var promises = arguments;

        var promise = new Promise(function(resolve, reject) {

            Promise.all(promises).then(function(arrayOfResults) {
                var mainRouter = arrayOfResults[0];
                var controller = arrayOfResults[1];

                mainRouter.add("notes(/)", controller.actions.index);
                mainRouter.add("notes/add", controller.actions.add);
                mainRouter.add("notes/addffff", controller.actions.addffff);
                mainRouter.add("notes/addfff", controller.actions.addfff);

                console.log("> NotesRouter.init()");

                resolve(self);
            }, function(err) {
                reject(err);
            });
        });

        return promise;
    }
}

define([
    "services_router",
    "../controllers/index.js",
], function() {
    var instance;
    var promises = arguments;
    //console.log("^^^", promises);

    return (function() {
        // fill init function with arguments as is (not as array)
        return (instance = (instance || (new Router()).init(...Array.prototype.slice.call(promises))));
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