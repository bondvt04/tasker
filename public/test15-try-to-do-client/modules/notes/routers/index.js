define([
    "dojo/_base/declare",
    "dojo/topic",
    "dojo/router"
], function(declare, router, topic){




    var routerClass = declare(null, {
        baseUrl : "/notes",
        init : function() {
            router.register("/user/:id", function (event) {
                console.log("Hash change", event.params.id);
            });

            router.go("hash");

            console.log("init notes router");
        }
    });

    return routerClass;
});