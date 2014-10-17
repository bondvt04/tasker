RAD.model('tasks_list_template', Backbone.Collection.extend({
    model: RAD.models.task,
    filterByName: function(name) {
        return new RAD.models.tasks_list_template(this.filter(function(task) {
            var regex = new RegExp(name, 'i');
            return regex.test(task.get("name"));
        }));
    }
}), false)

RAD.model('tasks_list', RAD.models.tasks_list_template, true);
