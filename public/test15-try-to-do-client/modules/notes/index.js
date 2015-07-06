//var baseUrl = "modules/notes/";

define([
    "dojo/_base/declare",
    //"../test15-try-to-do-client/modules/notes/hello.jsd"

    "./controllers/index",
    "./routers/index"



    //baseUrl+"controllers/index.js",


    //"./routers/index.js"
], function(declare, controllerClass, routerClass){

    //require([ "./hello.js" ], function(hello){
    //    console.log("hello");
    //});

    var module = declare(null, {
        /**
         * @todo inits via promises
         */
        init : function() {
            var controller = new controllerClass();
            var router = new routerClass();

            if(controller && controller.init && "function" === typeof controller.init) {
                controller.init.bind(controller)();
            }

            if(router && router.init && "function" === typeof router.init) {
                router.init.bind(router)();
            }

            console.log("init notes module");
        }
    });

    return module;
});
