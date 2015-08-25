#!/usr/bin/env node
var debug = require('debug')('server');
var app = require('../app');

//app.set('port.site', process.env.PORT || 4000);
//app.set('port.api', process.env.PORT || 5000);

app.set('port.site', 4000);
app.set('port.api', 5000);

var serverSite = app.listen(app.get('port.site'), function() {
  debug('Site requests listening on port ' + serverSite.address().port);
});

var serverApi = app.listen(app.get('port.api'), function() {
  debug('Api requests listening on port ' + serverApi.address().port);
});
