RAD.view("view.error", RAD.Blanks.View.extend({
    url:'source/views/error/error.html',
    model: new (Backbone.Model.extend({defaults: {
        error_type: "default",
        error_message: "There are some error occurred"
    }})),
    events: {
        'tap #error-buttons-ok': 'errorOk',
    },
    
    errorOk: function () {
        "use strict";
        RAD.core.publish("service.error", {
            action: "close"
        });
    },
    
    onNewExtras: function (extras) {
        "use strict";
        var that = this;
        this.model.set(extras);
        //this.refererView = extras.refererView;
    }
}));