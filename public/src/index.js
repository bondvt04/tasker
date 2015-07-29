//http://dojotoolkit.org/reference-guide/1.10/dojo/_base/declare.html#dojo-base-declare
//http://habrahabr.ru/post/209662/
//https://scotch.io/tutorials/use-ejs-to-template-your-node-application
//http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/
// подключаем компоненты https://github.com/substack/browserify-handbook?md-time=1436784389971#reusable-components
// webpack --progress --colors

// npm install -g webpack

// просто про webpack - кукбук - http://habrahabr.ru/post/245991/ - лоадеры картинок и стилей супер!!!

/*var dojoConfig = {
    //baseUrl: "/tasker/public/test15-try-to-do-client/",
    baseUrl: "/",
//                tlmSiblingOfDojo: false,
    packages: [
        { name: "services_router", location: "services/router", main: "index"},
        { name: "services_network", location: "services/network", main: "index"},
        { name: "modules_notes", location: "modules/notes", main: "index"}
        //{ name: "modules/tasks", location: "modules/tasks" }
//                    { name: "dojox", location: "lib/dojox" },
//                    { name: "app/index", location: "modules/tasks/index.js", main: "app" },
//                    { name: "app/tasks", location: "index.js", main: "app" }
    ]
};*/

require([
    "./amdConfig.js"
], function(config){
    require([
        "services_router",
    ], function(routerPromise){
        routerPromise.then(function(router) {
            router.setName("aaaaa");
            console.log("+1", router.getName());

            setTimeout(function() {
                console.log("+2", router.getName());
            }, 5000);
        });
    });

    require([
        "services_router",
    ], function(routerPromise){
        routerPromise.then(function(router) {
            router.setName("bbbbb");
            console.log("++2", router.getName());

            setTimeout(function() {
                console.log("++", router.getName());
            }, 5000);
        });
    });

    setTimeout(function() {
        require([
            "services_router",
        ], function(routerPromise){
            routerPromise.then(function(router) {
                console.log(">>>", router.getName());
            });
        });
    }, 5000);


    //require([
    //    "services_network",
    //], function(networkPromise){
    //    networkPromise.then(function(network) {
    //        network.setName("aaaaa");
    //        console.log("+1", network.getName());
    //
    //        setTimeout(function() {
    //            console.log("+2", network.getName());
    //        }, 5000);
    //    });
    //});
    //
    //require([
    //    "services_network",
    //], function(networkPromise){
    //    networkPromise.then(function(network) {
    //        network.setName("bbbbb");
    //        console.log("++2", network.getName());
    //
    //        setTimeout(function() {
    //            console.log("++", network.getName());
    //        }, 5000);
    //    });
    //});
    //
    //setTimeout(function() {
    //    require([
    //        "services_network",
    //    ], function(networkPromise){
    //        networkPromise.then(function(network) {
    //            console.log(">>>", network.getName());
    //        });
    //    });
    //}, 5000);

    /*require([
        "services_router",
        "services_network",
    ], function(router, network){
        //router.init();
        //network.init();


        //require([
        //    //"modules_tasks",
        //    "modules_notes"
        //], function() {
        //    var modules = arguments;
        //
        //    try {
        //        var router = new routerClass();
        //        var routerReadyPromise = router.init();
        //    } catch(e) {
        //        console.error(e);
        //    }
        //
        //    try {
        //        var network = new networkClass();
        //        var networkReadyPromise = network.init();
        //    } catch(e) {
        //        console.error(e);
        //    }
        //
        //    Promise.all([
        //        routerReadyPromise,
        //        networkReadyPromise
        //    ]).then(function(arrayOfResults) {
        //        var router = arrayOfResults[0];
        //        var network = arrayOfResults[1];
        //
        //        /**
        //         * Init all modules
        //         *
        //        (function initModules() {
        //            for(var i in modules) {
        //                (function() {
        //                    var module = new modules[i]();
        //
        //                    if(module && module.init && "function" === typeof module.init) {
        //                        module.init.bind(module)(router, network);
        //                    }
        //                })();
        //            }
        //        })();
        //
        //    }, function(err) {
        //        console.error(err);
        //    });
        //});
    });*/
});
