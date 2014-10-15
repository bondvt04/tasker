module.exports = routesManager = {
    app : null,
    express : null,
    router : null,

    init : function(options) {
        this.express = require('express');
        this.router = this.express.Router();
        this.app = options.app;

        return this;
    },

    map : function() {
        this.router.get('/', function(request, response) {
            response.render('index', {
                title: 'Express'
            });
        });

        require('./tasks.js').init({app:this.app}).map();
        require('./knowledges.js').init({app:this.app}).map();

        return this;
    },

    getRouter : function() {
        return this.router;
    }
}
