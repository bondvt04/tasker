define([
    "dojo/_base/declare"
], function(declare){
    var networkClass = declare(null, {
        init : function() {
            var self = this;
            var promise = new Promise(function(resolve, reject) {
                if (true) {
                    resolve(self);
                } else {
                    reject(new Error("Error while network.init"));
                }
            });

            return promise;
        }
    });

    return networkClass;
});