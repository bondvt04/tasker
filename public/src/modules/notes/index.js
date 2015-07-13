//var baseUrl = "modules/notes/";

define([
    "../../../../test12-dojo/bower_components/dojo/_base/declare",
    //"../test15-try-to-do-client/modules/notes/hello.jsd"

    "./controllers/index",
    "./routers/index"



    //baseUrl+"controllers/index.js",


    //"./routers/index.js"
], function(declare, controllerClass, routerClass){

    //require([ "./hello.js" ], function(hello){
    //    console.log("hello");
    //});

    var moduleClass = declare(null, {
        /**
         * @todo inits via promises
         */
        init : function(mainRouter, mainNetwork) {
            var controller = new controllerClass();
            var router = new routerClass();

            if(controller && controller.init && "function" === typeof controller.init) {
                var controllerReadyPromise = controller.init.bind(controller)(mainRouter, mainNetwork);
            }

            controllerReadyPromise.then(function(result) {
                if(router && router.init && "function" === typeof router.init) {
                    router.init.bind(router)(mainRouter, mainNetwork, controller);
                }

                console.log("init notes controller");
            }, function(err) {
                console.error(err);
            });

            console.log("init notes module");
        }
    });

    return moduleClass;
});
