module.exports = {
    controller : null,
    app : null,

    init : function(options) {
        //debugger;
        this.app = options.app;
        this.controllerApi = require(__dirname+'/../controllers/api/tasks/tasksController.js');
        this.controllerSite = require(__dirname+'/../controllers/site/tasks/tasksController.js');

        return this;
    },

    map : function() {
        var that = this;

        this.app.get("/tasks", function(a, b, c, d) {
            console.log("### index");
            debugger;
            //that.controller.index();
        });
        //this.app.get("/tasks/new", this.controller.new);
        //this.app.get(/tasks\/([\d]+)/, that.controller.show);
        this.app.get(/tasks\/([\d]+)/, function() {
            console.log("### show");
            //that.controller.show();
        });
        //this.app.post("/tasks/create", this.controller.create);
        //this.app.get("/tasks/:id/edit", this.controller.edit);
        //this.app.put("/tasks/:id", this.controller.update);
        //this.app.del("/tasks/:id", this.controller.destroy);


    }
}
