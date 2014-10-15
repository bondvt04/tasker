module.exports = {
    controller : null,
    app : null,

    init : function(options) {
        this.app = options.app;
        //console.log(__dirname+'/../controllers/tasks.js');
        //debugger;
        //this.controller = require(__dirname+'/../controllers/tasks.js');

        return this;
    },

    map : function() {
        //app.get("/tasks", this.controller.index);
        //app.get("/tasks/new", this.controller.new);
        //app.get("/tasks/:id", this.controller.show);
        //app.post("/tasks/create", this.controller.create);
        //app.get("/tasks/:id/edit", this.controller.edit);
        //app.put("/tasks/:id", this.controller.update);
        //app.del("/tasks/:id", this.controller.destroy);
    }
}
