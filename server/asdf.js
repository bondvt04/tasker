var controller = require('../controllers/index');
var router = express.Router();
var domain = require('domain');

var reqDomain = domain.create();
reqDomain.add(router);

reqDomain.on('error', function (err) {
    console.log("routerError: ", err);
    //throw err;
    //reqDomain.dispose();
});

router.get('/nodes', function(req, res, next) {
    reqDomain.run(function() {
        // Так поймает
        //throw new Error("asdf");

        var controllerPromise = controller.doAction("index", arguments);
        controllerPromise.then(function(res) {

        }).catch(function(err) {
            // А так нет
            throw err;

            //next(err);
        });
    });
});

module.exports = router;