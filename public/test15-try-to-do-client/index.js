//http://dojotoolkit.org/reference-guide/1.10/dojo/_base/declare.html#dojo-base-declare
//http://habrahabr.ru/post/209662/
//https://scotch.io/tutorials/use-ejs-to-template-your-node-application
//http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/


require([
    "services_router",
    "services_network",
], function(routerClass, networkClass){
    require([
        //"modules_tasks",
        "modules_notes"
    ], function() {
        var modules = arguments;

        try {
            var router = new routerClass();
            var routerReadyPromise = router.init();
        } catch(e) {
            console.error(e);
        }

        try {
            var network = new networkClass();
            var networkReadyPromise = network.init();
        } catch(e) {
            console.error(e);
        }

        Promise.all([
            routerReadyPromise,
            networkReadyPromise
        ]).then(function(arrayOfResults) {
            var router = arrayOfResults[0];
            var network = arrayOfResults[1];

            /**
             * Init all modules
             */
            (function initModules() {
                for(var i in modules) {
                    (function() {
                        var module = new modules[i]();

                        if(module && module.init && "function" === typeof module.init) {
                            module.init.bind(module)(router, network);
                        }
                    })();
                }
            })();

        }, function(err) {
            console.error(err);
        });
    });
});


