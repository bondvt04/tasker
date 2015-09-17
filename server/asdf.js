var logger = require("verbose-console-log");

logger.log("foo", "bar");

try {
    something.wrong();
} catch(err) {
    logger.error("asdf", "qwer");
}