/**
 * @class NotesRouter
 */
class Router {
    constructor(options) {

    }

    init(options) {
        var self = this;
        var promise = new Promise(function(resolve, reject) {

            options.mainRouterPromise.then(function(mainRouter) {
                console.log("#####", mainRouter);

                //var router = mainRouter.getRouterEngine();
                //var router = window.Router;
                //window.routerLOL = router;



                //router.listen();

                //mainRouter.addRoutes({
                //    "notes(/)": function(params, complete) {
                //        console.log("route 'notes/'");
                //        complete();
                //    },
                //    "notes/add": function(params, complete) {
                //        console.log("route 'notes/add'");
                //        complete();
                //    }
                //});
            });



            //Router
            //    .add(about, function(params) { // ~about ('/about/:id')
            //        // todo your code
            //    })
            //    .add(posts, function(params, complete) { // ~posts ('/posts')
            //        // todo your code
            //        complete(); // do it by async way
            //    })
            //    .add(function(){ // default route  for ~index ('/')
            //        // todo default code
            //    });

            //self._router = routerEngine;
            console.log("> NotesRouter.init()");

            if (true) {
                resolve(self);
            } else {
                reject(new Error("Error while notes.router.init"));
            }
        });

        return promise;
    }
}

define([
    "services_router",
    "../controllers/index.js",
], function(mainRouter, indexController) {
    var instance;

    return (function() {
        return (instance = (instance || (new Router()).init({
            mainRouterPromise: mainRouter,
            controllers: {
                index: indexController
            }
        })));
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