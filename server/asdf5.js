/**
 * Created by anatoliybondar on 10/2/15.
 */

var nconf = require('nconf');

nconf.argv()
    .env()
    .file({ file: './src/config/index.json' });

console.log(nconf.get("db"));