class Network {
    constructor(options) {
        //this.model = options.model;
    }

    init() {
        var self = this;
        var promise = new Promise(function(resolve, reject) {

            console.log(">>> network.init()");

            if (true) {
                resolve(self);
            } else {
                reject(new Error("Error while network.init"));
            }
        });

        return promise;
    }
}

define([], function() {
    var instance;

    return (function() {
        return (instance = (instance || (new Network()).init()));
    })();
});
