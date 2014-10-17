RAD.service("service.error", RAD.Blanks.Service.extend({
    onReceiveMsg: function (channel, data) {
        "use strict";
        if("show" === data.action) {
            RAD.core.publish('navigation.dialog.show', {
                content: "view.error",
                animation: "slide-out",
                extras: {
                    error_type: data.error_type,
                    error_message: data.error_message,
                    refererView: data.refererView
                }
            });
        } else if("close" === data.action) {
            RAD.core.publish('navigation.dialog.close', {
                content: "view.error"
            });
        }
    }
}));
