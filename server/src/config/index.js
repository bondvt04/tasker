var nconf = require('nconf');

nconf.argv()
    .env()
    .file({ file: './config/index.json' });

module.exports = nconf;