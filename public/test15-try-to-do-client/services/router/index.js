define([
    "dojo/_base/declare",
    "dojo/router",
    "dojo/topic",
    "dojo/hash"
], function(declare, router, topic, hash){
    var routerClass = declare(null, {

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
                this._currentHash = "/"
            }

            if(routesToCheck) {
                for(var routeName in routesToCheck) {
                    if(this._currentHash === routeName) {
                        this._currentRoute = {
                            name: routeName,
                            callback: this._routes[routeName]
                        };

                        // run callback
                        this._currentRoute.callback();
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
});