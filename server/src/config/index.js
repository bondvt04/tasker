var CriticalError = require("../errors/index").classes.CriticalError;
var nconf = require('nconf');

// path from node start
nconf.argv()
    .env()
    .file({ file: './dist/config/index.json' });

if(!nconf.get("db")) {
    throw new CriticalError("Config path is incorrect!");
}

module.exports = nconf;