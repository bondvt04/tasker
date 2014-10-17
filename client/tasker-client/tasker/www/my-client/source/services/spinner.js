RAD.service("service.spinner", RAD.Blanks.Service.extend({
    onReceiveMsg: function (channel, data) {
        "use strict";
        if("show" === data.action) {
            RAD.core.publish('navigation.show', {
                animation : "none",
                container_id : '#overlay',
                content : "view.spinner"
            });
            //RAD.core.publish('navigation.dialog.show', {
            //    content: "view.spinner"
            //});
        } else if("close" === data.action) {
            RAD.core.publish('navigation.show', {
                animation : "none",
                container_id : '#overlay',
                content : null
            });
            //RAD.core.publish('navigation.dialog.close', {
            //    content: "view.spinner"
            //});
        }
    }
}));
