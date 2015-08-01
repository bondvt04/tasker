// одна сущность, вроде:
// data
//   -role:knowledge|knowledge+learn|cloth|cloth+diary
//   -owner
//   -history_of_changes
// стало быть, все модули можно реализовать, как плагины, которые могут работать с этими сущностями
// но тогда все маршруты и нетворк должны быть инкапсулированы в модулях

//http://dojotoolkit.org/reference-guide/1.10/dojo/_base/declare.html#dojo-base-declare
//http://habrahabr.ru/post/209662/
//https://scotch.io/tutorials/use-ejs-to-template-your-node-application
//http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/
// подключаем компоненты https://github.com/substack/browserify-handbook?md-time=1436784389971#reusable-components
// webpack --progress --colors



// просто про webpack - кукбук - http://habrahabr.ru/post/245991/ - лоадеры картинок и стилей супер!!!

require([
    "./config/amd.js",
    "./config/modules.js"
], function(amdConfig, modulesConfig){

    // load aliases and pathes to AMD require system
    //require.config(amdConfig);

    // load modules
    //console.log(modulesConfig.modules);

    //_.each(modulesConfig.modules, function(value, index) {
    //    console.log(index+"="+value);
    //})

    //var context = require.context("./modules/", false, /[^\/]+\/index\.js/);
    //
    //console.log(context.resolve("notes"));

    var zlo = "notes";
    //require("./modules/"+zlo+"/index.js", function(note) {
    //    console.log(note);
    //});

    //console.log(require("./modules/"+zlo+"/index.js"));
    require(["./modules/"+zlo+"/index.js"], function(note) {
        console.log("###", note);
    });

    //
    //
    //require.context(
    //    "./", // context folder
    //    true, // include subdirectories
    //    /^\.\/modules\/[^\/]+\/index\.js$/ // RegExp
    //)(["./" + zlo + "/index.js"], function() {
    //    console.log("###", arguments);
    //})

//console.log("asdf");

    //var zlo = "notes";
    //require.ensure([], function(require) {
    //    require(["./modules/notes/index.js"], function(note) {
    //        console.log(note);
    //    });
    //});




    //var zlo = [];
    ////
    //require(zlo, function() {
    //    console.log("asdf");
    //});

    //require(modulesConfig.modules, function(){
    //    debugger;
    //    console.log(arguments);
    //});


    //setTimeout(function() {
    //    require([
    //        "services_router",
    //    ], function(routerPromise){
    //        routerPromise.then(function(router) {
    //            console.log(">>>", router.getName());
    //        });
    //    });
    //}, 5000);


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


