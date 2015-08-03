class Router {
    constructor(options) {
        //this.model = options.model;
    }

    init(routerEngine) {
        var self = this;
        var promise = new Promise(function(resolve, reject) {

            //#home
            //#docs/16
            //#docs/16/paragraph/17
            //#default


            var router = window.routerRR = self._routerEngine = routerEngine;
            //var Router = window.Router;

            router.listen();

            router.config({
                mode: 'hash',
                keys: true,
                //root: "/"
            });



            //router.add(pathHome, function () {
            //        console.log(pathHome)
            //    })
            //    .add(pathDoc, function (params) {
            //        console.log(pathDoc);
            //    })
            //    .add(function () { // default routing
            //        console.log('default');
            //        router.navigate(pathHome);
            //    });
            //router
            //    .to(pathDoc)
            //    .add(subpathParagraph, function (params) {
            //        console.log(subpathParagraph);
            //    });
            //router.listen(); // todo listen & navigate
            //router.navigate('home');

            router.add("/home-page", function() {
                console.log("* route '/home-page'");
            });

            router.add("/notes(/)", function(params) {
                console.log("* route 'notes/'");
                //complete();
            });

            router.add("/notes/add", function(params) {
                console.log("* route 'notes/add'");
                //complete();
            });


            //router.route('/home-page');

            console.log(">>> router.init()");

            if (true) {
                resolve(self);
            } else {
                reject(new Error("Error while router.init"));
            }
        });

        return promise;
    }

    getRouterEngine() {
        return this._routerEngine;
    }
}

define([
    //"../../../lib/router.js/router-amd.js"
    "../../../lib/rad-router/bin/router.js"
], function(RADRouter) {
    var instance;

    return (function() {
        return (instance = (instance || (new Router()).init(RADRouter)));
    })();
});







/*define([
    //"dojo/_base/declare",
    //"dojo/router",
    //"dojo/topic",
    //"dojo/hash"
], function(router, topic, hash){
    var Router = function() {
        console.log("> Router");
    }

    return Router;

    /*var routerClass = declare(null, {

        _currentHash : null,

        _currentRoute : null,

        _routes : {},

        addRoutes : function(routes) {
            if(routes) {
                for (var routeName in routes) {
                    this._routes[routeName] = routes[routeName];
                }
            }

            // check only new routes
            this.checkRoutesAndRunIfMatch(routes);
        },

        checkRoutesAndRunIfMatch : function(routes) {
            var routesToCheck = routes || this._routes;

            this._currentHash = hash();

            if(!this._currentHash) {
                hash("/");
                this._currentHash = "/"
            }

            if(routesToCheck) {
                for(var routeName in routesToCheck) {
                    if(this._currentHash === routeName) {
                        this._currentRoute = {
                            name: routeName,
                            callback: this._routes[routeName].callback,
                            context: this._routes[routeName].context
                        };

                        // run callback
                        //this._currentRoute.callback();
                        this._currentRoute.callback.apply(this._currentRoute.context);

                    }
                }
            }
        },

        init : function() {
            var self = this;
            var promise = new Promise(function(resolve, reject) {

                //router.register("/user/:id", function (event) {
                //    console.log("Hash change", event.params.id);
                //});

                //console.log(hash());

                topic.subscribe("/dojo/hashchange", function(changedHash){
                    self.checkRoutesAndRunIfMatch();
                });

                self.checkRoutesAndRunIfMatch();

                //router.go("hash");
                //hash("someURL");

                if (true) {
                    resolve(self);
                } else {
                    reject(new Error("Error while router.init"));
                }
            });

            return promise;
        }
    });

    return routerClass;
});*/