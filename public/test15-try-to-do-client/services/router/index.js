define([
    "dojo/_base/declare",
    "dojo/router",
    "dojo/topic",
    "dojo/hash"
], function(declare, router, topic, hash){
    var routerClass = declare(null, {

        _routes : [],

        addRoutes : function(routes) {

        },

        init : function() {
            var self = this;
            var promise = new Promise(function(resolve, reject) {

                //router.register("/user/:id", function (event) {
                //    console.log("Hash change", event.params.id);
                //});

                console.log(hash());

                topic.subscribe("/dojo/hashchange", function(changedHash){
                    console.log(changedHash);
                });

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