(function (document, window) {
    'use strict';

    var scripts = [
        "libs/iscroll-lite.js",

        "source/application/application.js",


        "source/views/tasks/layout.js",
        "source/views/tasks/actions/index.js",
        "source/views/tasks/actions/show.js",
        "source/views/tasks/actions/new.js",
        "source/views/spinner/spinner.js",


        "source/views/widget1/widget1.js",
        "source/views/widget2/widget2.js",
        "source/services/111services.js",
        "source/services/spinner.js",
        "source/services/error.js",

        "source/models/tasks/task.js",
        "source/models/tasks/tasks_list.js"
    ];

    function onEndLoad() {

        var core = window.RAD.core,
            application = window.RAD.application;

        //initialize core by new application object
        core.initialize(application);

        //start
        application.start();
    }

    window.RAD.scriptLoader.loadScripts(scripts, onEndLoad);
}(document, window));