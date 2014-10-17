RAD.view("view.tasks.show", RAD.Blanks.View.extend({
    url: 'source/views/tasks/actions/show.html',
    events: {
        //'keyup input': 'changeVal'
    }
    //changeVal: function(e) {
    //    "use strict";
    //    var data = e.currentTarget.value;
    //
    //    this.publish("service.my_service", data);
    //    this.publish("service.my_service2", data);
    //}
}));