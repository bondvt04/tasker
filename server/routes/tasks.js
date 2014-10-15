module.exports = {
    controller : null,
    app : null,

    init : function(options) {
        this.app = options.app;
        this.controller = require(__dirname+'/../controllers/tasks.js');

        return this;
    },

    map : function() {
        var that = this;
        this.app.get("/tasks", this.controller.index);
        //this.app.get("/tasks/new", this.controller.new);
        //this.app.get(/tasks\/([\d]+)/, that.controller.show);
        this.app.get(/tasks\/([\d]+)/, that.controller.show);
        //this.app.post("/tasks/create", this.controller.create);
        //this.app.get("/tasks/:id/edit", this.controller.edit);
        //this.app.put("/tasks/:id", this.controller.update);
        //this.app.del("/tasks/:id", this.controller.destroy);


    }
}
