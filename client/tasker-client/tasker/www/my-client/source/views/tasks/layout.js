RAD.view("view.tasks.layout", RAD.Blanks.View.extend({
    url: 'source/views/tasks/layout.html',
    events: {
        //'keyup input': 'changeVal'
        'click .tasks-menu__item': 'open'
    },

    open: function (e) {
        "use strict";

        //debugger;
        this.publish('navigation.show', {
            //animation : "fade",
            animation : "slide",
            container_id : '#tasks__content',
            content : e.target.getAttribute("data-destination")
        });

        //var options = {
        //        container_id: '#screen',
        //        content: "view.second_page"
        //    },
        //    animation;
        //
        //animation = this.$('input[type=radio]:checked').attr('id');
        //if (animation && animation.length > 0) {
        //    options.animation = animation;
        //}
        //options.extras = {animation: animation};
        //
        //this.publish('navigation.show', options);
    },

    //onInitialize : function() {console.log("onInitialize");},
    //onStartRender : function() {console.log("onStartRender");},
    //onEndRender : function() {console.log("onEndRender");},
    //onNewExtras : function() {console.log("onNewExtras");},
    //onStartAttach : function() {console.log("onStartAttach");},
    //onEndAttach : function() {console.log("onEndAttach");},
    //onEndDetach : function() {console.log("onEndDetach");},
    //onDestroy : function() {console.log("onDestroy");},
    //onReceiveMsg : function() {console.log("onReceiveMsg");}

    /*onEndRender : function() {
        window.setTimeout(function() {
            RAD.core.publish('navigation.show', {
                container_id: '#tasks__content',
                content: 'view.tasks.index',
                animation: 'none'
            });
        }, 100);
    }*/
    //changeVal: function(e) {
    //    "use strict";
    //    var data = e.currentTarget.value;
    //
    //    this.publish("service.my_service", data);
    //    this.publish("service.my_service2", data);
    //}
}));




