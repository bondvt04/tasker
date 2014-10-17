module.exports = {
    controller : null,
    app : null,
    router : null,

    init : function(options) {
        //debugger;
        this.app = options.app;
        this.router = options.router;
        this.controllerApi = require(__dirname+'/../controllers/api/tasks/tasksController.js');
        this.controllerSite = require(__dirname+'/../controllers/site/tasks/tasksController.js');

        return this;
    },

    map : function() {
        var that = this;

        this.router.route(/^\/tasks(?:\/)?$/)
            .get(function(request, response, next) {
                var thatClosure = that;
                var isApiRequest = (request.get('host').indexOf(thatClosure.app.get('port.api')) > -1) ? true : false;

                if(true === isApiRequest) {
                    thatClosure.controllerApi.index(request, response);
                } else {
                    thatClosure.controllerSite.index(request, response);
                }
            })
            .post(function(req, res, next) {
                next(new Error('not implemented'));
            })
            .put(function(req, res, next) {
                next(new Error('not implemented'));
            })
            .delete(function(req, res, next) {
                next(new Error('not implemented'));
            })
            .all(function(request, response, next) {
                // do nothing...
                console.log("### all");
                debugger;
            })

        //this.app.get("/tasks/new", this.controller.new);
        //this.app.get(/tasks\/([\d]+)/, that.controller.show);
        this.app.get(/^\/tasks\/([\d]+(?:\/)?)/, function() {
            console.log("### show");
            //that.controller.show();
        });
        //this.app.post("/tasks/create", this.controller.create);
        //this.app.get("/tasks/:id/edit", this.controller.edit);
        //this.app.put("/tasks/:id", this.controller.update);
        //this.app.del("/tasks/:id", this.controller.destroy);


    }
}
