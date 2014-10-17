RAD.view("view.tasks.index", RAD.Blanks.View.extend({
    url: 'source/views/tasks/actions/index.html',

    filterTasks: function (data) {
        this.bindModel(RAD.models.tasks_list.filterByName(data.name));
    },

    onInitialize : function() {
        //this.model = RAD.models.tasks_list;
        this.bindModel(RAD.models.tasks_list);
    },

    onEndAttach: function () {
        var that = this;
        console.log("index's onEndAttach");

        // if device not configured yet, jump to "config" page
        //if(!RAD.models.current_device.get("deviceId")) {
        //    RAD.core.publish('navigation.show', {
        //        container_id: '#screen',
        //        content: "view.config",
        //        animation: "slide-out",
        //    });
        //    return;
        //}

        RAD.core.publish("service.spinner", {
            action: "show"
        });

        if (true) {
            //debugger;
            this.model.fetch({
                url: "http://api.tasker.com/tasks",
                type: 'GET',
                data: {
                    //hello: RAD.models.current_device.get('deviceId')
                },
                success: function (model, response) {
                    if ("success" !== response.status) {
                        RAD.core.publish("service.error", {
                            action: "show",
                            refererView: that,
                            error_type: "bad_response",
                            error_message: "Bad response from server. Description: \"" + response.description + "\""
                        });
                        return;
                    }

                    model.reset(response.data);
                    //this.fetched = false;
                    //that.refreshView();
                },
                error: function (model, response, options) {
                    RAD.core.publish("service.error", {
                        action: "show",
                        refererView: that,
                        error_type: "connection_failed",
                        error_message: "Cannot connect to server."
                        + "<br>Status: "
                        + response.status
                        + "<br>Status text: "
                        + response.statusText
                    });
                },
                complete: function () {
                    RAD.core.publish("service.spinner", {
                        action: "close"
                    });
                }
            });
        } else {
            setTimeout(function () {
                RAD.core.publish("service.spinner", {
                    action: "close"
                });
            }, 2000);
        }
    }

}));