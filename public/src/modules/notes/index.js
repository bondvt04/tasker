/**
 * @class NotesModule
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
                var router = arrayOfResults[0];
                console.log("> NotesModule.init()");
                resolve(self);
            }, function(err) {
                reject(err);
            });
        });

        return promise;
    }
}

define([
    "./routers/index.js",
], function() {
    var instance;
    var promises = arguments;
    //console.log("^^^", promises);

    return (function() {
        // fill init function with arguments as is (not as array)
        return (instance = (instance || (new Module()).init(...Array.prototype.slice.call(promises))));
    })();
});


/*define([
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
         *
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
});*/
